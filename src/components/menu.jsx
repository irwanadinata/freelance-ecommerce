import MenuLazada from "@/assets/menu-lazada.png";
import TopUp from "@/assets/top-up.png";
import Voucher from "@/assets/voucher.png";

const Menu = () => {
  return (
    <>
      <div class="flex shadow-lg mt-2 lg:w-10/12 md:w-full mx-auto rounded-md bg-[#FFFFFF]">
        <div class="w-1/3 flex items-center justify-center">
          <img src={MenuLazada} alt="menu-lazada-image" class="mr-1" />
          <a href=""><p className="font-semibold">LazMall</p></a>
        </div>
        <div class="w-1/3 flex items-center justify-center">
          <img src={TopUp} alt="top-up-image" class="mr-1" />
          <a href=""><p className="font-semibold">TopUp</p></a>
        </div>
        <div class="w-1/3 flex items-center justify-center">
          <img src={Voucher} alt="voucher-image" class="mr-1" />
          <a href=""><p className="font-semibold ml-1">Voucher</p></a>
        </div>
      </div>
    </>
  );
};

export default Menu;
