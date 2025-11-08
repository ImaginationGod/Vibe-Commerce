import CartItem from '../models/CartItem.js';
import Product from '../models/Product.js';

export const getCart = async (req, res) => {
    const { sessionId } = req.query;
    const filter = sessionId ? { sessionId } : {};

    const items = await CartItem.find(filter).populate('product').lean();

    const mapped = items.map((it) => {
        const price = it.priceSnapshot ?? (it.product && it.product.price) ?? 0;
        return {
            id: it._id,
            productId: it.product ? it.product._id : null,
            name: it.nameSnapshot ?? (it.product && it.product.name),
            qty: it.qty,
            price,
            subTotal: Number((price * it.qty).toFixed(2))
        };
    });

    const total = mapped.reduce((acc, i) => acc + i.subTotal, 0);

    res.json({ items: mapped, total: Number(total.toFixed(2)) });
};

export const addToCart = async (req, res) => {
    const { productId, qty = 1, sessionId } = req.body;
    if (!productId) {
        res.status(400);
        throw new Error('productId is required');
    }
    const product = await Product.findById(productId);
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    const filter = { product: product._id };
    if (sessionId) filter.sessionId = sessionId;

    let item = await CartItem.findOne(filter);
    if (item) {
        item.qty = item.qty + Number(qty);
        await item.save();
        return res.status(200).json({ message: 'Updated cart item', item });
    }

    const newItem = new CartItem({
        product: product._id,
        qty: Number(qty),
        priceSnapshot: product.price,
        nameSnapshot: product.name,
        sessionId
    });
    await newItem.save();
    res.status(201).json({ message: 'Added to cart', item: newItem });
};

export const updateCartItem = async (req, res) => {
    const id = req.params.id;
    const { qty } = req.body;
    if (!qty || qty < 1) {
        res.status(400);
        throw new Error('qty must be >= 1');
    }
    const item = await CartItem.findById(id);
    if (!item) {
        res.status(404);
        throw new Error('Cart item not found');
    }
    item.qty = Number(qty);
    await item.save();
    res.json({ message: 'Cart item updated', item });
};

export const removeCartItem = async (req, res) => {
    const id = req.params.id;
    const item = await CartItem.findById(id);
    if (!item) {
        res.status(404);
        throw new Error('Cart item not found');
    }
    await item.deleteOne();
    res.json({ message: 'Removed from cart', id });
};
