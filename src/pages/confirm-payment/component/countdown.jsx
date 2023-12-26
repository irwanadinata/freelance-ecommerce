import React, { useState, useEffect } from "react";

const Countdown = () => {
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
    <>
      <div className="text-center my-4">
        <p>Selesaikan Pembayaran Dalam</p>
      </div>
      <div className="text-center w-full">
        <span className="border border-solid border-black p-2 bg-[#FFFFFF]">
          {timeRemaining.hours}
        </span>
        <span className="mx-2">
          :
        </span>
        <span className="border border-solid border-black p-2 bg-[#FFFFFF]">
          {timeRemaining.minutes}
        </span>
        <span className="mx-2">
          :
        </span>
        <span className="border border-solid border-black p-2 bg-[#FFFFFF]">
          {timeRemaining.seconds}
        </span>
      </div>
    </>
  );
};

export default Countdown;
