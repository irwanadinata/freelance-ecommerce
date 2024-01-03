import PhoneIcon from "@/assets/icons/phone-icon";

const Banner = () => {
  return (
    <div className="w-full bg-[#FFFFFF] ">
    <div className="lg:w-10/12 md:w-full mx-auto flex justify-between h-14 items-center p-3">
      <div className="flex gap-2 items-center">
        <PhoneIcon />
        <p>Download App</p>
      </div>
      <div className="flex gap-16">
        <p>Menjadi Seller</p>
        <p>Customer Care</p>
      </div>
    </div>
    </div>
  );
};

export default Banner;
