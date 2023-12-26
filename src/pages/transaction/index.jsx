import Footer1 from "@/components/footer-1";
import Footer2 from "@/components/footer-2";
import Navbar from "@/components/navbar";
import DetailTransaction from "./components/detail-transaction";
import Voucher from "./components/voucher";

const Transaction = () => {
  return (
    <div className="bg-[#FFFAF5]">
      <Navbar />
      <div className="w-10/12 flex gap-3 mx-auto my-3">
        <DetailTransaction />
        <Voucher />
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Transaction;
