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

export const getProductPriceById = async (id, amount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = products.find((product) => product.id == id);
      if (!result) {
        reject("Product tidak ditemukan");
      }

      const actualPrice = result.price - (result.discount / 100) * result.price;

      resolve(actualPrice * amount);
    }, 1500);
  });
};
