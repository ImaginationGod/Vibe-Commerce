import { useEffect } from "react";
import { useCartStore } from "../store/cartStore";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
    const { items, total, fetchCart } = useCartStore();

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {items.map((i) => (
                        <CartItem key={i.id} item={i} />
                    ))}

                    <div className="text-right mt-4 font-semibold text-xl">
                        Total: ${total.toFixed(2)}
                    </div>

                    <Link
                        to="/checkout"
                        className="mt-4 inline-block bg-black text-white px-4 py-2 rounded"
                    >
                        Proceed to Checkout
                    </Link>
                </>
            )}
        </div>
    );
}
