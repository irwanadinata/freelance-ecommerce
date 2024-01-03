import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getProductById } from "@/utils/data/dataHandler";
import convertToRupiah from "@/utils/formatter/rupiahConverter";

const ProductCard = ({ id, option, quantity }) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProduct = async (id) => {
      const product = await getProductById(id);
      setProduct(product);
    };

    getProduct(id);
  }, [id]);

  return (
    <div className="flex justify-between">
      {product ? (
        <>
          <div className="flex">
            <img src={product?.images.display} className="w-20 h-20 rounded-md" />
            <div className="flex flex-col justify-between ms-2 w-56">
              <p className="line-clamp-2">{product?.name}</p>
              <p>{option}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#FB8500] font-medium pb-0">
              {convertToRupiah(product?.price - (product?.discount / 100) * product?.price)}
            </p>
            <div className="flex gap-2 items-center">
              <p className="line-through">{convertToRupiah(product?.price)}</p>
              <p className="text-red-500">-{product?.discount}%</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p>Kuantitas: {quantity}</p>
          </div>
        </>
      ) : (
        <div className="mx-auto">
          <Loader2 className="w-10 h-10 animate-spin text-gray-500" />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
