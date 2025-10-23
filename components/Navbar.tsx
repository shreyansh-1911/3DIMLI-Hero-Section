"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUpload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white py-4 px-6 flex items-center gap-6 shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <Image src="/3DIMLI LOGO.svg" width={120} height={40} alt="Logo" />

        <div className="w-[1px] h-6 bg-gray-600" />

        <div className="flex flex-col leading-[0.9]">
          <span className="text-[10px] font-light text-gray-400">BETA</span>
          <span className="text-[9px] font-light text-gray-500">1.0.1</span>
        </div>
      </div>

      <div className="hidden md:block w-[1px] h-6 bg-gray-600" />

      <ul className="hidden lg:flex gap-6 text-gray-300">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">Discover</li>
        <li className="hover:text-white cursor-pointer">Features</li>
        <li className="hover:text-white cursor-pointer">Pricing</li>
      </ul>

      {/* Search Bar */}
      <div className="flex flex-1 max-w-[420px] ml-auto bg-[#111] py-2 px-4 rounded-md items-center">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 bg-transparent outline-none text-sm"
        />
        <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
      </div>

      <button
        className="hidden md:flex items-center gap-2 ml-4 px-4 py-2 rounded-full border border-gray-600 
                   bg-black hover:bg-white hover:text-black transition-all duration-300"
      >
        <FontAwesomeIcon icon={faDiscord} />
        Discord
      </button>

      <button
        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 
                   bg-black hover:bg-white hover:text-black transition-all duration-300"
      >
        <FontAwesomeIcon icon={faUpload} />
        Upload
      </button>

      <button className="hidden md:flex border border-gray-600 rounded-full w-10 h-10 items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
        <FontAwesomeIcon icon={faUser} />
      </button>
    </nav>
  );
}
