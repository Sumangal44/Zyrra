import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We are a team of passionate individuals dedicated to providing you
            with
          </p>
          <p>
            Welcome to our website! We are a team of passionate individuals
            dedicated to providing you with
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Mission, vision and values statements serve as the foundation for an
            organization’s strategic plan. They convey the purpose, direction
            and underlying values of the organization. When developed and
            implemented in a thoughtful and deliberate manner, these statements
            can serve as powerful tools that provide organizations with
            meaningful guidance, especially under times of rapid change.
            Consequently, taking the time to craft relevant mission, vision and
            value statements should be
          </p>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Quality Assurance:</b>
          <p className="text-gray-600">
            We are committed to delivering high-quality products and services.
            Our team of experts ensures that every aspect of our work meets the
            highest standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Convenience:</b>
          <p className="text-gray-600">
            We understand that your time is valuable. Our platform is designed
            to be user-friendly and efficient, making it easy for you to find
            what you need quickly.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our dedicated customer service team is here to assist you every step
            of the way. We value your feedback and are always ready to help you
            with any questions or concerns.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
