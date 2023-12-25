import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Minus, Plus, Share2, Star } from "lucide-react";
import convertToRupiah from "@/utils/formatter/rupiahConverter";
import displayProduct from "@/assets/dummy-products/tws/display.png";
import moreImage2 from "@/assets/dummy-products/tws/2.png";
import moreImage3 from "@/assets/dummy-products/tws/3.png";
import moreImage4 from "@/assets/dummy-products/tws/4.png";
import black from "@/assets/dummy-products/tws/black.png";
import pink from "@/assets/dummy-products/tws/pink.png";
import purple from "@/assets/dummy-products/tws/purple.png";
import white from "@/assets/dummy-products/tws/white.png";

const Product = () => {
  const [stock, setStock] = useState(49);
  const [quantity, setQuantity] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [displayedProduct, setDisplayedProduct] = useState(displayProduct);

  return (
    <div className="w-8/12">
      <div className="p-3 flex flex-col border-e-2 border-black">
        <div className="flex">
          {/* product img */}
          <img className="w-64 h-64" src={displayedProduct} alt="tws" />
          {/* product description */}
          <div className="px-3 gap-y-3 flex flex-col">
            {/* product name */}
            <h3 className="text-lg font-semibold">
              Pro 6 TWS Bluetooth Earphone With Mic HiFi Stereo Touch Earbuds Bluetooth Headset
              Sport Waterproof
            </h3>

            {/* product rating */}
            <div className="flex justify-between items-center ">
              <div className="flex items-center">
                <p className="p-2 text-sm">Terjual 100++</p>
                <div className="flex border-x-[1px] border-black p-2 text-sm gap-1 items-center">
                  <Star fill="#FFD233" className="text-[#FFD233]" />
                  4.8
                </div>
                <p className="p-2 text-sm">993 Penilaian</p>
              </div>

              <div className="flex gap-0">
                <Button className="hover:bg-transparent" size="icon" variant="ghost">
                  <Share2 />
                </Button>
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
              </div>
            </div>

            {/* product price */}
            <div>
              <p className="text-[#FB8500] text-xl font-medium pb-0">{convertToRupiah(500000)}</p>
              <div className="flex gap-2 items-center">
                <p className="line-through text-sm">{convertToRupiah(600000)}</p>
                <p className="text-red-500">-40%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-1 m-1">
            <img
              src={displayProduct}
              className="w-14 h-14 cursor-pointer"
              onClick={() => setDisplayedProduct(displayProduct)}
            />
            <img
              src={moreImage2}
              className="w-14 h-14 cursor-pointer"
              onClick={() => setDisplayedProduct(moreImage2)}
            />
            <img
              src={moreImage3}
              className="w-14 h-14 cursor-pointer"
              onClick={() => setDisplayedProduct(moreImage3)}
            />
            <img
              src={moreImage4}
              className="w-14 h-14 cursor-pointer"
              onClick={() => setDisplayedProduct(moreImage4)}
            />
          </div>

          <div className="ms-10">
            <p className="text-sm mb-2">Warna: </p>
            <div className="flex gap-1">
              <img className="w-9 h-9" src={black} />
              <img className="w-9 h-9" src={pink} />
              <img className="w-9 h-9" src={white} />
              <img className="w-9 h-9" src={purple} />
            </div>

            <p className="text-sm mb-2">Kuantitas: </p>
            <div className="flex gap-1 items-center">
              <Button
                size="icon"
                disabled={quantity >= stock}
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
              <p className="text-sm ms-2">Tersisa {stock - quantity} buah</p>
            </div>
          </div>
        </div>

        <div className="flex gap-10 mx-auto mt-10">
          <Button className="w-56 bg-[#F8009C] hover:bg-[#F8009C]/80">Masukkan Keranjang</Button>
          <Button
            variant="outline"
            className="w-56 border-[#F8009C] border-2 text-[#F8009C] hover:bg-[#F8009C] hover:text-white"
          >
            Beli Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
