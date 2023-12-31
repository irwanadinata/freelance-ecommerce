import Shipping from "./shipping";

const DetailTransaction = () => {
  return (
    <div className="w-8/12 flex flex-col gap-y-3">
      <div className="flex flex-col p-5 bg-white rounded-md shadow-md">
        <div className="flex justify-between">
          <p className="font-medium">Alamat Pengiriman</p>
          <p className="underline text-blue-500 cursor-pointer hover:text-blue-500/80">Ubah</p>
        </div>
        <div className="flex gap-1">
          <p>Afifah Vollyani Saktiana</p>
          <p>-</p>
          <p>081111111111</p>
        </div>
        <p>Jl. Raden Patah No. 101, Purwokerto, Banyumas, Jawa Tengah</p>
      </div>

      <Shipping store="Toko Bahagia" />
    </div>
  );
};

export default DetailTransaction;
