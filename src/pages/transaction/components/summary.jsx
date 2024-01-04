import { Input } from "@/components/ui/input";
import useCart from "@/utils/store/cartStore";
import { Button } from "@/components/ui/button";
import PaymentMethodDialog from "./payment-method";
import convertToRupiah from "@/utils/formatter/rupiahConverter";
import { useEffect, useState } from "react";
import { getVoucherCoupon } from "@/utils/data/dataHandler";
import { Loader2 } from "lucide-react";
import Voucher from "@/components/voucher";

const Summary = ({ cart, prices, tax = 2000, totalDeliveryFee }) => {
  const [error, setError] = useState();
  const [voucher, setVoucher] = useState("");
  const [discount, setDiscount] = useState(0);
  const [processing, setProcessing] = useState(false);
  const { selectedVoucher, setSelectedVoucher } = useCart();

  useEffect(() => {
    if (!selectedVoucher.discount) {
      setDiscount(0);
    } else {
      const { discount } = selectedVoucher;
      setDiscount(discount);
    }
  }, [selectedVoucher]);

  const applyVoucher = async (voucher) => {
    const toUppercase = voucher.toUpperCase();
    setProcessing(true);
    try {
      const result = await getVoucherCoupon(toUppercase);
      setSelectedVoucher(result);
      localStorage.setItem("voucher", JSON.stringify(result));
      setError();
    } catch (error) {
      setError(error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="lg:w-4/12 flex flex-col gap-y-3">
      {/* voucher apply */}

      <div className="p-5 flex flex-col gap-y-4 rounded-md shadow-md bg-white">
        <p className="font-medium">Voucher</p>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <Input
              value={selectedVoucher.code ? selectedVoucher.code : voucher}
              onChange={(e) => setVoucher(e.target.value)}
              placeholder="Masukkan Voucher"
              className="h-7 w-56 focus-visible:ring-0 border-black focus-visible:ring-offset-0 uppercase placeholder:normal-case"
            />
            <Button
              disabled={processing}
              onClick={() => applyVoucher(voucher)}
              className="h-7 w-20 bg-[#0F146D] hover:bg-[#0F146D]/80"
            >
              {processing ? <Loader2 className="animate-spin" /> : "Gunakan"}
            </Button>
          </div>
          <span className="text-sm text-red-500">{error && error}</span>
        </div>
        <div>
          <Voucher totalPrice={prices} />
        </div>
      </div>
      {/* invoice and total */}
      <div className="p-5 shadow-md flex flex-col rounded-md gap-y-2 bg-white">
        <p className="font-medium">Faktur dan Informasi Kontak </p>
        <div>
          <p className="font-medium">Ringkasan Pesanan</p>
          <div className="flex justify-between">
            <p>Subtotal ({cart.length} barang)</p>
            <p>{convertToRupiah(prices)}</p>
          </div>
          <div className="flex justify-between">
            <p>Biaya Pengiriman</p>
            <p>{convertToRupiah(totalDeliveryFee)}</p>
          </div>
          <div className="flex justify-between">
            <p>Diskon Voucher</p>
            <p>{convertToRupiah(discount)}</p>
          </div>
          <div className="flex justify-between">
            <p>Biaya Layanan</p>
            <p>{convertToRupiah(tax)}</p>
          </div>
          <div className="flex justify-between mt-2">
            <p>Total</p>
            <p>{convertToRupiah(prices + totalDeliveryFee - discount + tax)}</p>
          </div>
        </div>
        <PaymentMethodDialog totalPrice={prices + totalDeliveryFee - discount + tax} />
      </div>
    </div>
  );
};

export default Summary;
