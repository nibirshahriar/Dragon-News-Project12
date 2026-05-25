"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ href, children }) => {
  const pathName = usePathname();
  console.log("pathname", pathName);

  const isActive = pathName === href;

  return (
    <Link href={href} className={isActive ? "text-pink-600" : "text-gray-600"}>
      {children}
    </Link>
  );
};

export default Navlink;
