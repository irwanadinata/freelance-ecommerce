import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { Star } from "lucide-react";
import convertToRupiah from "@/utils/formatter/rupiahConverter";

const ProductCard = ({ product }) => {
  const maxLength = 20;
  const truncatedName = product.name.length > maxLength ? product.name.slice(0, maxLength) + " ..." : product.name;

  return (
    <Link to={`/product/${product.id}`} className="w-48 h-72 bg-[#FFFFFF] shadow-md rounded-md hover:transform transition duration-500 hover:z-20 hover:scale-110 m-1">
      <div>
        <img
          src={product.images.display}
          alt={product.name}
          className="w-full h-44 object-cover rounded-md"
        />
        <div className="card-body text-start p-2">
          <p className="text-sm  mb-1">{truncatedName}</p>
          <p className="text-sm text-[#FB8500]">{convertToRupiah(product.price)}</p>
          <div className="flex mb-2">
            <p className="text-xs line-through mr-2">{convertToRupiah(product.price - (product.discount / 100 * product.price))}</p>
            <p className="text-xs text-[#CC0000]">{product.discount}%</p>
          </div>
          <Rating
            initialRating={product.overall_rating}
            emptySymbol={<Star size={20} className="text-[#FFFFFF]" />}
            fullSymbol={<Star size={20} fill="#FFC629" className="text-[#FFFFFF]" />}
            readonly
          />  
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
