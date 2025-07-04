import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContextConfig";

const Navbar = () => {
  const [visible, setVisible] = useState();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems
  } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center py-4 font-medium">
      <Link to={"/"}>
        <img src={assets.logo} alt="Logo" className="w-28" />
      </Link>
      <ul className=" hidden sm:flex gap-7 text-md  ">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-1/2 border-none h-0.5 bg-black"></hr>
        </NavLink>
        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1"
        >
          <p>Collection</p>
          <hr className="w-1/2 border-none h-0.5 bg-black"></hr>
        </NavLink>

        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-1/2 border-none h-0.5 bg-black"></hr>
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-1/2 border-none h-0.5 bg-black"></hr>
        </NavLink>
        <NavLink to={"/reviews"} className="flex flex-col items-center gap-1">
          <p>Reviews</p>
          <hr className="w-1/2 border-none h-0.5 bg-black"></hr>
        </NavLink>
      </ul>
      <div className="flex items-center gap-5">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="Search"
          className="w-5 cursor-pointer "
        />
        <div
          className="relative"
          onMouseEnter={() => setProfileMenuOpen(true)}
          onMouseLeave={() => setProfileMenuOpen(false)}
        >
          <img
            onClick={() => {
              if (!token) {
                navigate("/login");
              } else {
                setProfileMenuOpen((prev) => !prev);
              }
            }}
            src={assets.profile_icon}
            alt="Profile"
            className="w-5 min-w-5 cursor-pointer"
          />
          {/* Dropdown menu  */}
          {token && profileMenuOpen && (
            <div className="block absolute dropdown-menu bg-white right-0 p-4 text-gray-500 z-50">
              <div className="flex flex-col gap-2 w-36  py-3 px-5 bg-slate-100 ">
                <p
                  onClick={() => {
                    setProfileMenuOpen(false);
                    navigate("/profile");
                  }}
                  className="cursor-pointer hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    setProfileMenuOpen(false);
                    navigate("/orders");
                  }}
                  className="cursor-pointer hover:text-black "
                >
                  Orders
                </p>
                <p
                  onClick={() => {
                    setProfileMenuOpen(false);
                    logout();
                  }}
                  className="cursor-pointer hover:text-black "
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to={"/cart"} className="relative">
          <img
            src={assets.cart_icon}
            alt="Cart"
            className="w-5 cursor-pointer min-w-5"
          />
          <p className="absolute  right-[-5px]  bottom-[-5px] text-center w-4  text-white leading-4 bg-black rounded-full aspect-square text-[8px]  ">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      <div
        className={`fixed top-0 left-0 bottom-0 bg-white overflow-hidden transition-all ${
          visible ? "w-full" : "w-0"
        }`}
        onClick={() => setVisible(false)}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/reviews"
          >
            Reviews
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
