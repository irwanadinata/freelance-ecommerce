import { Button } from "@/components/ui/button";
import { MapPin, MessageSquare, QrCode, Speech, StoreIcon, Undo2 } from "lucide-react";
import QR from "@/assets/QR.png"

const Store = ({ product }) => {
  const { store } = product;

  return (
    <div className="w-4/12 p-3 flex flex-col gap-y-7">
      {/* Store location */}
      <div className="flex gap-2">
        <MapPin />
        <p className="text-base">{store.location}</p>
      </div>

      {/* Store reputation */}
      <div className="flex flex-col gap-y-3">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <StoreIcon />
            <p className="text-base">{store.id}</p>
          </div>
          <MessageSquare />
        </div>

        <div className="flex flex-auto">
          <div className="flex flex-col items-center p-1">
            <p className="text-sm whitespace-nowrap">Rating Toko</p>
            <p className="text-sm font-semibold">{store.rating}%</p>
          </div>
          <div className="flex flex-col items-center border-x-[1px] border-black p-1">
            <p className="text-sm whitespace-nowrap">Pengiriman Tepat Waktu</p>
            <p className="text-sm font-semibold">{store.on_time}%</p>
          </div>
          <div className="flex flex-col items-center p-1">
            <p className="text-sm whitespace-nowrap">Pesan Dibalas</p>
            <p className="text-sm font-semibold">{store.response_chat}%</p>
          </div>
        </div>

        <Button
          variant="outline"
          className="border-[#0F146D] border-2 text-[#0F146D] hover:bg-[#0F146D] hover:text-white"
        >
          Kunjungi Toko
        </Button>
      </div>

      <div className="flex flex-col gap-y-3">
        <h6 className="text-base font-semibold">Pengembalian dan Garansi</h6>
        <div className="flex gap-2">
          <Speech />
          <p>Berubah Pikiran</p>
        </div>
        <div className="flex gap-2">
          <Undo2 />
          <p>Garansi Pengembalian</p>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <img src={QR} alt="QR-image" className="w-20 h-20" />
        <p>Scan pakai HP kamu</p>
      </div>
    </div>
  );
};

export default Store;
