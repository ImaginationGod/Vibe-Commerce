import CartItem from '../models/CartItem.js';
import Product from '../models/Product.js';

export const checkout = async (req, res) => {
    const { cartItems, customer, sessionId } = req.body;

    let itemsResolved = [];

    if (Array.isArray(cartItems) && cartItems.length > 0) {
        // cartItems may be { productId or id (cartItem id), qty }
        for (const ci of cartItems) {
            if (ci.id) {
                // if client passed cartItem id, fetch snapshot
                const dbItem = await CartItem.findById(ci.id).populate('product').lean();
                if (!dbItem) continue;
                const price = dbItem.priceSnapshot ?? (dbItem.product && dbItem.product.price) ?? 0;
                itemsResolved.push({
                    name: dbItem.nameSnapshot ?? (dbItem.product && dbItem.product.name),
                    qty: ci.qty ?? dbItem.qty,
                    price,
                    subTotal: Number(((ci.qty ?? dbItem.qty) * price).toFixed(2))
                });
            } else if (ci.productId) {
                const product = await Product.findById(ci.productId).lean();
                if (!product) continue;
                const qty = ci.qty ?? 1;
                itemsResolved.push({
                    name: product.name,
                    qty,
                    price: product.price,
                    subTotal: Number((product.price * qty).toFixed(2))
                });
            }
        }
    } else if (sessionId) {
        const serverItems = await CartItem.find({ sessionId }).populate('product').lean();
        for (const it of serverItems) {
            const price = it.priceSnapshot ?? (it.product && it.product.price) ?? 0;
            itemsResolved.push({
                name: it.nameSnapshot ?? (it.product && it.product.name),
                qty: it.qty,
                price,
                subTotal: Number((price * it.qty).toFixed(2))
            });
        }
    } else {
        res.status(400);
        throw new Error('No cartItems provided and no sessionId provided');
    }

    const total = itemsResolved.reduce((acc, i) => acc + i.subTotal, 0);

    const receipt = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        customer: customer ?? null,
        items: itemsResolved,
        total: Number(total.toFixed(2)),
        timestamp: new Date().toISOString()
    };

    // Optionally: clear cart for session
    if (sessionId) {
        await CartItem.deleteMany({ sessionId });
    }

    // return mock receipt
    res.status(201).json({ receipt });
};
