import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import Summary from "./components/summary";
import Closing from "./components/closing";
import { useEffect, useState } from "react";
import Footer1 from "@/components/footer-1";
import Footer2 from "@/components/footer-2";
import useCart from "@/utils/store/cartStore";
import { getProductPriceById } from "@/utils/data/dataHandler";
import DetailTransaction from "./components/detail-transaction";

const Transaction = () => {
  const { cart } = useCart();
  const [prices, setTotalPrices] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState([]);
  const [selectedCart, setSelectedCart] = useState([]);
  const [sumDeliveryFee, setSumDeliveryFee] = useState(0);

  useEffect(() => {
    const selectedCart = cart.filter((item) => item.checked);
    const getTotalAmount = selectedCart.reduce((acc, item) => acc + item.amount, 0);
    setTotalAmount(getTotalAmount);
  }, [cart]);

  useEffect(() => {
    const result = cart.filter((item) => item.checked);
    setSelectedCart(result);
  }, [cart]);

  useEffect(() => {
    const getSumDeliveryFee = (deliveryFee) => {
      const result = deliveryFee.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      setSumDeliveryFee(result);
    };

    getSumDeliveryFee(deliveryFee);
  }, [deliveryFee]);

  useEffect(() => {
    const fetchProductPrices = async () => {
      const promises = selectedCart.map(async (product) => {
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
  }, [selectedCart]);

  return (
    <div className="bg-[#FFFAF5]">
      <Banner />
      <Navbar />
      <div className="flex flex-col md:flex-row w-10/12 mx-auto my-3 md:gap-3">
        <DetailTransaction
          cart={selectedCart}
          deliveryFee={deliveryFee}
          setDeliveryFee={setDeliveryFee}
        />
        <Summary
          prices={prices}
          cart={selectedCart}
          deliveryFee={deliveryFee}
          totalAmount={totalAmount}
          totalDeliveryFee={sumDeliveryFee}
        />
      </div>
      <Footer1 />
      <Footer2 />
      <Closing />
    </div>
  );
};

export default Transaction;
