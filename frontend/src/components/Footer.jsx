import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="ShilpoKotha Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
Shilpo Kotha brings you handcrafted jewellery that tells a story. Celebrate tradition, beauty, and craftsmanship with every piece.          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/orders" className="hover:underline">
                Delivery
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a href="tel:+919046089819" className="hover:underline">
                +91 90460 89819
              </a>
            </li>
            <li>
              <a
                href="mailto:tanusreejana9192004@gmail.com"
                className="hover:underline"
              >
                tanusreejana9192004@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-center text-gray-600 text-sm mb-5 py-5">
          © 2025 ShilpoKotha. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
