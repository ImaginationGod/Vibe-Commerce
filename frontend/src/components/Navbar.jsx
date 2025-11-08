import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export default function Navbar() {
    const items = useCartStore((s) => s.items);

    return (
        <nav className="bg-white shadow">
            <div className="max-w-6xl mx-auto p-4 flex justify-between">
                <Link to="/" className="text-xl font-semibold">
                    Vibe Commerce
                </Link>

                <Link to="/cart" className="font-medium">
                    Cart ({items.length})
                </Link>
            </div>
        </nav>
    );
}
