import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useCart from "@/utils/store/cartStore";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { getProductById } from "@/utils/data/dataHandler";
import convertToRupiah from "@/utils/formatter/rupiahConverter";
import { Heart, Loader2, Minus, Plus, Trash2 } from "lucide-react";

const ProductCard = ({ id, amount, selectedOption, value, checked, cart }) => {
  const { setCart } = useCart();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(amount);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  const addQuantity = (id, selectedOption) => {
    const currentCart = JSON.parse(localStorage.getItem("cart"));
    const updatedCart = currentCart.map((cart) => {
      if (cart.id === id && cart.option === selectedOption) {
        return {
          ...cart,
          amount: cart.amount + 1,
        };
      }
      return cart;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id, selectedOption) => {
    const currentCart = JSON.parse(localStorage.getItem("cart"));
    const updatedCart = currentCart.map((cart) => {
      if (cart.id === id && cart.option === selectedOption) {
        return {
          ...cart,
          amount: cart.amount - 1,
        };
      }
      return cart;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const deleteProduct = (id, option) => {
    const confirmDelete = confirm("Apakah anda yakin ingin menghapus produk");

    if (!confirmDelete) {
      alert("Batal menghapus produk");
    } else {
      const product = cart.filter((product) => product.option !== option || product.id !== id);
      setCart(product);
      localStorage.setItem("cart", JSON.stringify(product));
      alert("Berhasil menghapus produk");
    }
  };

  const checkedProduct = (id, boolean) => {
    const cartData = cart.map((item) => {
      if (item.cartId == id) {
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

  const increaseQuantity = () => {
    if (quantity === 20) {
      Swal.fire({
        showConfirmButton: false,
        showCloseButton: true,
        html: `
          <div class="flex items-center h-20 justify-center text-[#CC0000]">
            <img src="/warning.svg" class='w-6 h-6 mr-2' alt='Warning Icon'/>
            Jumlah Barang Yang Ditambahkan Telah Mencapai Batas Maksimal!
          </div>
        `,
      });
    } else {
      setQuantity(quantity + 1);
      addQuantity(id, selectedOption);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-3">
      {!product ? (
        <Loader2 className="animate-spin mx-auto w-7 h-7" />
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-96">
            <Checkbox
              value={value}
              checked={checked}
              onClick={() => {
                checkedProduct(value, !checked);
              }}
              className="lg:self-center w-6 h-6 border-2 data-[state=checked]:bg-white"
            />
            <img src={product.images.display} className="w-20 h-20 rounded-md" />
            <div className="flex flex-col justify-between">
              <p className="text-sm">{product.name}</p>
              <p className="text-sm">{selectedOption}</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[#FB8500] whitespace-nowrap">
              {convertToRupiah(product.price - (product.discount / 100) * product.price)}
            </p>
            <div className="flex mt-2">
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
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-transparent md:ml-2"
                onClick={() => deleteProduct(product.id, selectedOption)}
              >
                <Trash2 />
              </Button>
            </div>
          </div>

          <div className="flex gap-1 lg:items-center mt-2 md:mt-0">
            <Button
              size="icon"
              variant="ghost"
              // onClick={() => {
              //   setQuantity(quantity + 1);
              //   addQuantity(id, selectedOption);
              // }}
              onClick={increaseQuantity}
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
              disabled={quantity === 1}
              variant="ghost"
              onClick={() => {
                setQuantity(quantity - 1);
                decreaseQuantity(id, selectedOption);
              }}
              className="border-[1px] border-black w-6 h-6 p-1"
            >
              <Minus />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
