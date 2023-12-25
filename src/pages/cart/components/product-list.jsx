import ProductCard from "./product-card";
import { Checkbox } from "@/components/ui/checkbox";

const ProductList = () => {
  return (
    <div className="w-8/12 flex flex-col gap-y-4 mb-10">
      <div className="flex justify-between p-5 bg-white shadow-md">
        <div className="flex rounded-md gap-3">
          <Checkbox className="w-6 h-6 border-2 data-[state=checked]:bg-white" />
          <p>Pilih semua (0 barang)</p>
        </div>
        <div className="flex rounded-md gap-3">
          <Checkbox className="w-6 h-6 border-2 data-[state=checked]:bg-white" />
          <p>Hapus</p>
        </div>
      </div>
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
