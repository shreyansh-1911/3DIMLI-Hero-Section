"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
<footer className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 text-white flex justify-around items-center py-4 md:hidden z-50">
      <NavItem icon={faHome} label="Home" href="/" active />
      <NavItem icon={faCompass} label="Explore" href="/explore" />
      <NavItem icon={faShoppingCart} label="Cart" href="/cart" />
      <NavItem icon={faUser} label="Profile" href="/profile" />
    </footer>
  );
}

function NavItem({
  icon,
  label,
  href,
  active,
}: {
  icon: any;
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <Link href={href}>
      <div
        className={`flex flex-col items-center justify-center transition-all ${
          active ? "text-green-400" : "text-gray-400 hover:text-white"
        }`}
      >
        <FontAwesomeIcon icon={icon} className="text-lg mb-1" />
        <span className="text-xs">{label}</span>
      </div>
    </Link>
  );
}
