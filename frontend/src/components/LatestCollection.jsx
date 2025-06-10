import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContextConfig";
import Title from "./Title";
import ProductItem from "./ProductItem";

export const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [LatestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);
  return (
    <div className="my-10 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"Collections"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our latest collections, featuring the newest trends and
          timeless classics. Explore a curated selection of products that embody
          quality and style, designed to elevate your wardrobe and lifestyle.
        </p>
      </div>
      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-rows-4 lg:grid-cols-5 gap-4 gapy-6">
        {LatestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            images={item.images}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
