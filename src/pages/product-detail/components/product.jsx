import { useState } from "react";
import useCart from "@/utils/store/cartStore";
import { Button } from "@/components/ui/button";
import { Heart, Minus, Plus, Share2, Star } from "lucide-react";
import convertToRupiah from "@/utils/formatter/rupiahConverter";

const Product = ({ product }) => {
  const { images, name, sold, overall_rating, review, price, discount, option, stock, id, store } =
    product;
  const { cart, increaseCart } = useCart();
  const [stocks, setStocks] = useState(stock);
  const [quantity, setQuantity] = useState(1);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(option[0]);
  const [displayedProduct, setDisplayedProduct] = useState(images.display);

  const addToCart = (id, option, amount, store) => {
    const { id: storeId } = store;
    const product = { id, option, amount, storeId };
    const isProductExist = cart.find((item) => item.id === id && item.option === option);

    if (isProductExist) {
      alert("Produk sudah ada di keranjang");
    } else {
      alert("Berhasil memasukkan produk ke keranjang");
      increaseCart(product);
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <div className="w-8/12">
      <div className="p-3 flex flex-col border-e-2 border-black">
        <div className="flex">
          {/* product img */}
          <img className="w-64 h-64 object-cover" src={displayedProduct} alt={name} />
          {/* product description */}
          <div className="px-3 gap-y-3 flex flex-col">
            {/* product name */}
            <h3 className="text-lg font-semibold">{name}</h3>

            {/* product rating */}
            <div className="flex justify-between items-center ">
              <div className="flex items-center">
                <p className="p-2 text-sm">Terjual {sold >= 100 ? "100++" : sold}</p>
                <div className="flex border-x-[1px] border-black p-2 text-sm gap-1 items-center">
                  <Star fill="#FFD233" className="text-[#FFD233]" />
                  {overall_rating}
                </div>
                <p className="p-2 text-sm">{review} Penilaian</p>
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
              <p className="text-[#FB8500] text-xl font-medium pb-0">
                {convertToRupiah(price - (discount / 100) * price)}
              </p>
              <div className="flex gap-2 items-center">
                <p className="line-through text-sm">{convertToRupiah(price)}</p>
                <p className="text-red-500">-{discount}%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-1 m-1">
            <img
              src={images.additional1}
              className="w-14 h-14 cursor-pointer"
              onClick={() => setDisplayedProduct(images.additional1)}
            />
            <img
              src={images.additional2}
              className="w-14 h-14 cursor-pointer"
              onClick={() => setDisplayedProduct(images.additional2)}
            />
            <img
              src={images.additional3}
              className="w-14 h-14 cursor-pointer"
              onClick={() => setDisplayedProduct(images.additional3)}
            />
          </div>

          <div className="ms-10">
            <p className="text-sm mb-2">Warna: {selectedOption.title}</p>
            <div className="flex gap-1">
              <img
                className={`w-9 h-9 cursor-pointer rounded-md ${
                  selectedOption === option[0] && "border-[#FB8500] border-[1px]"
                }`}
                onClick={() => {
                  setQuantity(1);
                  setStocks(option[0].stock);
                  setSelectedOption(option[0]);
                }}
                src={option[0].image}
              />
              <img
                className={`w-9 h-9 cursor-pointer rounded-md ${
                  selectedOption === option[1] && "border-[#FB8500] border-[1px]"
                }`}
                onClick={() => {
                  setQuantity(1);
                  setStocks(option[1].stock);
                  setSelectedOption(option[1]);
                }}
                src={option[1].image}
              />
            </div>

            <p className="text-sm mb-2">Kuantitas: </p>
            <div className="flex gap-1 items-center">
              <Button
                size="icon"
                disabled={quantity >= stocks}
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
              <p className="text-sm ms-2">Tersisa {stocks - quantity} buah</p>
            </div>
          </div>
        </div>

        <div className="flex gap-10 mx-auto mt-10">
          <Button
            onClick={() => addToCart(id, selectedOption.title, quantity, store)}
            className="w-56 bg-[#F8009C] hover:bg-[#F8009C]/80"
          >
            Masukkan Keranjang
          </Button>
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
