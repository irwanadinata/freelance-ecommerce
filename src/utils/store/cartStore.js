import { create } from "zustand";

const initialCart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
const initialNotification = localStorage.getItem("notification")
  ? JSON.parse(localStorage.getItem("notification"))
  : [];

const useCart = create((set) => ({
  cart: initialCart,
  setCart: (products) => set({ cart: products }),
  increaseCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  selectedPaymentMethod: "",
  setPaymentMethod: (method) => set({ selectedPaymentMethod: method }),
  notification: initialNotification,
  setNotification: (params) => set({ notification: params }),
  totalPrice: "",
  setTotalPrice: (params) => set({ totalPrice: params }),
}));

export default useCart;
