import { Trash2 } from "lucide-react";
import ProductList from "./product-list";
import { useEffect, useState } from "react";
import useCart from "@/utils/store/cartStore";
import { Checkbox } from "@/components/ui/checkbox";

const CartList = ({ cart }) => {
  const { setCart } = useCart();
  const [checked, setChecked] = useState(false);
  const [groupedCart, setGroupedCart] = useState();

  useEffect(() => {
    const getGroupedCart = (cart) => {
      const groupedCart = cart.reduce((acc, item) => {
        const { storeId, ...rest } = item;

        if (acc[storeId]) {
          acc[storeId].push(rest);
        } else {
          acc[storeId] = [rest];
        }

        return acc;
      }, {});

      return groupedCart;
    };

    const data = getGroupedCart(cart);
    setGroupedCart(data);
  }, [cart]);

  useEffect(() => {
    const status = cart.every((item) => item.checked);
    setChecked(status);
  }, [cart]);

  const checkedAllCart = (boolean) => {
    const data = cart.map((item) => {
      return { ...item, checked: boolean };
    });

    setCart(data);
    localStorage.setItem("cart", JSON.stringify(data));
  };

  return (
    <div className="lg:w-8/12 md:w-full flex flex-col gap-y-4 mb-10">
      <div className="flex justify-between p-5 bg-white shadow-md">
        <div className="flex rounded-md gap-3">
          <Checkbox
            checked={checked}
            onClick={() => {
              setChecked(!checked);
              checkedAllCart(!checked);
            }}
            className="w-6 h-6 border-2 data-[state=checked]:bg-white"
          />
          <p>Pilih semua ({cart.length} barang)</p>
        </div>
        <div className="flex rounded-md gap-3">
          <Trash2 />
          <p>Hapus</p>
        </div>
      </div>
      {groupedCart &&
        Object.keys(groupedCart).map((storeId, index) => (
          <ProductList key={index} store={storeId} cart={cart} />
        ))}
    </div>
  );
};

export default CartList;
