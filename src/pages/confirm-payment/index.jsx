import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import { useState, useEffect } from "react";
import useCart from "@/utils/store/cartStore";
import AfterSuccess from "./component/after-success";
import BeforeSuccess from "@/pages/confirm-payment/component/before-success";

const ConfirmPayment = () => {
  const { cart, setCart, notification, setNotification } = useCart();
  const [showBeforeSuccess, setShowBeforeSuccess] = useState(true);

  useEffect(() => {
    const removeProductFromCart = () => {
      const result = cart.filter((item) => !item.checked);

      setCart(result);
      localStorage.setItem("cart", JSON.stringify(result));
    };

    const addNotification = () => {
      const timestamp = new Date().getTime();
      const orderId = `LZX-${timestamp}`;
      const newNotification = {
        id: orderId,
        title: "Pembayaran Sukses",
        paragraph: `Pembayaran kamu dengan no. pesanan ${orderId} sukses. Pesanan kamu kini sedang diproses oleh toko`,
        isRead: false,
      };

      const currentNotification = [...notification, newNotification];
      setNotification(currentNotification);
      localStorage.setItem("notification", JSON.stringify(currentNotification));
    };

    setTimeout(() => {
      setShowBeforeSuccess(false);
      removeProductFromCart();
      addNotification();
    }, 10000);
  }, []);

  return (
    <div className="bg-[#FFFAF5] h-screen ">
      <Banner />
      <Navbar />
      {showBeforeSuccess ? <BeforeSuccess /> : <AfterSuccess />}
    </div>
  );
};

export default ConfirmPayment;
