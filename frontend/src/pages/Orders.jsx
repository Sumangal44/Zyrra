import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContextConfig";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      // console.log(response.data)
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        // console.log(allOrdersItem);
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadOrderData();
  }, [token]);
  return (
    <div className="border-t pt-16">
      <div className="tex-2xl">
        <Title text1={"My"} text2={"Orders"} />
      </div>
      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
          >
            <div className="flexx items-start gap-6 text-sm">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-16 sm:w-20 "
              />
              <div>
                <p className="sm:text-base font-medium "> {item.title}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-500">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity:{item.quantity}</p>
                </div>
                <p className="mt-1">
                  Date: <span className="text-gray-400 ">{new Date(item.date).toDateString() }</span>
                </p>
                <p className="mt-1">
                  Payment: <span className="text-gray-400 ">{item.paymentMethod }</span>
                </p>

              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>
              <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium rounded-sm cursor-pointer ">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
