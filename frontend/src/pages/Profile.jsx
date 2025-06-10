import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContextConfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { backendUrl, token } = useContext(ShopContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setLoading(false);
      setUser(null);
      return;
    }
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(backendUrl + "/api/user/profile", {
          headers: { token }
        });
        if (data.success) setUser(data.user);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
        setUser(null);
        toast.error("Failed to fetch profile!");
      }
      setLoading(false);
    };

    fetchProfile();
  }, [token, backendUrl]);

  if (loading)
    return (
      <div className="pt-24 flex justify-center items-center min-h-[60vh] bg-gradient-to-br from-zinc-100 to-zinc-300">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-600"></div>
      </div>
    );

  return (
    <div className="pt-20 px-2 min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-300 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 mb-10 border border-zinc-200">
        <h2 className="text-3xl font-extrabold text-zinc-800 mb-8 text-center tracking-tight">
          {user?.name ? `${user.name}'s Profile` : "Profile"}
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          <div className="flex-shrink-0">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-zinc-400 to-zinc-600 flex items-center justify-center text-5xl font-bold text-white shadow-lg border-4 border-zinc-200">
              {user?.name?.[0]?.toUpperCase() || "U"}
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="mb-4">
              <span className="font-semibold text-zinc-700">Name:</span>
              <span className="ml-2 text-zinc-900 break-all text-lg">
                {user?.name}
              </span>
            </div>
            <div>
              <span className="font-semibold text-zinc-700">Email:</span>
              <span className="ml-2 text-zinc-900 break-all text-lg">
                {user?.email}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <button
            onClick={() => {
              toast.info("Redirecting to your orders...");
              navigate("/orders");
            }}
            className="bg-zinc-800 hover:bg-zinc-900 text-white px-8 py-3 rounded-lg shadow transition w-full sm:w-auto font-semibold text-base cursor-pointer"
          >
            Go to My Orders
          </button>
          <button
            onClick={() => {
              toast.info("Redirecting to your cart...");
              navigate("/cart");
            }}
            className="bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-300 px-8 py-3 rounded-lg shadow transition w-full sm:w-auto font-semibold text-base cursor-pointer"
          >
            Go to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
