import { create } from "zustand";

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

const useCart = create((set) => ({
  cart: initialCart,
  setCart: (products) => set({ cart: products }),
  increaseCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  paymentMethod: "",
  setPaymentMethod: (method) => set({ paymentMethod: method }),
}));

export default useCart;
