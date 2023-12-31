import { Loader2 } from "lucide-react";
import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import Footer1 from "@/components/footer-1";
import Footer2 from "@/components/footer-2";
import { useEffect, useState } from "react";
import Footer4 from "@/components/footer-4";
import SameShop from "./components/same-shop";
import Detail from "./components/product-detail";
import MaybeYouLike from "./components/maybe-you-like";
import sameShopData from "@/utils/data/same-shop.json";
import { getProductById } from "@/utils/data/dataHandler";
import maybeYouLikeData from "@/utils/data/maybe-you-like.json";
import { ScrollRestoration, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((message) => alert(message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="bg-[#FFFAF5]">
      <ScrollRestoration />
      <Banner />
      <Navbar />
      {!loading ? (
        <Detail product={product} />
      ) : (
        <div className="flex items-center h-96 justify-center">
          <Loader2 className="animate-spin w-10 h-10 text-gray-500" />
        </div>
      )}
      <SameShop products={sameShopData} />
      <MaybeYouLike products={maybeYouLikeData} />
      <Footer1 />
      <Footer2 />
      <Footer4 />
    </div>
  );
};

export default ProductDetail;
