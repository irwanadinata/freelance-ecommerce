import Store from "./store";
import Review from "./review";
import Rating from "./rating";
import Product from "./product";
import Description from "./description";

const Detail = ({ product }) => {
  return (
    <div className="w-10/12 mx-auto my-3 flex flex-col gap-y-5">
      <div className="flex">
        <Product product={product} />
        <Store product={product} />
      </div>
      <Description product={product} description={product.description} />
      <Rating product={product} rating={product.overall_rating} ratings={product.ratings} />
      <Review />
    </div>
  );
};

export default Detail;
