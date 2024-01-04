import { Store } from "lucide-react";
import ProductCard from "./product-card";
import { useEffect, useState } from "react";
import useCart from "@/utils/store/cartStore";
import { Checkbox } from "@/components/ui/checkbox";
import { getStoreNameById } from "@/utils/data/dataHandler";

const ProductList = ({ store, cart }) => {
  const { setCart } = useCart();
  const [checked, setChecked] = useState();
  const [storeName, setStoreName] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsByStoreId = (cart, id) => {
      const result = cart.filter((item) => item.storeId == id);
      const status = result.every((item) => item.checked);
      setProducts(result);
      setChecked(status);
    };
    getProductsByStoreId(cart, store);
  }, [cart, store]);

  useEffect(() => {
    const getStoreName = async (id) => {
      const result = await getStoreNameById(id);
      setStoreName(result);
    };

    getStoreName(store);
  }, [store]);

  const checkedFromSameStore = (id, boolean) => {
    const cartData = cart.map((item) => {
      if (item.storeId == id) {
        return {
          ...item,
          checked: boolean,
        };
      }
      return item;
    });
    setCart(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  return (
    <div className="p-5 bg-white rounded-md flex flex-col gap-y-3 shadow-md">
      <div className="flex gap-2 items-center">
        <Checkbox
          value={store}
          checked={checked}
          onClick={() => {
            checkedFromSameStore(store, !checked);
            setChecked(!checked);
          }}
          className="w-6 h-6 border-2 data-[state=checked]:bg-white"
        />
        <Store className="w-6 h-6" />
        <p className="font-medium">{storeName}</p>
      </div>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          cart={cart}
          id={product.id}
          value={product.cartId}
          amount={product.amount}
          checked={product.checked}
          selectedOption={product.option}
        />
      ))}
    </div>
  );
};

export default ProductList;
