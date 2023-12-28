import ProductCard from "@/components/product-card";

const FlashSale = ({ products }) => {
  return (
    <div className="bg-[#ffffff] lg:w-10/12 mx-auto md:w-full my-6">
      <p className="font-semibold p-3">
        Flash Sale
      </p>
      <div className="flex flex-wrap justify-center mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
