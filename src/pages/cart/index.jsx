import Navbar from "@/components/navbar";
import Summary from "./components/summary";
import Footer1 from "@/components/footer-1";
import Footer2 from "@/components/footer-2";
import ProductList from "./components/product-list";
import Footer4 from "@/components/footer-4";

const Cart = () => {
  return (
    <div className="bg-[#FFFAF5]">
      <Navbar />
      <div className="w-10/12 flex gap-3 mx-auto my-3">
        <ProductList />
        <Summary />
      </div>
      <Footer1 />
      <Footer2 />
      <Footer4/>
      
    </div>
  );
};

export default Cart;
