export default function ReceiptModal({ receipt, onClose }) {
    if (!receipt) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
                <h2 className="text-xl font-semibold mb-3">Receipt</h2>

                <p className="text-sm text-gray-600 mb-2">
                    Timestamp: {receipt.timestamp}
                </p>

                {receipt.items.map((i, idx) => (
                    <div key={idx} className="flex justify-between py-1">
                        <span>{i.name} × {i.qty}</span>
                        <span>${i.subTotal.toFixed(2)}</span>
                    </div>
                ))}

                <hr className="my-3" />

                <p className="font-semibold text-right text-lg">
                    Total: ${receipt.total.toFixed(2)}
                </p>

                <button
                    onClick={onClose}
                    className="mt-4 bg-black text-white px-4 py-2 rounded w-full"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
