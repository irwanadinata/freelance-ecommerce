import IndonesiaFlag from "@/assets/indonesia.svg";
import MalaysiaFlag from "@/assets/malaysia.svg";
import PhilippinesFlag from "@/assets/philippines.svg";
import SingaporeFlag from "@/assets/singapore.svg";
import ThailandFlag from "@/assets/thailand.svg";
import VietnamFlag from "@/assets/vietnam.svg";
import Facebook from "@/assets/facebook.svg";
import LazadaBlog from "@/assets/lazada-blog.png";
import Linkedin from "@/assets/linkedin.svg";
import Pinterest from "@/assets/pinterest.svg";
import Tiktok from "@/assets/tiktok.svg";
import Twitter from "@/assets/twitter.svg";
import Youtube from "@/assets/youtube.svg";

const Footer4 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-48 py-10 bg-[#ffffff]">
        <div className="flex flex-col items-center">
          <p className="text-xs font-semibold">Lazada Asia Tenggara</p>
          <div className="flex mt-4">
            <img src={IndonesiaFlag} alt="indonesia-flag-image" className="mr-1" />
            <img src={MalaysiaFlag} alt="malaysia-flag-image" className="mr-1" />
            <img src={PhilippinesFlag} alt="philippines-flag-image" className="mr-1" />
            <img src={SingaporeFlag} alt="singapore-flag-image" className="mr-1" />
            <img src={ThailandFlag} alt="thailand-flag-image" className="mr-1" />
            <img src={VietnamFlag} alt="vietnam-flag-image" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-xs font-semibold">Ikuti Kami</p>
          <div className="flex mt-4">
            <img src={Facebook} alt="facebook-logo" className="mr-1" />
            <img src={Linkedin} alt="linkedin-logo" className="mr-1" />
            <img src={Youtube} alt="youtube-logo" className="mr-1" />
            <img src={Pinterest} alt="pinterest-logo" className="mr-1" />
            <img src={Twitter} alt="twitter-logo" className="mr-1" />
            <img src={Tiktok} alt="tiktok-logo" className="mr-1" />
            <img src={LazadaBlog} alt="lazada-blog-logo" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p>&copy; Lazada 2023</p>
        </div>
      </div>
    </>
  );
};

export default Footer4;
