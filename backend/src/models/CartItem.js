import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        qty: { type: Number, required: true, min: 1, default: 1 },
        // store snapshot of price/name to avoid issues if product changes later
        priceSnapshot: { type: Number, required: true },
        nameSnapshot: { type: String, required: true },
        sessionId: { type: String } // optional: support multiple mock users
    },
    { timestamps: true }
);

const CartItem = mongoose.model('CartItem', cartItemSchema);
export default CartItem;
