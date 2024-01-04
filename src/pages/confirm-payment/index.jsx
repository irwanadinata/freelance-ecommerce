import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import { useState, useEffect } from "react";
import useCart from "@/utils/store/cartStore";
import { useNavigate } from "react-router-dom";
import AfterSuccess from "./component/after-success";
import BeforeSuccess from "@/pages/confirm-payment/component/before-success";

const ConfirmPayment = () => {
  const navigate = useNavigate();
  const [showBeforeSuccess, setShowBeforeSuccess] = useState(true);
  const { cart, setCart, notification, setNotification, selectedPaymentMethod } = useCart();

  useEffect(() => {
    if (selectedPaymentMethod === "") {
      navigate("/dashboard");
    }
  }, [selectedPaymentMethod]);

  useEffect(() => {
    const removeProductFromCart = () => {
      const result = cart.filter((item) => !item.checked);

      setCart(result);
      localStorage.setItem("cart", JSON.stringify(result));
      localStorage.removeItem("voucher");
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

    if (selectedPaymentMethod === 99) {
      setShowBeforeSuccess(false);
      removeProductFromCart();
      addNotification();
    } else {
      setTimeout(() => {
        setShowBeforeSuccess(false);
        removeProductFromCart();
        addNotification();
      }, 10000);
    }
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
