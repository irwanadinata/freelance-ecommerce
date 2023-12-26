import React from "react";
import CategoryCard from "@/components/category-card";
import Tv from "@/assets/category/tv.png";
import AirPods from "@/assets/category/air-pods.png";
import ElektronikRumah from "@/assets/category/elektronik-rumah.png";
import Motor from "@/assets/category/motor.png";
import KeperluanRumah from "@/assets/category/keperluan-rumah.png";
import Beras from "@/assets/category/beras.png";
import BajuWanita from "@/assets/category/baju-wanita.png";
import BajuPria from "@/assets/category/baju-pria.png";
import BajuAnak from "@/assets/category/baju-anak.png";
import MainanAnak from "@/assets/category/mainan-anak.png";
import Kecantikan from "@/assets/category/kecantikan.png";
import Sepeda from "@/assets/category/sepeda.png";

const categories = [
  { image: Tv, text: "Peralatan Elektronik" },
  { image: AirPods, text: "Aksesoris Elektronik" },
  { image: ElektronikRumah, text: "Elektronik Rumah" },
  { image: Motor, text: "Otomotif" },
  { image: KeperluanRumah, text: "Keperluan Rumah dan Gaya Hidup" },
  { image: Beras, text: "Kebutuhan Rumah Tangga" },
  { image: BajuWanita, text: "Fashion dan Aksesoris Wanita" },
  { image: BajuPria, text: "Fashion dan Aksesoris Pria" },
  { image: BajuAnak, text: "Fashion dan Aksesoris Anak" },
  { image: MainanAnak, text: "Bayi dan Mainan" },
  { image: Kecantikan, text: "Kesehatan dan Kecantikan" },
  { image: Sepeda, text: "Keperluan Rumah dan Gaya Hidup" },
];

const Category = () => {
  return (
    <div className="bg-[#FFFAF5] lg:py-4">
      <p className="lg:w-10/12 mx-auto md:w-full font-semibold pb-2">
        Kategori
      </p>
      <div className="flex flex-wrap justify-center lg:w-10/12 md:w-full mx-auto">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            text={category.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
