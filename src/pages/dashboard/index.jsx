import Category from "@/components/category";
import Footer1 from "@/components/footer-1";
import Footer2 from "@/components/footer-2";
import Footer3 from "@/components/footer-3";
import Footer4 from "@/components/footer-4";
import MainImage from "@/components/main-image";
import Menu from "@/components/menu";
import Navbar from "@/components/navbar";
import Closing from "./components/closing";
import ProductList from "./components/product";
import Data from "@/utils/data/product.json";
import Banner from "@/components/banner";
import DataProducts from "@/utils/data/product.json";
import FlashSale from "./components/flashsale";
import DataFlashSale from "@/utils/data/flash-sale.json";

const Dashboard = () => {
  return (
    <div className="bg-[#FFFAF5]">
      <Banner />
      <Navbar />
      <MainImage />
      <Menu />
      <Category />
      <ProductList products={Data} />
      <FlashSale products={DataFlashSale} />
      <ProductList products={DataProducts} />
      <Footer1 />
      <Footer2 />
      <Footer3 />
      <Footer4 />
      <Closing />
    </div>
  );
};
export default Dashboard;
