"use client";

import Image from "next/image";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCube,
  faTags,
  faUsers,
  faHeart,
  faUpload,
  faHeadphones,
  faStar,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main
      className="relative w-full min-h-[calc(100vh-64px)] bg-black text-white overflow-hidden m-0 p-0 scrollbar-hide"
    >
      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingIcon
          icon={faCube}
          style="top-10 left-10 sm:left-16 md:left-32"
          color="text-blue-400"
          text="3D Models & Assets"
          className="flex"
        />
        <FloatingIcon
          icon={faTags}
          style="top-[50%] left-8 sm:left-16 md:left-56"
          color="text-yellow-300"
          text="Trending Deals"
          className="flex"
        />
        <FloatingIcon
          icon={faSearch}
          style="top-[40%] right-10 sm:right-20 md:right-32"
          color="text-cyan-300"
          text="Search Anything"
          className="flex"
        />

        <FloatingIcon
          icon={faUsers}
          style="top-[65%] left-10"
          color="text-green-300"
          text="Community of Creators"
          className="hidden md:flex"
        />
        <FloatingIcon
          icon={faHeart}
          style="top-[70%] left-48"
          color="text-red-400"
          text="Favorites & Likes"
          className="hidden lg:flex"
        />
        <FloatingIcon
          icon={faUpload}
          style="top-[35%] left-[75%]"
          color="text-pink-400"
          text="Upload Your Creations"
          className="hidden md:flex"
        />
        <FloatingIcon
          icon={faHeadphones}
          style="bottom-40 left-[70%]"
          color="text-purple-300"
          text="Audio & Music"
          className="hidden lg:flex"
        />
        <FloatingIcon
          icon={faStar}
          style="bottom-28 left-[35%]"
          color="text-orange-300"
          text="Top Rated Content"
          className="hidden xl:flex"
        />
      </div>

      <div
        className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-64px)] px-6 relative z-10"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight 
          max-w-[650px] w-full mx-auto min-h-[120px] md:min-h-[150px]"
        >
          <ReactTyped
            strings={[
              "Instant Payouts, Full Control, No Limits,",
              "Buy Once, Download Anytime, Keep Forever",
              "Discover, Buy, and Sell Digital Products",
              "Sell for Free, Pay Only When You Earn",
            ]}
            typeSpeed={60}
            backSpeed={40}
            backDelay={1500}
            loop
            className="inline-block"
          />
        </h1>

        <p className="text-gray-400 max-w-2xl mt-6 text-lg leading-relaxed">
          <div>
            Your one-stop digital platform for 3D models and digital creations.
          </div>
          <div>Join our community of creators and collectors today.</div>
        </p>

        <button className="mt-8 px-8 py-3 rounded-full border border-gray-500 hover:bg-white hover:text-black transition-all">
          Explore all products
        </button>
      </div>
    </main>
  );
}

/* FloatingIcon component tooltip */
function FloatingIcon({
  icon,
  style,
  color,
  text,
  className,
}: {
  icon: any;
  style: string;
  color: string;
  text: string;
  className?: string;
}) {
  return (
    <div className={`absolute ${style} group pointer-events-auto ${className}`}>
      <div
        className={`bg-[#1a1a1a] bg-opacity-60 rounded-full w-14 h-14 sm:w-16 sm:h-16
        flex items-center justify-center backdrop-blur-md border border-[#2b2e33] 
        shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white`}
      >
        <FontAwesomeIcon
          icon={icon}
          className={`${color} text-xl sm:text-2xl transition-all duration-300 group-hover:text-black`}
        />
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 -bottom-[130%] 
        opacity-0 group-hover:opacity-100 group-hover:translate-y-1 
        transition-all duration-300 text-sm text-gray-300
        bg-[#111] bg-opacity-95 w-[220px] p-4 rounded-xl border border-gray-800 shadow-2xl
        flex flex-col items-start gap-2 z-20"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <FontAwesomeIcon icon={icon} className="text-black text-sm" />
          </div>
          <h4 className="text-white font-semibold text-sm">Info</h4>
        </div>

        <p className="text-gray-400 text-xs leading-snug">{text}</p>
      </div>
    </div>
  );
}
