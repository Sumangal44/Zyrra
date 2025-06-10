import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContextConfig";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  // const [subCategory, setSubCategory] = useState([]);

  const [sortType, setSortType] = useState("default");
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  // const toggleSubCategory = (e) => {
  //   if (subCategory.includes(e.target.value)) {
  //     setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
  //   } else {
  //     setSubCategory((prev) => [...prev, e.target.value]);
  //   }
  // };

  useEffect(() => {
    let result = [...products];

    if (showSearch && search) {
      result = result.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
    }

    if (category.length > 0) {
      result = result.filter((p) => category.includes(p.category));
    }
    // if (subCategory.length > 0) {
    //   result = result.filter((p) => category.includes(p.category));
    // }

    if (sortType === "low-to-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-to-low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortType === "default") {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    setFilteredProducts(result);
  }, [products, category, sortType, search, showSearch]);
  return (
    <div className=" flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter option */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 "
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : " "}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* catagory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium ">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Rings"}
                checked={category.includes("Rings")}
                onChange={toggleCategory}
              />
              Rings
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Necklace"}
                checked={category.includes("Necklace")}
                onChange={toggleCategory}
              />
              Necklace
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Earrings"}
                checked={category.includes("Earrings")}
                onChange={toggleCategory}
              />
              Earrings
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bangles"}
                checked={category.includes("Bangles")}
                onChange={toggleCategory}
              />
              Bangles
            </p>
          </div>
        </div>
        {/* <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="mb-3 text-sm font-medium ">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                checked={subCategory.includes("Topwear")}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                checked={subCategory.includes("Bottomwear")}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
          </div>
        </div> */}
      </div>
      <div className="flex-1">
        <div className="flex justify-between  text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"Collections"} />
          {/* product sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="default" className="text-sm">
              Default Sorting
            </option>
            <option value="low-to-high" className="text-sm">
              Price: Low to High
            </option>
            <option value="high-to-low" className="text-sm">
              Price: High to Low
            </option>
            <option value="newest" className="text-sm">
              Newest First
            </option>
          </select>
        </div>
        {/* map product */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              images={item.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
