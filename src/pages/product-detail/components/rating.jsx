import RatingComponent from "@/components/rating";
import { Star } from "lucide-react";

const Rating = () => {
  return (
    <div className="p-3 rounded-md">
      <h4 className="border-b-2 border-gray-400 p-3 font-semibold">
        Rata-Rata penilaian dari Pro 6 TWS Bluetooth Earphone With Mic HiFi Stereo Touch Earbuds
        Bluetooth Headset Sport Waterproof
      </h4>
      <div className="p-3">
        <div className="flex gap-x-10">
          <div className="flex flex-col gap-y-5">
            <h5 className="text-4xl">
              4.8<span className="text-base">/5</span>
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
            <RatingComponent length={5} total={99} />
            <RatingComponent length={4} total={50} />
            <RatingComponent length={3} total={20} />
            <RatingComponent length={2} total={1} />
            <RatingComponent length={1} total={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
