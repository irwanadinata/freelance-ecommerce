import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import convertToRupiah from "@/utils/formatter/rupiahConverter";
import { Heart, Minus, Plus, Store, Trash } from "lucide-react";
import displayImage from "@/assets/dummy-products/tws/display.png";

const ProductCard = () => {
  const [quantity, setQuantity] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="p-5 bg-white rounded-md flex flex-col gap-y-3 shadow-md">
      {/* store name */}
      <div className="flex gap-2 items-center">
        <Checkbox className="w-6 h-6 border-2 data-[state=checked]:bg-white" />
        <Store className="w-6 h-6" />
        <p className="font-medium">Narvix</p>
      </div>

      {/* product detail */}
      <div className="flex items-center justify-between gap-3">
        {/* product name */}
        <div className="flex gap-3 w-96">
          <Checkbox className="self-center w-6 h-6 border-2 data-[state=checked]:bg-white" />
          <img src={displayImage} className="w-20 h-20 rounded-md" />
          <div className="flex flex-col justify-between">
            <p className="text-sm">Pro 6 TWS Bluetooth Earphone With Mic HiFi Stereo Waterproof</p>
            <p className="text-sm">pink</p>
          </div>
        </div>

        {/* product price */}
        <div className="flex flex-col items-center">
          <p className="text-[#FB8500] whitespace-nowrap">{convertToRupiah(57000)}</p>
          <div className="flex">
            <Button
              size="icon"
              variant="ghost"
              className="hover:bg-transparent"
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              {isBookmarked ? (
                <Heart fill="rgb(239, 68, 68)" className="text-red-500" />
              ) : (
                <Heart />
              )}
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-transparent">
              <Trash />
            </Button>
          </div>
        </div>

        {/* quantity */}
        <div className="flex gap-1 items-center">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setQuantity(quantity + 1)}
            className="border-[1px] border-black w-6 h-6 p-1"
          >
            <Plus />
          </Button>
          <Button
            disabled
            className="border-[1px] border-black w-6 h-6 p-1 disabled:opacity-100"
            size="icon"
            variant="ghost"
          >
            {quantity}
          </Button>
          <Button
            size="icon"
            disabled={quantity === 0}
            variant="ghost"
            onClick={() => setQuantity(quantity - 1)}
            className="border-[1px] border-black w-6 h-6 p-1"
          >
            <Minus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
