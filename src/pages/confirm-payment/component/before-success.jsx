import React, { useState, useEffect } from "react";
import { Copy } from "lucide-react";
import BNI from "@/assets/payment/bni.png";

const BeforeSucces = () => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getTimeRemaining() {
    const now = new Date();
    const deadline = new Date(now);
    deadline.setHours(24, 0, 0, 0);

    const timeDiff = deadline - now;
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  }

  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center my-4">
        <p className="text-sm">Selesaikan Pembayaran Dalam</p>
      </div>
      <div className="text-center w-full">
        <span className="border border-solid border-black p-2 bg-[#FFFFFF]">
          {timeRemaining.hours}
        </span>
        <span className="mx-2">:</span>
        <span className="border border-solid border-black p-2 bg-[#FFFFFF]">
          {timeRemaining.minutes}
        </span>
        <span className="mx-2">:</span>
        <span className="border border-solid border-black p-2 bg-[#FFFFFF]">
          {timeRemaining.seconds}
        </span>
        <div className="text-center my-8">
          <p>Batas Akhir Pembayaran</p>
        </div>
      </div>
      <div>
        <div className="flex my-6">
          <div>BNI Virtual Account</div>
          <div className="ml-auto">
            <img src={BNI} alt="" className="w-8 h-8" />
          </div>
        </div>
        <div className="flex my-6">
          <div>6834289746653728</div>
          <div className="ml-auto">
            <Copy />
          </div>
        </div>
        <div className="my-4">
          <p className="mb-1 font-semibold">Total Pembayaran</p>
          <p className="font-semibold">Rp. 64.000</p>
        </div>
      </div>
    </div>
  );
};

export default BeforeSucces;
