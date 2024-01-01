import {Trash2 } from "lucide-react";
import ProductCard from "./product-card";
import { Checkbox } from "@/components/ui/checkbox";

const ProductList = ({ cart, setLoading }) => {
  return (
    <div className="w-8/12 flex flex-col gap-y-4 mb-10">
      <div className="flex justify-between p-5 bg-white shadow-md">
        <div className="flex rounded-md gap-3">
          <Checkbox className="w-6 h-6 border-2 data-[state=checked]:bg-white" />
          <p>Pilih semua (0 barang)</p>
        </div>
        <div className="flex rounded-md gap-3">
          <Trash2/>
          <p>Hapus</p>
        </div>
      </div>
      {cart.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id}
          setLoading={setLoading}
          amount={product.amount}
          selectedOption={product.option}
        />
      ))}
    </div>
  );
};

export default ProductList;
