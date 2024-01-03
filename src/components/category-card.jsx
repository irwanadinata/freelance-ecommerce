const CategoryCard = ({ image, text }) => {
  return (
    <div className="w-48 h-56 bg-[#ffffff] shadow-md rounded-md m-1">
      <img src={image} alt="" className="w-full h-44 object-cover p-4" />
      <div className="card-body text-center">
        <p className="text-xs px-4">{text}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
