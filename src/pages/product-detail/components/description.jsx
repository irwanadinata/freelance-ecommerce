const Description = ({ product, description }) => {
  return (
    <div className="p-3 rounded-md bg-white">
      <h4 className="border-b-2 border-gray-400 p-3 font-semibold">
        Detail produk dari {product.name}
      </h4>
      <div className="p-3">
        {description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
};

export default Description;
