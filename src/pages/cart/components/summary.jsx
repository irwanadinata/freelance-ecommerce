import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import convertToRupiah from "@/utils/formatter/rupiahConverter";

const Summary = ({ amount, totalPrice }) => {
  return (
    <div className="w-4/12 flex flex-col gap-y-3">
      {/* user address */}
      <div className="p-3 flex gap-3 rounded-md bg-white">
        <MapPin />
        <p>Jl. Raden Patah No. 101, Purwokerto, Banyumas, Jawa Tengah</p>
      </div>

      {/* summary */}
      <div className="p-3 flex flex-col gap-y-5 rounded-md bg-white">
        <div className="flex flex-col">
          <p className="font-medium">Ringkasan Pesanan</p>
          <div className="flex justify-between">
            <p>subtotal ({amount} barang)</p>
            <p>{convertToRupiah(totalPrice)}</p>
          </div>
        </div>

        {/* voucher apply */}
        <div className="flex items-center justify-between">
          <Input
            className="h-7 w-56 focus-visible:ring-0 border-black focus-visible:ring-offset-0"
            placeholder="Masukkan Voucher"
          />
          <Button className="h-7 bg-[#0F146D] hover:bg-[#0F146D]/80">Gunakan</Button>
        </div>

        {/* total */}
        <div className="flex justify-between">
          <p>Total</p>
          <p>{convertToRupiah(totalPrice)}</p>
        </div>

        <Button className="bg-[#F8009C] hover:bg-[#F8009C]/80">Buat Pesanan</Button>
      </div>
    </div>
  );
};

export default Summary;
