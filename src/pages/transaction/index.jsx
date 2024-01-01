import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import Voucher from "./components/voucher";
import Footer1 from "@/components/footer-1";
import Footer2 from "@/components/footer-2";
import useCart from "@/utils/store/cartStore";
import DetailTransaction from "./components/detail-transaction";

const Transaction = () => {
  const { cart } = useCart();

  return (
    <div className="bg-[#FFFAF5]">
      <Banner />
      <Navbar />
      <div className="w-10/12 flex gap-3 mx-auto my-3">
        <DetailTransaction cart={cart} />
        <Voucher />
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Transaction;
