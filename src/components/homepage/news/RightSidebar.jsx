"use client";
import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import swimmingImg from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playgroundImg from "@/assets/playground.png";
import bg from "@/assets/bg.png";
import { authClient } from "@/lib/auth-client";

const RightSidebar = () => {
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGithubLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="space-y-8">
      {/* Login Section */}
      <div>
        <h2 className="font-bold text-2xl mb-4">Login With</h2>

        <div className="flex flex-col gap-4">
          <button
            className="btn border-blue-500 text-blue-500 bg-white hover:bg-blue-50"
            onClick={handleGoogleLogin}
          >
            <FaGoogle />
            Login with Google
          </button>

          <button
            className="btn bg-black text-white hover:bg-gray-800"
            onClick={handleGithubLogin}
          >
            <FaGithub />
            Login with Github
          </button>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h2 className="font-bold text-2xl mb-4">Find Us On</h2>

        <div className="join join-vertical w-full">
          <button className="btn join-item justify-start">
            <FaFacebookF className="text-blue-600" />
            Facebook
          </button>

          <button className="btn join-item justify-start">
            <FaTwitter className="text-sky-500" />
            Twitter
          </button>

          <button className="btn join-item justify-start">
            <FaInstagram className="text-pink-500" />
            Instagram
          </button>
        </div>
      </div>

      {/* Q-Zone */}
      <div className="bg-gray-100 p-4 rounded-xl">
        <h2 className="font-bold text-2xl mb-4">Q-Zone</h2>

        <div className="space-y-4">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <Image
              src={swimmingImg}
              alt="Swimming"
              width={500}
              height={300}
              className="rounded-lg w-full h-40 object-cover"
            />
          </div>

          <div className="bg-white p-3 rounded-lg shadow-sm">
            <Image
              src={classImg}
              alt="Class"
              width={500}
              height={300}
              className="rounded-lg w-full h-40 object-cover"
            />
          </div>

          <div className="bg-white p-3 rounded-lg shadow-sm">
            <Image
              src={playgroundImg}
              alt="Play Ground"
              width={500}
              height={300}
              className="rounded-lg w-full h-40 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Banner */}
      <div>
        <Image
          src={bg}
          alt="Banner"
          width={600}
          height={800}
          className="rounded-xl w-full h-auto"
        />
      </div>
    </div>
  );
};

export default RightSidebar;
