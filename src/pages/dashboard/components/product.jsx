import React from "react";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";

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
      <div className="flex justify-center mt-4">
        <Button
          variant="outline"
          className="lg:w-64 bg-[#F8FAFE] text-[#0F146D] border-2 border-[#0F146D]"
        >
          Tampilkan Lebih Banyak
        </Button>
      </div>
      <div class="border-b border-[#C4C4C4] border-solid h-1 lg:w-10/12 md:w-full mx-auto pt-6"></div>
    </div>
  );
};

export default ProductList;
