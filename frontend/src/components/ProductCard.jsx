import { useCartStore } from "../store/cartStore";

export default function ProductCard({ product }) {
    const addToCart = useCartStore((s) => s.addToCart);

    return (
        <div className="bg-white p-4 shadow rounded-lg">
            <img
                src={product.image || "https://via.placeholder.com/300x200?text=No+Image"}
                alt={product.name}
                className="h-40 w-full object-cover rounded mb-3"
            />

            <h2 className="text-lg font-medium">{product.name}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>

            <button
                onClick={() => addToCart(product._id)}
                className="mt-3 bg-black text-white px-4 py-2 rounded"
            >
                Add to Cart
            </button>
        </div>
    );
}
