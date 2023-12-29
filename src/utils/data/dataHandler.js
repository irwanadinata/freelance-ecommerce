import products from "@/utils/data/product.json";

export const getProductById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = products.find((product) => product.id == id);
      if (!result) {
        reject("Product tidak ditemukan");
      }
      resolve(result);
    }, 1500);
  });
};
