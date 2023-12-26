import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import BeforeSuccess from "@/pages/confirm-payment/component/before-success";
import AfterSuccess from "./component/after-success";

const ConfirmPayment = () => {
  const [showBeforeSuccess, setShowBeforeSuccess] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBeforeSuccess(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#FFFAF5] h-screen ">
      <Navbar />
      {showBeforeSuccess ? <BeforeSuccess /> : <AfterSuccess />}
    </div>
  );
};

export default ConfirmPayment;
