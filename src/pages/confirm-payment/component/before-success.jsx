import { Copy } from "lucide-react";
import { useState, useEffect } from "react";
import useCart from "@/utils/store/cartStore";
import bcaLogo from "@/assets/payment-method/bca.png";
import bniLogo from "@/assets/payment-method/bni.png";
import briLogo from "@/assets/payment-method/bri.png";
import danaLogo from "@/assets/payment-method/dana.png";
import convertToRupiah from "@/utils/formatter/rupiahConverter";
import alfamartLogo from "@/assets/payment-method/alfamart.png";
import indomaretLogo from "@/assets/payment-method/indomaret.png";
import mastercardLogo from "@/assets/payment-method/mastercard.png";
import clipboardCopy from "clipboard-copy";

const BeforeSucces = () => {
  const { selectedPaymentMethod, totalPrice } = useCart();
  const [countdown, setCountdown] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });
  const [paymentMethod, setPaymentMethod] = useState({
    name: "",
    image: "",
    code: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountdown = { ...prevCountdown };

        if (
          newCountdown.hours === 0 &&
          newCountdown.minutes === 0 &&
          newCountdown.seconds === 0
        ) {
          clearInterval(interval);
        } else {
          if (newCountdown.seconds === 0) {
            if (newCountdown.minutes === 0) {
              newCountdown.hours -= 1;
              newCountdown.minutes = 59;
              newCountdown.seconds = 59;
            } else {
              newCountdown.minutes -= 1;
              newCountdown.seconds = 59;
            }
          } else {
            newCountdown.seconds -= 1;
          }
        }

        return newCountdown;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getPaymentMethod = (id) => {
    const timestamp = new Date().getTime();
    const paymentMethod = [
      {
        name: "Dana",
        image: danaLogo,
        code: `88810${timestamp}`,
      },
      {
        name: "Kartu Kredit/Debit",
        image: mastercardLogo,
      },
      {
        name: "BNI Virtual Account",
        image: bniLogo,
        code: `009${timestamp}`,
      },
      {
        name: "BCA Virtual Account",
        image: bcaLogo,
        code: `80777${timestamp}`,
      },
      {
        name: "BRI Virtual Account",
        image: briLogo,
        code: `002${timestamp}`,
      },
      {
        name: "Alfamart",
        image: alfamartLogo,
        code: `4774${timestamp}`,
      },
      {
        name: "Indomaret",
        image: indomaretLogo,
        code: `1260${timestamp}`,
      },
    ];

    setPaymentMethod(paymentMethod[id]);
  };

  const handleCopyClick = async (code) => {
    try {
      await clipboardCopy(code);
      console.log("Code copied:", code);
    } catch (err) {
      console.error("Unable to copy code to clipboard", err);
    }
  };

  useEffect(() => {
    getPaymentMethod(selectedPaymentMethod);
  }, [selectedPaymentMethod]);

  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center my-4">
        <p className="text-sm">Selesaikan Pembayaran Dalam</p>
      </div>
      <div className="text-center w-full">
        <span className="border border-solid border-black p-2 bg-[#FFFFFF]">
          {countdown.hours.toString().padStart(2, "0")}
        </span>
        <span className="mx-2">:</span>
        <span className="border border-solid border-black p-2 bg-[#FFFFFF]">
          {countdown.minutes.toString().padStart(2, "0")}
        </span>
        <span className="mx-2">:</span>
        <span className="border border-solid border-black p-2 bg-[#FFFFFF]">
          {countdown.seconds.toString().padStart(2, "0")}
        </span>
        <div className="text-center my-8">
          <p>Batas Akhir Pembayaran</p>
        </div>
      </div>
      <div>
        <div className="flex items-center my-6">
          <div>{paymentMethod.name}</div>
          <div className="ml-auto">
            <img src={paymentMethod.image} className="h-10" />
          </div>
        </div>
        <div className="flex items-center my-6">
          <div>{paymentMethod.code}</div>
          <div className="ml-auto">
            <Copy onClick={() => handleCopyClick(paymentMethod.code)} />
          </div>
        </div>
        <div className="my-4">
          <p className="mb-1 font-semibold">Total Pembayaran</p>
          <p className="font-semibold">{convertToRupiah(totalPrice)}</p>
        </div>
      </div>
    </div>
  );
};

export default BeforeSucces;
