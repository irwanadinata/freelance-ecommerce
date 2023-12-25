import React from "react";
import Rating from "react-rating";
import { Star } from "lucide-react";
import Handuk from "@/assets/sicepat.png";

const ProductCard = () => {
  return (
    <div className="w-48 h-72 bg-[#FFFFFF] shadow-md rounded-md hover:transform transition duration-100 hover:z-20 hover:scale-110">
      <img
        src={Handuk}
        alt=""
        className="w-full h-44 object-cover"
      />
      <div className="card-body text-start p-2">
        <p className="text-sm  mb-1">Handuk Mandi Ukuran...</p>
        <p className="text-sm text-[#FB8500]">Rp 40.000</p>
        <div className="flex mb-2">
          <p className="text-xs line-through mr-2">Rp 100.000</p>
          <p className="text-xs text-[#CC0000]">13%</p>
        </div>
        <Rating
          initialRating={5}
          emptySymbol={<Star size={20} className="text-[#FFFFFF]"/>}
          fullSymbol={<Star size={20} fill="#FFC629" className="text-[#FFFFFF]"/>}
          readonly
        />
        
      </div>
    </div>
  );
};

export default ProductCard;
