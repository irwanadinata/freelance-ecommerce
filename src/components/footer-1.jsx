import LazadaFooter from "@/assets/lazada-footer.png";
import AppStore from "@/assets/app-store.png";
import PlayStore from "@/assets/play-store.png";
import AppGallery from "@/assets/app-gallery.png";

const Footer1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-48 py-10 bg-[#FFCCEC]">
      <div className="mx-4 text-center md:text-left">
        <a href="">
          <p className="text-xs font-medium text-[#0F146D] mb-2.5">
            Layanan Pelanggan
          </p>
          <p className="text-xs text-[#0F146D]">Pusat Bantuan</p>
          <p className="text-xs text-[#0F146D]">Cara Pembelian</p>
          <p className="text-xs text-[#0F146D]">Pengiriman</p>
          <p className="text-xs text-[#0F146D]">
            Kebijakan Produk International
          </p>
          <p className="text-xs text-[#0F146D]">Cara Pengembalian</p>
          <p className="text-xs text-[#0F146D]">
            Ada Pertanyaan? Hubungi kami di live chat (24jam)
          </p>
        </a>
      </div>

      <div className="mx-4 text-center md:text-left">
        <a href="">
          <p className="text-xs font-medium text-[#0F146D] mb-2.5">
            Jelajahi Lazada
          </p>
          <p className="text-xs text-[#0F146D]">Semua Kategori</p>
          <p className="text-xs text-[#0F146D]">Tentang Lazada</p>
          <p className="text-xs text-[#0F146D]">Affiliate Program</p>
          <p className="text-xs text-[#0F146D]">Karir</p>
          <p className="text-xs text-[#0F146D]">Syarat dan Ketentuan</p>
          <p className="text-xs text-[#0F146D]">Kebijakan Privasi</p>
          <p className="text-xs text-[#0F146D]">Press dan Media</p>
          <p className="text-xs text-[#0F146D]">Jual di Lazada</p>
          <p className="text-xs text-[#0F146D]">Lazada Security</p>
          <p className="text-xs text-[#0F146D]">
            Intelektual Property Protection
          </p>
        </a>
      </div>

      <div className="mx-4 grid grid-flow-col auto-cols-max m-auto xl:pt-7">
        <div className="mr-4">
          <img src={LazadaFooter} alt="lazada-logo" />
        </div>
        <div className="mr-4">
          <a href="https://apps.apple.com/id/app/lazada-online-shopping-app/id785385147" target="_blank">
            <img src={AppStore} alt="app-store" className=" mb-8" />
          </a>
          <a href="https://appgallery.huawei.com/app/C100164557" target="_blank">
            <img src={AppGallery} alt="app-gallery" />
          </a>
        </div>
        <div>
          <a href="https://play.google.com/store/apps/details?id=com.lazada.android&hl=id&gl=US" target="_blank">
            <img src={PlayStore} alt="play-store" className="mr-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
