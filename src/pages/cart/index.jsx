import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import Summary from "./components/summary";
import Footer1 from "@/components/footer-1";
import Footer2 from "@/components/footer-2";
import { useEffect, useState } from "react";
import Footer4 from "@/components/footer-4";
import ProductList from "./components/product-list";
import { ScrollRestoration } from "react-router-dom";
import { getProductPriceById } from "@/utils/data/dataHandler";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

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
      setTotalPrice(totalPrice);
    };

    fetchProductPrices();
  }, [cart]);

  return (
    <div className="bg-[#FFFAF5]">
      <Banner />
      <Navbar />
      <div className="w-10/12 flex gap-3 mx-auto my-3">
        <ProductList cart={cart} setCart={setCart} />
        <Summary amount={cart.length} totalPrice={totalPrice ? totalPrice : 0} />
      </div>
      <Footer1 />
      <Footer2 />
      <Footer4 />
      <ScrollRestoration />
    </div>
  );
};

export default Cart;
