import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PaymentMethodDialog from "./payment-method";
import convertToRupiah from "@/utils/formatter/rupiahConverter";

const Voucher = ({ cart, prices, deliveryFee, voucher = 10000, tax = 2000 }) => {
  return (
    <div className="w-4/12 flex flex-col gap-y-3">
      {/* voucher apply */}
      <div className="p-5 flex flex-col gap-y-2 rounded-md shadow-md bg-white">
        <p className="font-medium">Voucher</p>
        <div className="flex items-center justify-between">
          <Input
            className="h-7 w-56 focus-visible:ring-0 border-black focus-visible:ring-offset-0"
            placeholder="Masukkan Voucher"
          />
          <Button className="h-7 bg-[#0F146D] hover:bg-[#0F146D]/80">Gunakan</Button>
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
            <p>{convertToRupiah(deliveryFee)}</p>
          </div>
          <div className="flex justify-between">
            <p>Diskon Voucher</p>
            <p>{convertToRupiah(voucher)}</p>
          </div>
          <div className="flex justify-between">
            <p>Biaya Layanan</p>
            <p>{convertToRupiah(tax)}</p>
          </div>
          <div className="flex justify-between mt-2">
            <p>Total</p>
            <p>{convertToRupiah(prices + deliveryFee - voucher + tax)}</p>
          </div>
        </div>
        <PaymentMethodDialog />
      </div>
    </div>
  );
};

export default Voucher;
