import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import alfamartLogo from "@/assets/payment-method/alfamart.png";
import bcaLogo from "@/assets/payment-method/bca.png";
import bniLogo from "@/assets/payment-method/bni.png";
import briLogo from "@/assets/payment-method/bri.png";
import danaLogo from "@/assets/payment-method/dana.png";
import indomaretLogo from "@/assets/payment-method/indomaret.png";
import mastercardLogo from "@/assets/payment-method/mastercard.png";

const PaymentMethod = ({ logo, company }) => {
  return (
    <div className="flex justify-between rounded-md border-[1px] border-gray-500 p-4 items-center">
      <div className="flex gap-x-4 items-center">
        {logo && <img src={logo} className="h-10 w-10 object-cover" />}
        <p className="font-medium">{company}</p>
      </div>
      <Checkbox className="w-6 h-6 border-2 data-[state=checked]:bg-white" />
    </div>
  );
};

const PaymentMethodDialog = () => {
  return (
    <Dialog className="max-h-screen overflow-scroll">
      <DialogTrigger asChild>
        <Button className="bg-[#F8009C] hover:bg-[#F8009C]/80 mt-2">Pilih Metode Pembayaran</Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-scroll">
        <DialogHeader>
          <DialogTitle>Pilih Metode Pembayaran</DialogTitle>
        </DialogHeader>
        <div className="border-[1px] border-gray-500 p-4 gap-y-4 flex flex-col rounded-md">
          <PaymentMethod company="Bayar Ditempat" />
          <PaymentMethod logo={danaLogo} company="Dana" />
          <PaymentMethod logo={mastercardLogo} company="Kartu Kredit/Debit" />
          <PaymentMethod logo={bniLogo} company="BNI" />
          <PaymentMethod logo={bcaLogo} company="BCA" />
          <PaymentMethod logo={briLogo} company="BRI" />
          <PaymentMethod logo={alfamartLogo} company="Alfamart" />
          <PaymentMethod logo={indomaretLogo} company="Indomaret" />
        </div>
        <Button className="bg-[#F8009C] hover:bg-[#F8009C]/80">Bayar</Button>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentMethodDialog;
