import useCart from "@/utils/store/cartStore";
import vouchers from "@/utils/data/voucher.json";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";

const Voucher = ({ totalPrice }) => {
  const { selectedVoucher, setSelectedVoucher } = useCart();

  const selectVoucherHandler = (title, voucher) => {
    if (totalPrice <= voucher.minimum_price) {
      alert("Minimum harga tidak terpenuhi");
    } else {
      setSelectedVoucher(voucher);
      localStorage.setItem("voucher", JSON.stringify(voucher));
    }
  };

  return (
    <Select>
      <SelectTrigger className="w-full h-7 focus-visible:ring-0 border-black focus-visible:ring-offset-0 focus:ring-0">
        <SelectValue
          placeholder={selectedVoucher.title ? selectedVoucher.title : "Pilih Voucher"}
        />
      </SelectTrigger>
      <SelectContent className="max-h-96">
        <div className="flex flex-col gap-y-2 p-2">
          {vouchers.map((voucher, index) => {
            if (!voucher.secret) {
              return (
                <VoucherCard
                  key={index}
                  title={voucher.title}
                  paragraph={voucher.paragraph}
                  onClick={() => selectVoucherHandler(voucher.title, voucher)}
                />
              );
            }
          })}
        </div>
      </SelectContent>
    </Select>
  );
};

export default Voucher;

const VoucherCard = ({ title, paragraph, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="p-2 h-[68px] w-full flex flex-col justify-between bg-[#FFCCEC] hover:bg-[#FFCCEC]/80 border-2 border-[#F8009C] rounded-md cursor-pointer"
    >
      <h4 className="font-semibold text-[#F8009C]">{title}</h4>
      <p className="font-normal text-[#F8009C]">{paragraph}</p>
    </div>
  );
};
