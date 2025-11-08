import { create } from "zustand";
import api from "../services/api";

export const useCartStore = create((set, get) => ({
    items: [],
    total: 0,

    fetchCart: async () => {
        const res = await api.get("/api/cart");
        set({ items: res.data.items, total: res.data.total });
    },

    addToCart: async (productId) => {
        await api.post("/api/cart", { productId, qty: 1 });
        get().fetchCart();
    },

    removeItem: async (id) => {
        await api.delete(`/api/cart/${id}`);
        get().fetchCart();
    },

    updateQty: async (id, qty) => {
        await api.put(`/api/cart/${id}`, { qty });
        get().fetchCart();
    },

    checkout: async (customer) => {
        const { items } = get();
        const cartItems = items.map((i) => ({
            id: i.id,
            qty: i.qty,
        }));

        const res = await api.post("/api/checkout", { cartItems, customer });
        return res.data.receipt;
    }
}));
