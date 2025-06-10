import  { useState, useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContextConfig";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, cartItems, currency, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      const temData = [];
      for (const items in cartItems) {
        if (cartItems[items] > 0) {
          temData.push({
            id: items,
            quantity: cartItems[items]
          });
        }
      }
      setCartData(temData);
    }
    // console.log(temData);
  }, [cartItems, products]);

  // Handler for checkout
  const handleCheckout = () => {
    if (cartData.length === 0) {
      // Replace alert with your toast if you use one (e.g. toast.error("Add to cart first!"))
      alert("Add to cart first!");
      return;
    }
    navigate("/place-order");
  };

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3 ">
        <Title text1={"Your"} text2={"Cart"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item.id
          );
          if (!productData) return null;
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 sm:gap-6"
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.images[0]}
                  alt={productData.name}
                  className="w-16 sm:w-20 "
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) => {
                  e.target.value === "" || e.target.value === 0
                    ? null
                    : updateQuantity(item.id, Number(e.target.value));
                }}
                className="border max-w-10 sm:max-w-20 px-1 sm:py-2 py-1 "
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => updateQuantity(item.id, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer "
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={handleCheckout}
              className="bg-zinc-900 text-white text-sm my-8 px-8 py-3"
              disabled={cartData.length === 0}
              style={{
                opacity: cartData.length === 0 ? 0.5 : 1,
                cursor: cartData.length === 0 ? "not-allowed" : "pointer"
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
