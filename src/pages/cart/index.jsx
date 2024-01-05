import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import Summary from "./components/summary";
import Footer1 from "@/components/footer-1";
import Footer2 from "@/components/footer-2";
import Footer4 from "@/components/footer-4";
import { useEffect, useState } from "react";
import useCart from "@/utils/store/cartStore";
import CartList from "./components/cart-list";
import { ScrollRestoration } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const selectedCart = cart.filter((item) => item.checked);
    const getTotalAmount = selectedCart.reduce((acc, item) => acc + item.amount, 0);
    setTotalAmount(getTotalAmount);
  }, [cart]);

  return (
    <div className="bg-[#FFFAF5]">
      <Banner />
      <Navbar />
      <div className="w-10/12 flex flex-col sm:flex-row gap-3 mx-auto my-3">
        <CartList totalAmount={totalAmount} cart={cart} />
        <Summary totalAmount={totalAmount} cart={cart} />
      </div>
      <Footer1 />
      <Footer2 />
      <Footer4 />
      <ScrollRestoration />
    </div>
  );
};

export default Cart;
