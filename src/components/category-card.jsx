import React from "react";
import Handuk from "@/assets/sicepat.png";

const CategoryCard = () => {
  return (
    <div className="w-48 h-56 bg-[#ffffff] shadow-md rounded-md hover:transform transition duration-100 hover:z-20 hover:scale-110">
      <img
        src={Handuk}
        alt=""
        className="w-full h-44 object-cover p-4"
      />
      <div className="card-body text-center">
        <p className="text-xs px-4">Keperluan Rumah dan Gaya Hidup </p>
      </div>
    </div>
  );
};

export default CategoryCard;
