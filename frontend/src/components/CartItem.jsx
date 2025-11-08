import { useCartStore } from "../store/cartStore";

export default function CartItem({ item }) {
    const removeItem = useCartStore((s) => s.removeItem);
    const updateQty = useCartStore((s) => s.updateQty);

    return (
        <div className="flex justify-between items-center bg-white p-4 shadow rounded mb-3">
            <div>
                <h3 className="font-medium">{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center gap-3">
                <input
                    type="number"
                    min="1"
                    className="w-16 border px-2 py-1"
                    value={item.qty}
                    onChange={(e) => updateQty(item.id, Number(e.target.value))}
                />

                <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 font-medium"
                >
                    Remove
                </button>
            </div>
        </div>
    );
}
