import Store from "./store";
import Review from "./review";
import Rating from "./rating";
import Product from "./product";
import Description from "./description";

const Detail = () => {
  return (
    <div className="w-10/12 mx-auto my-3 flex flex-col gap-y-5">
      <div className="flex ">
        <Product />
        <Store />
      </div>
      <Description />
      <Rating />
      <Review />
    </div>
  );
};

export default Detail;
