import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import ReceiptModal from "../components/ReceiptModal";

export default function Checkout() {
    const checkout = useCartStore((s) => s.checkout);

    const [customer, setCustomer] = useState({ name: "", email: "" });
    const [receipt, setReceipt] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await checkout(customer);
        setReceipt(data);
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

            <form onSubmit={handleSubmit} className="max-w-md space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border px-3 py-2 rounded"
                    value={customer.name}
                    onChange={(e) =>
                        setCustomer({ ...customer, name: e.target.value })
                    }
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border px-3 py-2 rounded"
                    value={customer.email}
                    onChange={(e) =>
                        setCustomer({ ...customer, email: e.target.value })
                    }
                />

                <button
                    className="w-full bg-black text-white py-2 rounded"
                    type="submit"
                >
                    Complete Checkout
                </button>
            </form>

            <ReceiptModal receipt={receipt} onClose={() => setReceipt(null)} />
        </div>
    );
}
