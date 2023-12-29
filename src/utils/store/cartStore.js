import { create } from "zustand";

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

const useCart = create((set) => ({
  cart: initialCart,
  increaseCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
}));

export default useCart;
