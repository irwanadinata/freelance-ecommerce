import { SearchInput } from "./search-input";
import CartIcon from "@/assets/icons/cart-icon";
import PhoneIcon from "@/assets/icons/phone-icon";
import LazadaIcon from "@/assets/icons/lazada-icon";
import PackageIcon from "@/assets/icons/package-icon";
import ProfileIcon from "@/assets/icons/profile-icon";
import NotificationIcon from "@/assets/icons/notification-icon";
import MessageOutlineIcon from "@/assets/icons/message-outline-icon";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-10/12 shadow-md bg-white">
        <div className="flex justify-between h-14 items-center p-3 shadow-sm">
          <div className="flex gap-2 items-center">
            <PhoneIcon />
            <p>Download App</p>
          </div>
          <div className="flex gap-16">
            <p>Menjadi Seller</p>
            <p>Customer Care</p>
          </div>
        </div>
        <div className="flex h-28 items-center p-3 justify-around">
          <LazadaIcon className="w-44" />
          <SearchInput />
          <div className="flex gap-3">
            <CartIcon />
            <NotificationIcon />
            <MessageOutlineIcon />
            <PackageIcon />
          </div>
          <div className="flex items-center gap-3">
            <ProfileIcon />
            <p>Afifah Vollyani</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
