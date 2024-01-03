import { create } from "zustand";

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
const initialNotification = JSON.parse(localStorage.getItem("notification")) || [];

const useCart = create((set) => ({
  cart: initialCart,
  setCart: (products) => set({ cart: products }),
  increaseCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  paymentMethod: "",
  setPaymentMethod: (method) => set({ paymentMethod: method }),
  notification: initialNotification,
  setNotification: (params) => set({ notification: params }),
}));

export default useCart;
