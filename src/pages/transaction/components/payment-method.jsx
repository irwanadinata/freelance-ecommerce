import { useState } from "react";
import useCart from "@/utils/store/cartStore";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import bcaLogo from "@/assets/payment-method/bca.png";
import bniLogo from "@/assets/payment-method/bni.png";
import briLogo from "@/assets/payment-method/bri.png";
import danaLogo from "@/assets/payment-method/dana.png";
import alfamartLogo from "@/assets/payment-method/alfamart.png";
import indomaretLogo from "@/assets/payment-method/indomaret.png";
import mastercardLogo from "@/assets/payment-method/mastercard.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PaymentMethod = ({ checked, onCheckedChange, logo, company }) => {
  return (
    <div className="flex justify-between rounded-md border-[1px] border-gray-500 p-4 items-center">
      <div className="flex gap-x-4 items-center">
        {logo && <img src={logo} className="h-10 w-10 object-cover" />}
        <p className="font-medium">{company}</p>
      </div>
      <Checkbox
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="w-6 h-6 border-2 data-[state=checked]:bg-white"
      />
    </div>
  );
};

const PaymentMethodDialog = ({ totalPrice }) => {
  const navigate = useNavigate();
  const { setPaymentMethod, setTotalPrice } = useCart();
  const [checked, setChecked] = useState({
    cod: false,
    dana: false,
    cc: false,
    bni: false,
    bca: false,
    bri: false,
    alfamart: false,
    indomaret: false,
  });

  const handleCheckboxChange = (option, id) => {
    setChecked((prevOptions) => ({
      ...Object.fromEntries(Object.entries(prevOptions).map(([key]) => [key, key === option])),
    }));
    setPaymentMethod(id);
    setTotalPrice(totalPrice);
  };

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
          <PaymentMethod
            checked={checked.cod}
            onCheckedChange={() => handleCheckboxChange("cod", 99, totalPrice)}
            company="Bayar Ditempat"
          />
          <PaymentMethod
            checked={checked.dana}
            onCheckedChange={() => handleCheckboxChange("dana", 0)}
            logo={danaLogo}
            company="Dana"
          />
          <PaymentMethod
            checked={checked.cc}
            onCheckedChange={() => handleCheckboxChange("cc", 1)}
            logo={mastercardLogo}
            company="Kartu Kredit/Debit"
          />
          <PaymentMethod
            checked={checked.bni}
            onCheckedChange={() => handleCheckboxChange("bni", 2)}
            logo={bniLogo}
            company="BNI"
          />
          <PaymentMethod
            checked={checked.bca}
            onCheckedChange={() => handleCheckboxChange("bca", 3)}
            logo={bcaLogo}
            company="BCA"
          />
          <PaymentMethod
            checked={checked.bri}
            onCheckedChange={() => handleCheckboxChange("bri", 4)}
            logo={briLogo}
            company="BRI"
          />
          <PaymentMethod
            checked={checked.alfamart}
            onCheckedChange={() => handleCheckboxChange("alfamart", 5)}
            logo={alfamartLogo}
            company="Alfamart"
          />
          <PaymentMethod
            checked={checked.indomaret}
            onCheckedChange={() => handleCheckboxChange("indomaret", 6)}
            logo={indomaretLogo}
            company="Indomaret"
          />
        </div>
        <Button
          onClick={() => navigate("/confirm-payment")}
          className="bg-[#F8009C] hover:bg-[#F8009C]/80"
        >
          Bayar
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentMethodDialog;
