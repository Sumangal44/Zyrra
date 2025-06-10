import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t ">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col gap-6 justify-center items-start">
          <p className="font-semibold text-xl text-gray-600"> Our Store</p>
          <p className="text-gray-500 ">
            Midnapore
            <br /> West Bengal, India, 721101
          </p>
          <p className="text-gray-500">
            Tel:(+91) 90460 89819 <br />
            Email: tanusreejana9192004@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever{" "}
          </p>
          <p className="text-gray-500 ">
            Interested in joining our team? <br /> Send your resume to <br />{" "}
            Midnapore, West Bengal, India, 721101
          </p>
          <button
            className="border border-black px-8 py-4 text-sm hover:bg-zinc-900 hover:text-white transition-all duration-50 rounded-md cursor-pointer"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSeZgbktJFiWaIs6vwkkoyh2pBOEsGRSieHlvi0jAdgh0nJoKQ/viewform?usp=sharing&ouid=103589814162751621783",
                "_blank"
              )
            }
          >
            Explore jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
