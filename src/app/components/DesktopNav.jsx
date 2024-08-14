"use client";

import React from "react";
import { MdMenu } from "react-icons/md";
import Link from "next/link";

import ThemeSwitcher from "./ThemeSwitcher";
import SearchFilter from "./SearchFilters";

const DesktopNav = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto my-0 overflow-hidden">
      <div className="hidden lg:flex items-center justify-between p-4 bg-gray-900 text-white shadow-lg space-x-6">
        <div className="flex items-center space-x-6">
          <div className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-xl shadow-md">
            IMDb
          </div>
          <div className="relative cursor-pointer flex items-center space-x-2">
            <MdMenu size={24} />
            <span className="text-lg font-medium">Menu</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 bg-white w-[800px] rounded-3xl overflow-hidden">
          <SearchFilter />
          <input
            className="text-black border-none bg-white w-full rounded-md px-4 py-2 outline-none placeholder-gray-400 shadow-sm"
            type="search"
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center space-x-6">
          <div className="font-extrabold text-xl">
            IMDb<span className="text-blue-400">Pro</span>
          </div>
          <div className="text-sm text-gray-300">Whitelist</div>
          <Link
            href="login"
            className="text-blue-400 hover:underline font-medium transition"
          >
            Sign In
          </Link>
          <select
            className="bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 outline-none shadow-sm hover:bg-gray-700 transition"
            name="language"
            id="language"
          >
            <option value="english">En</option>
            <option value="french">Fn</option>
            <option value="spanish">Sp</option>
          </select>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
