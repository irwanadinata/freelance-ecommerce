import { Store } from "lucide-react";
import ProductCard from "./product-card";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { getStoreNameById } from "@/utils/data/dataHandler";

const ProductList = ({ store, products }) => {
  const [storeName, setStoreName] = useState();

  useEffect(() => {
    const getStoreName = async (id) => {
      const result = await getStoreNameById(id);
      setStoreName(result);
    };

    getStoreName(store);
  }, [store]);

  return (
    <div className="p-5 bg-white rounded-md flex flex-col gap-y-3 shadow-md">
      <div className="flex gap-2 items-center">
        <Checkbox className="w-6 h-6 border-2 data-[state=checked]:bg-white" />
        <Store className="w-6 h-6" />
        <p className="font-medium">{storeName}</p>
      </div>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id}
          amount={product.amount}
          selectedOption={product.option}
        />
      ))}
    </div>
  );
};

export default ProductList;
