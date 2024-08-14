"use client";

import React, { useState, useEffect } from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (link) => {
    if (isClient) {
      window.open(link, "_blank");
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-6 md:py-10 max-w-full mx-auto mt-10 w-full overflow-hidden">
      <div className="container mx-auto mt-5 px-4">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md mb-6 md:mb-8 transition duration-300 ease-in-out block mx-auto">
          Sign in for More Access
        </button>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-6 md:mb-10">
          <div className="border-white border-2 rounded-lg p-4 md:p-5 text-center">
            <p className="font-semibold text-base md:text-lg mb-4">
              Follow IMDb on Social
            </p>
            <div className="flex flex-wrap gap-4 text-2xl justify-center">
              <FaTiktok className="hover:text-gray-500 cursor-pointer" />
              <FaXTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-400 cursor-pointer" />
              <FaYoutube className="hover:text-red-500 cursor-pointer" />
              <FaFacebook className="hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
          <div className="border-white border-2 rounded-lg p-4 md:p-5 text-center">
            <p className="font-semibold text-base md:text-lg mb-2">
              Get the IMDb App
            </p>
            <p className="text-sm md:text-base">For Android and iOS</p>
          </div>
        </div>
        <ul className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-6 justify-center text-sm md:text-base">
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => handleClick("https://help.imdb.com")}
          >
            Help
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => handleClick("https://www.imdb.com/help")}
          >
            Site Index
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => handleClick("https://pro.imdb.com")}
          >
            IMDbPro
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => handleClick("https://www.boxofficemojo.com")}
          >
            Box Office Mojo
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => handleClick("https://developer.imdb.com")}
          >
            License IMDb Data
          </li>
        </ul>
        <ul className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center text-sm md:text-base">
          <li>
            <Link
              href="/pressroom"
              className="hover:text-gray-400 transition duration-300 ease-in-out"
            >
              Press Room
            </Link>
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => handleClick("https://advertisment.amazion.com")}
          >
            Advertisement
          </li>
          <li
            className="hover:text-gray-400 cursor-pointer"
            onClick={() => handleClick("https://amazion.com/jobs")}
          >
            Jobs
          </li>
          <li>
            <Link
              href="/conditions"
              className="hover:text-gray-400 transition duration-300 ease-in-out"
            >
              Conditions of Use
            </Link>
          </li>
          <li>
            <Link
              href="/privacy"
              className="hover:text-gray-400 transition duration-300 ease-in-out"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/privacy/redirect/?ref_=ft_redir"
              className="hover:text-gray-400 transition duration-300 ease-in-out"
            >
              Redirected Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
