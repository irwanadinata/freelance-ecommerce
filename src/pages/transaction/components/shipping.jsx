import ProductCard from "./product-card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import convertToRupiah from "@/utils/formatter/rupiahConverter";

const ShippingCard = () => {
  return (
    <div className="border-2 flex flex-col gap-y-1 py-2 px-6 border-black rounded-md">
      <p>{convertToRupiah(16000)}</p>
      <div className="flex justify-between">
        <p>Standar</p>
        <Checkbox className="w-6 h-6 border-2 data-[state=checked]:bg-white" />
      </div>
      21 - 25 Desember
    </div>
  );
};

const Shipping = () => {
  return (
    <>
      <div className="p-5 flex gap-y-5 flex-col shadow-md rounded-md bg-white">
        <div className="flex flex-col">
          <p className="font-medium">Dikirim Oleh: Narvik</p>
          <p className="font-medium">Pilihan Pengiriman</p>
          <div className="flex justify-between">
            <ShippingCard />
            <ShippingCard />
            <ShippingCard />
          </div>
        </div>

        {/* product */}
        <div className="flex flex-col gap-y-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className="p-5 bg-white rounded-md shadow-md gap-y-2 flex flex-col">
        <p>Catatan</p>
        <Input className="border-black focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>
    </>
  );
};

export default Shipping;
