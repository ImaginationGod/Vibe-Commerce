import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get("/api/products").then((res) => setProducts(res.data));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
                <ProductCard key={p._id} product={p} />
            ))}
        </div>
    );
}
