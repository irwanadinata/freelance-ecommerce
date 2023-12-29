import RatingComponent from "@/components/rating";
import { Star } from "lucide-react";

const Rating = ({ product, rating, ratings }) => {
  return (
    <div className="p-3 rounded-md bg-white">
      <h4 className="border-b-2 border-gray-400 p-3 font-semibold">
        Rata-Rata penilaian dari {product.name}
      </h4>
      <div className="p-3">
        <div className="flex gap-x-10">
          <div className="flex flex-col gap-y-5">
            <h5 className="text-4xl">
              {rating}
              <span className="text-base">/5</span>
            </h5>
            <div className="flex gap-2">
              <Star fill="#FFD233" className="text-[#FFD233] w-6 h-6" />
              <Star fill="#FFD233" className="text-[#FFD233] w-6 h-6" />
              <Star fill="#FFD233" className="text-[#FFD233] w-6 h-6" />
              <Star fill="#FFD233" className="text-[#FFD233] w-6 h-6" />
              <Star className="text-gray-500 w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            {ratings.map((rating, index) => (
              <RatingComponent key={index} length={rating.rating} total={rating.amount} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
