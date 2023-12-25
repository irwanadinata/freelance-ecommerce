import React, { useState, useEffect } from "react";
import Image1 from "@/assets/main-image/image-1.png";
import Image2 from "@/assets/main-image/image-2.png";
import Image3 from "@/assets/main-image/image-3.png";

const MainImage = () => {
  const images = [Image1, Image2, Image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="mx-auto lg:w-10/12 md:w-full mt-4">
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  );
};

export default MainImage;
