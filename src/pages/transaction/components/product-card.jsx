import convertToRupiah from "@/utils/formatter/rupiahConverter";
import displayedImage from "@/assets/dummy-products/tws/display.png";

const ProductCard = () => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <img src={displayedImage} className="w-20 h-20 rounded-md" />
        <div className="flex flex-col justify-between ms-2 w-80">
          <p>Pro 6 TWS Bluetooth Earphone With Mic HiFi Stereo Waterproof</p>
          <p>pink</p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[#FB8500] font-medium pb-0">{convertToRupiah(500000)}</p>
        <div className="flex gap-2 items-center">
          <p className="line-through">{convertToRupiah(600000)}</p>
          <p className="text-red-500">-40%</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p>Kuantitas: 1</p>
      </div>
    </div>
  );
};

export default ProductCard;
