import ProductCard from "./product-card";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { getStoreNameById } from "@/utils/data/dataHandler";
import convertToRupiah from "@/utils/formatter/rupiahConverter";

const ShippingCard = ({
  value,
  checked,
  onCheckedChange,
  type,
  price,
  expectedArrival1,
  expectedArrival2,
  month,
}) => {
  return (
    <div className="border-2 flex flex-col gap-y-1 py-2 px-6 w-52 border-black rounded-md">
      <p>{convertToRupiah(price)}</p>
      <div className="flex justify-between">
        <p>{type}</p>
        <Checkbox
          value={value}
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="w-6 h-6 border-2 data-[state=checked]:bg-white"
        />
      </div>
      {expectedArrival1} - {expectedArrival2} {month}
    </div>
  );
};

const Shipping = ({ store, product, deliveryFee, setDeliveryFee, index }) => {
  const [storeName, setStoreName] = useState();
  const [{ standard, regular, express }, setChecked] = useState({
    standard: false,
    regular: false,
    express: false,
  });

  useEffect(() => {
    const getStoreName = async (id) => {
      const name = await getStoreNameById(id);
      setStoreName(name);
    };

    getStoreName(store);
  }, [store]);

  const getDate = (approx) => {
    const date = new Date();
    date.setDate(date.getDate() + approx);
    return date.getDate();
  };

  const getMonth = (approx) => {
    const month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const date = new Date();
    date.setDate(date.getDate() + approx);
    return month[date.getMonth()];
  };

  const handleCheckboxChange = (option) => {
    setChecked((prevOptions) => ({
      ...Object.fromEntries(Object.entries(prevOptions).map(([key]) => [key, key === option])),
    }));
  };

  const handleDeliveryFeeChange = (amount, index) => {
    const data = [...deliveryFee];
    data.splice(index, 1, amount);
    setDeliveryFee(data);
  };

  return (
    <>
      <div className="p-5 flex gap-y-5 flex-col shadow-md rounded-md bg-white">
        <div className="flex flex-col">
          <p className="font-medium">Dikirim Oleh: {storeName}</p>
          <p className="font-medium">Pilihan Pengiriman</p>
          <div className="flex justify-between">
            <ShippingCard
              checked={standard}
              onCheckedChange={() => {
                handleDeliveryFeeChange(16000, index);
                handleCheckboxChange("standard");
              }}
              type="Standar"
              price={16000}
              expectedArrival1={getDate(0)}
              expectedArrival2={getDate(5)}
              month={getMonth(5)}
            />
            <ShippingCard
              checked={regular}
              onCheckedChange={() => {
                handleDeliveryFeeChange(20000, index);
                handleCheckboxChange("regular");
              }}
              type="Regular"
              price={20000}
              expectedArrival1={getDate(0)}
              expectedArrival2={getDate(3)}
              month={getMonth(3)}
            />
            <ShippingCard
              checked={express}
              onCheckedChange={() => {
                handleDeliveryFeeChange(25000, index);
                handleCheckboxChange("express");
              }}
              type="Express"
              price={25000}
              expectedArrival1={getDate(0)}
              expectedArrival2={getDate(2)}
              month={getMonth(2)}
            />
          </div>
        </div>

        {/* product */}
        <div className="flex flex-col gap-y-4">
          <ProductCard id={product[0].id} option={product[0].option} quantity={product[0].amount} />
        </div>
      </div>

      <div className="p-5 bg-white rounded-md shadow-md gap-y-2 flex flex-col">
        <p>Catatan</p>
        <Input className="border-black focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>
    </>
  );
};

export default Shipping;
