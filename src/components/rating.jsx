import { Star } from "lucide-react";

const RatingComponent = ({ length, total }) => {
  const filledStars = Array.from({ length: Math.min(length, 5) }, (_, index) => (
    <Star key={index} fill="#FFD233" className={`text-[#FFD233] w-4 h-4`} />
  ));

  const emptyStars = Array.from({ length: Math.max(5 - length, 0) }, (_, index) => (
    <Star key={length + index} className="text-gray-500 w-4 h-4" />
  ));

  return (
    <div className="flex gap-2 items-center">
      {filledStars}
      {emptyStars}
      <p className="text-sm ms-2">{total}</p>
    </div>
  );
};

export default RatingComponent;
