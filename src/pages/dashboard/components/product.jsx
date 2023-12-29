import React from "react";
import ProductCard from "@/components/product-card";

const ProductList = ({ products }) => {
  return (
    <div className="bg-[#FFFAF5] lg:py-4 mb-6">
      <p className="lg:w-10/12 mx-auto md:w-full font-semibold pb-2">
        Hanya Untukmu
      </p>
      <div className="flex flex-wrap justify-center lg:w-10/12 md:w-full mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
