import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { SearchInput } from "./search-input";
import useCart from "@/utils/store/cartStore";
import { Notification } from "./notification";
import CartIcon from "@/assets/icons/cart-icon";
import LazadaIcon from "@/assets/icons/lazada-icon";
import PackageIcon from "@/assets/icons/package-icon";
import ProfileIcon from "@/assets/icons/profile-icon";
import MessageOutlineIcon from "@/assets/icons/message-outline-icon";
import { Menu } from "lucide-react";
import LazadaIconSmall from "@/assets/lazada-photo.png";

const Navbar = () => {
  const { cart } = useCart();
  const [isFixed, setIsFixed] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

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

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {/* Large screens */}
      <nav
        className={`hidden lg:flex lg:w-10/12 lg:mx-auto lg:flex-col lg:justify-center lg:shadow-md lg:bg-white lg:rounded-b-md ${
          isFixed ? "sticky top-0 z-30" : ""
        }`}
      >
        <div className="flex h-20 items-center p-3 justify-around">
          <LazadaIcon className="w-44" />
          <SearchInput />
          <div className="flex gap-3">
            <NavLink className="cursor-pointer" to="/cart">
              <div className="relative">
                <CartIcon />
                {cart.length > 0 && (
                  <div className="absolute top-0 -right-1 w-4 h-4 rounded-full bg-red-500 text-xs flex items-center justify-center text-white font-medium">
                    {cart.length}
                  </div>
                )}
              </div>
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

      {/* Small screens */}
      <nav
        className={`lg:hidden bg-[#FFFFFF] p-3 ${
          isFixed ? "fixed top-0 w-full" : ""
        }`}
      >
        <div className="flex flex-row justify-center items-center gap-3 mx-auto">
          <img src={LazadaIconSmall} alt="lazada-icon" className="w-8 h-6" />
          <SearchInput />
          <button onClick={toggleNav} className="text-black">
            <Menu />
          </button>
        </div>
        {isNavOpen && (
          <div className="flex flex-col items-end gap-3 p-4 bg-white rounded-md shadow-md transition-transform transform translate-y-0 opacity-100">
            <NavLink to="/cart" className="flex items-center cursor-pointer">
              <div className="relative mr-2">
                <CartIcon />
                {cart.length > 0 && (
                  <div className="absolute top-0 -right-1 w-4 h-4 rounded-full bg-red-500 text-xs flex items-center justify-center text-white font-medium">
                    {cart.length}
                  </div>
                )}
              </div>
              <span>My Cart</span>
            </NavLink>
            <div className="flex items-center gap-2">
              <Notification />
              <span>Notifications</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageOutlineIcon />
              <span>Messages</span>
            </div>
            <div className="flex items-center gap-2">
              <PackageIcon />
              <span>Packages</span>
            </div>
            <div className="flex items-center gap-2">
              <ProfileIcon />
              <span>Afifah Vollyani</span>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
