import Link from "next/link";
import React from "react";
import useravatar from "@/assets/user.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between items-center mt-6">
      <div></div>
      <ul className="flex items-center gap-4 text-gray-700">
        <li>
          {" "}
          <Link href="/">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/about">About</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/career">Career</Link>{" "}
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Image src={useravatar} alt="User Avatar" width={40} height={40} />
        <button className="btn bg-purple-500 text-white">
          {" "}
          <Link href="/login">Login</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
