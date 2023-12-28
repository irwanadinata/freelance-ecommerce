import NotificationIcon from "@/assets/icons/notification-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function Notification() {
  return (
    <Popover>
      <PopoverTrigger>
        <NotificationIcon />
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 rounded-none">
        <div className="flex flex-col">
          <div className="p-3 shadow-md mb-2">
            <p className="font-medium">Notifikasi</p>
          </div>
          <div className="p-3 bg-[#FFCCEC] border-b-gray-400 border-[1px]">
            <h6 className="font-medium text-sm">Testing</h6>
            <p className="text-sm">
              Pembayaran kamu dengan no. pesanan 1316270715736811 sukses. Pesanan kamu kini sedang
              di proses oleh toko.
            </p>
          </div>
          <div className="p-3 bg-[#FFCCEC] border-b-gray-400 border-[1px]">
            <h6 className="font-medium text-sm">Testing</h6>
            <p className="text-sm">
              Pembayaran kamu dengan no. pesanan 1316270715736811 sukses. Pesanan kamu kini sedang
              di proses oleh toko.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
