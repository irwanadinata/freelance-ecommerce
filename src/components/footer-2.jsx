import Visa from "@/assets/visa.png";
import Mastercard from "@/assets/mastercard.png";
import Cod from "@/assets/cod.png";
import LazadaLogistics from "@/assets/lazada-logistics.png";
import Jne from "@/assets/jne.png";
import NinjaExpress from "@/assets/ninja.png";
import GoSend from "@/assets/gosend.png";
import Grab from "@/assets/grab.png";
import Sicepat from "@/assets/sicepat.png";
import Jnt from "@/assets/j&t.png";
import AnterAja from "@/assets/anteraja.png";
import Sap from "@/assets/sap.png";
import Bsi from "@/assets/bsi.png";
import Dss from "@/assets/dss.png";

const Footer2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-48 py-10 bg-[#ffffff]">
      <div className="flex mx-4 flex-col items-center">
        <p className="mb-4 text-xs font-medium">Metode Pembayaran</p>
        <div className="flex">
          <div>
            <img src={Visa} alt="" />
            <img src={Cod} alt="" className="ml-4" />
          </div>
          <div className="ml-4">
            <img src={Mastercard} alt="" />
          </div>
        </div>
      </div>

      <div className="flex mx-4 flex-col items-center">
        <p className="mb-4 text-xs font-medium">Jasa pengiriman</p>
        <div className="flex">
          <div>
            <img src={LazadaLogistics} alt="" />
            <img src={GoSend} alt="" />
            <img src={Jnt} alt="" />
          </div>
          <div className="mt-4 mx-4">
            <img src={Jne} alt="" />
            <img src={Grab} alt="" className="my-3" />
            <img src={AnterAja} alt="" />
          </div>
          <div>
            <img src={NinjaExpress} alt="" />
            <img src={Sicepat} alt="" className="mt-3" />
            <img src={Sap} alt="" />
          </div>
        </div>
      </div>

      <div className="flex mx-4 flex-col items-centerr">
        <div>
          <p className="text-xs text-center font-medium">Keamanan dan Privasi</p>
        </div>
        <div className="flex mt-7">
          <img src={Bsi} alt="" />
          <img src={Dss} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer2;
