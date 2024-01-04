import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Loader2, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getProductPriceById } from "@/utils/data/dataHandler";
import convertToRupiah from "@/utils/formatter/rupiahConverter";

const Summary = ({ cart }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
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

  return (
    <div className="w-4/12 flex flex-col gap-y-3">
      <div className="p-3 flex gap-3 rounded-md bg-white">
        <MapPin />
        <p>Jl. Raden Patah No. 101, Purwokerto, Banyumas, Jawa Tengah</p>
      </div>
      <div className="p-3 flex flex-col gap-y-5 rounded-md bg-white">
        <div className="flex flex-col">
          <p className="font-medium">Ringkasan Pesanan</p>
          <div className="flex justify-between">
            <p>subtotal ({selectedCart.length} barang)</p>
            <p>
              {loading ? <Loader2 className="animate-spin w-5 h-5" /> : convertToRupiah(totalPrice)}
            </p>
          </div>
        </div>

        {/* voucher apply */}
        <div className="flex items-center justify-between">
          <Input
            className="h-7 w-56 focus-visible:ring-0 border-black focus-visible:ring-offset-0"
            placeholder="Masukkan Voucher"
          />
          <Button className="h-7 bg-[#0F146D] hover:bg-[#0F146D]/80">Gunakan</Button>
        </div>

        <div className="flex justify-between">
          <p>Total</p>
          <p>
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : convertToRupiah(totalPrice)}
          </p>
        </div>

        <Button
          onClick={() => navigate("/cart/transaction")}
          className="bg-[#F8009C] hover:bg-[#F8009C]/80"
        >
          Buat Pesanan
        </Button>
      </div>
    </div>
  );
};

export default Summary;
