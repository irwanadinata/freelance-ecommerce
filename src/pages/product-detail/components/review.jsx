import { CircleUserRound } from "lucide-react";

const ReviewCard = ({ user, option, review, firstChild }) => {
  return (
    <div
      className={`shadow-md bg-white ${
        firstChild ? "rounded-b-md" : "rounded - md"
      } p-5 flex flex-col gap-y-2`}
    >
      <div className="flex gap-2 items-center">
        <CircleUserRound className="w-9 h-9" />
        {user}
      </div>
      {option ?? <p>Pink</p>}
      <p className="font-medium">{review}</p>
    </div>
  );
};

const Review = () => {
  return (
    <div className="">
      <h4 className="rounded-t-md bg-white border-b-2 border-gray-400 p-3 font-semibold">
        Ulasan Produk
      </h4>
      <div className="flex flex-col gap-y-2">
        <ReviewCard
          user="Aninditia D."
          option="Black"
          review="Pengiriman cepat dan barang sesuai dengan gambar"
        />
        <ReviewCard
          user="Aninditia D."
          option="Black"
          review="Pengiriman cepat dan barang sesuai dengan gambar"
        />
        <ReviewCard
          user="Aninditia D."
          option="Black"
          review="Pengiriman cepat dan barang sesuai dengan gambar"
        />
      </div>
    </div>
  );
};

export default Review;
