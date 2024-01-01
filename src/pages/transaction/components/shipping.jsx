import ProductCard from "./product-card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import convertToRupiah from "@/utils/formatter/rupiahConverter";

const ShippingCard = ({ type, price, expectedArrival1, expectedArrival2, month }) => {
  return (
    <div className="border-2 flex flex-col gap-y-1 py-2 px-6 w-52 border-black rounded-md">
      <p>{convertToRupiah(price)}</p>
      <div className="flex justify-between">
        <p>{type}</p>
        <Checkbox className="w-6 h-6 border-2 data-[state=checked]:bg-white" />
      </div>
      {expectedArrival1} - {expectedArrival2} {month}
    </div>
  );
};

const Shipping = ({ store, product }) => {
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

  return (
    <>
      <div className="p-5 flex gap-y-5 flex-col shadow-md rounded-md bg-white">
        <div className="flex flex-col">
          <p className="font-medium">Dikirim Oleh: {store}</p>
          <p className="font-medium">Pilihan Pengiriman</p>
          <div className="flex justify-between">
            <ShippingCard
              type="Standar"
              price={16000}
              expectedArrival1={getDate(0)}
              expectedArrival2={getDate(5)}
              month={getMonth(5)}
            />
            <ShippingCard
              type="Regular"
              price={20000}
              expectedArrival1={getDate(0)}
              expectedArrival2={getDate(3)}
              month={getMonth(3)}
            />
            <ShippingCard
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
