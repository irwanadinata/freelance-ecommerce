import Swal from "sweetalert2";
import Voucher from "@/components/voucher";
import { useEffect, useState } from "react";
import useCart from "@/utils/store/cartStore";
import { Input } from "@/components/ui/input";
import { Loader2, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import convertToRupiah from "@/utils/formatter/rupiahConverter";
import { getProductPriceById, getVoucherCoupon } from "@/utils/data/dataHandler";

const Summary = ({ cart, totalAmount }) => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { setSelectedVoucher } = useCart();
  const [voucher, setVoucher] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [selectedCart, setSelectedCart] = useState([]);

  useEffect(() => {
    const result = cart.filter((item) => item.checked === true);
    setSelectedCart(result);
  }, [cart]);

  useEffect(() => {
    const fetchProductPrices = async () => {
      setLoading(true);
      const promises = selectedCart.map(async (product) => {
        const { id, amount } = product;
        const price = await getProductPriceById(id, amount);
        return price;
      });
      const resolvedPrices = await Promise.all(promises);
      const totalPrice = resolvedPrices.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      setTotalPrice(totalPrice);
      setLoading(false);
    };

    fetchProductPrices();
  }, [selectedCart]);

  const applyVoucher = async (voucher) => {
    const toUppercase = voucher.toUpperCase();
    setProcessing(true);
    try {
      const result = await getVoucherCoupon(toUppercase);
      setSelectedVoucher(result);
      localStorage.setItem("voucher", JSON.stringify(result));
      setError();
    } catch (error) {
      setError(error);
    } finally {
      setProcessing(false);
    }
  };

  const navigateToTransaction = () => {
    if (selectedCart.length <= 0) {
      Swal.fire({
        showConfirmButton: false,
        showCloseButton: true,
        html: `
          <div class="flex items-center h-20 justify-center text-[#CC0000]">
            <img src="/warning.svg" class='w-6 h-6 mr-2' alt='Warning Icon'/>
            Mohon Pilih Produk Yang Ingin Anda Beli!
          </div>
        `,
      });
    } else {
      navigate("/cart/transaction");
    }
  };

  return (
    <div className="lg:w-4/12 md:w-full flex flex-col gap-y-3">
      <div className="p-3 flex gap-3 rounded-md bg-white">
        <MapPin />
        <p>Jl. Raden Patah No. 101, Purwokerto, Banyumas, Jawa Tengah</p>
      </div>
      <div className="p-3 flex flex-col gap-y-5 rounded-md bg-white">
        <div className="flex flex-col">
          <p className="font-medium">Ringkasan Pesanan</p>
          <div className="flex justify-between">
            <p>subtotal ({totalAmount} barang)</p>
            <p>
              {loading ? <Loader2 className="animate-spin w-5 h-5" /> : convertToRupiah(totalPrice)}
            </p>
          </div>
        </div>

        {/* voucher apply */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <Input
              value={voucher}
              onChange={(e) => setVoucher(e.target.value)}
              placeholder="Masukkan Voucher"
              className="h-7 w-56 focus-visible:ring-0 border-black focus-visible:ring-offset-0 uppercase placeholder:normal-case"
            />
            <Button
              disabled={processing}
              onClick={() => applyVoucher(voucher)}
              className="h-7 w-20 bg-[#0F146D] hover:bg-[#0F146D]/80"
            >
              {processing ? <Loader2 className="animate-spin" /> : "Gunakan"}
            </Button>
          </div>
          <span className="text-sm text-red-500">{error && error}</span>
        </div>
        <div>
          <Voucher totalPrice={totalPrice} />
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p>
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : convertToRupiah(totalPrice)}
          </p>
        </div>
        <Button
          onClick={() => navigateToTransaction()}
          className="bg-[#F8009C] hover:bg-[#F8009C]/80"
        >
          Buat Pesanan
        </Button>
      </div>
    </div>
  );
};

export default Summary;
