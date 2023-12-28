import { useState, useEffect } from "react";
import ProductCard from "@/components/product-card";

const FlashSale = ({ products }) => {
  const [showBeforeSuccess, setShowBeforeSuccess] = useState(true);

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
    <div className="bg-[#ffffff] lg:w-10/12 mx-auto md:w-full my-6 pb-4">
      <div className="flex items-center">
        <p className="font-semibold p-3">Flash Sale</p>
        <div className="my-auto ">
          <span className="text-[#FFFFFF] border p-1 border-solid bg-[#CC0000]">
            {timeRemaining.hours}
          </span>
          <span className="mx-2 text-[#CC0000]">:</span>
          <span className="text-[#FFFFFF] border border-solid p-1 bg-[#CC0000]">
            {timeRemaining.minutes}
          </span>
          <span className="mx-2 text-[#CC0000]">:</span>
          <span className="text-[#FFFFFF] border border-solid p-1 bg-[#CC0000]">
            {timeRemaining.seconds}
          </span>
        </div>
        <p className="p-3 ml-auto underline text-[#0F146D]">Lihat Semua</p>
      </div>
      <div className="flex flex-wrap justify-center mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
