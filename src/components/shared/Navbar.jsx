"use client";

import Link from "next/link";
import React from "react";
import useravatar from "@/assets/user.png";
import Image from "next/image";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log("user in navbar", user);

  return (
    <div className="w-7/12 mx-auto px-4 flex justify-between items-center mt-6">
      <div></div>
      <ul className="flex items-center gap-4 text-gray-700">
        <li>
          {" "}
          <Navlink href="/">Home</Navlink>{" "}
        </li>
        <li>
          {" "}
          <Navlink href="/about">About</Navlink>{" "}
        </li>
        <li>
          {" "}
          <Link href="/career">Career</Link>{" "}
        </li>
      </ul>
      {isPending ? (
        <span className="loading loading-spinner text-primary"></span>
      ) : user ? (
        <div className="flex items-center gap-5">
          <h2>Hello, {user?.name || "Guest"}</h2>
          <Image
            src={user?.image || useravatar}
            alt="User Avatar"
            width={100}
            height={100}
            className="rounded-full w-10 h-10 object-cover"
          />
          <button
            className="btn bg-purple-500 text-white"
            onClick={async () => await authClient.signOut()}
          >
            LogOut
          </button>
        </div>
      ) : (
        <button className="btn bg-purple-500 text-white">
          {" "}
          <Link href="/login">Login</Link>{" "}
        </button>
      )}
    </div>
  );
};

export default Navbar;
