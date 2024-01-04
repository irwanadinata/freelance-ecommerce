import products from "@/utils/data/product.json";
import vouchers from "@/utils/data/voucher.json";

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

export const getStoreNameById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = products.find((product) => product.store.id == id);
      if (!result) {
        reject("Terjadi Kesalahan saat mencari nama toko");
      }
      resolve(result.store.store_name);
    }, 1500);
  });
};

export const getVoucherCoupon = async (code) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = vouchers.find((voucher) => voucher.code === code);
      if (!result) {
        reject("Kode voucher salah");
      }
      resolve(result);
    }, 1500);
  });
};
