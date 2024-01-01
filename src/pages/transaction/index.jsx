import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import Voucher from "./components/voucher";
import Footer1 from "@/components/footer-1";
import Footer2 from "@/components/footer-2";
import useCart from "@/utils/store/cartStore";
import DetailTransaction from "./components/detail-transaction";
import { useEffect, useState } from "react";
import { getProductPriceById } from "@/utils/data/dataHandler";

const Transaction = () => {
  const { cart } = useCart();
  const [prices, setTotalPrices] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);

  useEffect(() => {
    const fetchProductPrices = async () => {
      const promises = cart.map(async (product) => {
        const { id, amount } = product;
        const price = await getProductPriceById(id, amount);
        return price;
      });
      const resolvedPrices = await Promise.all(promises);
      const totalPrice = resolvedPrices.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      setTotalPrices(totalPrice);
    };

    fetchProductPrices();
  }, [cart]);

  return (
    <div className="bg-[#FFFAF5]">
      <Banner />
      <Navbar />
      <div className="w-10/12 flex gap-3 mx-auto my-3">
        <DetailTransaction cart={cart} />
        <Voucher cart={cart} prices={prices} deliveryFee={deliveryFee} />
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Transaction;
