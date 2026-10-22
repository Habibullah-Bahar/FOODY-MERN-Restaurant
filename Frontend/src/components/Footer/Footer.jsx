import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 px-20 space-y-5 ">
        <div>
          <div>
            <div className="flex object-center gap-3 cursor-pointer ">
              <h1 className="text-xl sm:text-3xl font-medium">FOODY</h1>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300   ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            cumque fuga distinctio quas!
          </p>
          <div className="flex items-center gap-3 pt-5">
            <FaLocationDot className="h-6 w-6 rounded-full bg-orange-100 dark:bg-orange-300 p-1" />
            <p>Tangail, Dhaka</p>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <FaPhoneAlt className="h-6 w-6 rounded-full bg-violet-100 dark:bg-violet-300 p-1" />
            <p>+880 1703-321082</p>
          </div>
          <div className="flex items-center gap-3 mt-3 py-5">
            <a href="#">
              <FaSquareInstagram className="text-3xl hover:scale-105" />
            </a>
            <a href="#">
              <FaFacebook className="text-3xl hover:scale-105" />
            </a>
            <a href="#">
              <IoLogoLinkedin className="text-3xl hover:scale-105" />
            </a>
          </div>
        </div>

        {/* links  */}
        <div className="flex flex-col sm:ml-25 lg:ml-[200px] gap-3">
          <h1 className="text-xl font-bold mb-3">Important Links</h1>
          <div className="flex gap-2 items-center text-gray-500 dark:text-gray-300 cursor-pointer hover:translate-x-1 duration-200">
            <PiArrowBendDoubleUpRightBold className="font-semibold" />
            <Link to="/">
              <p className="font-semibold">Home</p>
            </Link>
          </div>
          <div className="flex gap-2 items-center text-gray-500 dark:text-gray-300 cursor-pointer hover:translate-x-1 duration-200">
            <PiArrowBendDoubleUpRightBold className="font-semibold" />
            <Link to="/about">
              <p className="font-semibold">About</p>
            </Link>
          </div>
          <div className="flex gap-2 items-center text-gray-500 dark:text-gray-300 cursor-pointer hover:translate-x-1 duration-200">
            <PiArrowBendDoubleUpRightBold className="font-semibold" />
            <Link to="/contact">
              {" "}
              <p className="font-semibold">Contact</p>
            </Link>
          </div>
          <div className="flex gap-2 items-center text-gray-500 dark:text-gray-300 cursor-pointer hover:translate-x-1 duration-200">
            <PiArrowBendDoubleUpRightBold className="font-semibold" />
            <Link to="/blog">
              <p className="font-semibold">Blog</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
