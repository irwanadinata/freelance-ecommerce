import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { SearchInput } from "./search-input";
import { Notification } from "./notification";
import CartIcon from "@/assets/icons/cart-icon";
import LazadaIcon from "@/assets/icons/lazada-icon";
import PackageIcon from "@/assets/icons/package-icon";
import ProfileIcon from "@/assets/icons/profile-icon";
import MessageOutlineIcon from "@/assets/icons/message-outline-icon";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 65) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-10/12 mx-auto flex flex-col justify-center shadow-md bg-white rounded-b-md  ${
        isFixed ? "sticky top-0 z-30" : ""
      }`}
    >
      <div className="flex h-20 items-center p-3 justify-around">
        <LazadaIcon className="w-44" />
        <SearchInput />
        <div className="flex gap-3">
          <NavLink className="cursor-pointer" to="/cart">
            <CartIcon />
          </NavLink>
          <Notification />
          <MessageOutlineIcon />
          <PackageIcon />
        </div>
        <div className="flex items-center gap-3">
          <ProfileIcon />
          <p>Afifah Vollyani</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
