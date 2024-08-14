"use client";

import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Link from "next/link";

import ThemeSwitcher from "./ThemeSwitcher";
import SearchFilter from "./SearchFilters";

const MobileNav = () => {
  const [nav, setNav] = useState(false);
  function toggleNav() {
    setNav(!nav);
  }
  return (
    <div className="fixed w-full z-50">
      <div className="lg:hidden flex items-center justify-between p-4 bg-gray-900 text-white shadow-lg">
        <div className="flex justify-between items-center space-x-4 w-full">
          <div className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-xl shadow-md">
            IMDb
          </div>
          <div className="font-extrabold text-xl">
            IMDb<span className="text-blue-400">Pro</span>
          </div>
          <div onClick={toggleNav}>{!nav ? <MdMenu /> : <MdClose />}</div>
        </div>
        {nav && (
          <div className="absolute top-16 left-0 w-full bg-gray-900 text-white shadow-lg rounded-md">
            <div className="p-4">
              <SearchFilter />
              <input
                className="text-black border-none bg-white w-full rounded-md px-4 py-2 outline-none placeholder-gray-400 shadow-sm mt-2"
                type="search"
                placeholder="Search..."
              />
            </div>
            <div className="block space-y-4 p-4">
              <div className="text-sm text-gray-300">Whitelist</div>
              <Link
                href="login"
                className="text-blue-400 hover:underline font-medium transition"
              >
                Sign In
              </Link>
              <div>
                <select
                  className="bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 outline-none shadow-sm hover:bg-gray-700 transition"
                  name="language"
                  id="language"
                >
                  <option value="english">En</option>
                  <option value="french">Fn</option>
                  <option value="spanish">Sp</option>
                </select>
              </div>
              <ThemeSwitcher />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
