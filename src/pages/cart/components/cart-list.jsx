import { Trash2 } from "lucide-react";
import ProductList from "./product-list";
import { Checkbox } from "@/components/ui/checkbox";

const CartList = ({ cart }) => {
  const groupedCart = cart.reduce((acc, item) => {
    const { storeId, ...rest } = item;

    if (acc[storeId]) {
      acc[storeId].push(rest);
    } else {
      acc[storeId] = [rest];
    }

    return acc;
  }, {});

  return (
    <div className="w-8/12 flex flex-col gap-y-4 mb-10">
      <div className="flex justify-between p-5 bg-white shadow-md">
        <div className="flex rounded-md gap-3">
          <Checkbox className="w-6 h-6 border-2 data-[state=checked]:bg-white" />
          <p>Pilih semua ({cart.length} barang)</p>
        </div>
        <div className="flex rounded-md gap-3">
          <Trash2 />
          <p>Hapus</p>
        </div>
      </div>
      {Object.keys(groupedCart).map((storeId, index) => (
        <ProductList key={index} products={groupedCart[storeId]} store={storeId} />
      ))}
    </div>
  );
};

export default CartList;
