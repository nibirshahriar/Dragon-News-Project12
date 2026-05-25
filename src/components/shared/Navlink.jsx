"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
        isActive
          ? "bg-pink-600 text-white"
          : "text-gray-600 hover:bg-pink-100 hover:text-pink-600"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navlink;
