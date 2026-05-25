"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFunc = async (data) => {
    // e.preventDefault();
    // const formData = new FormData(e.target);
    // const email = formData.get("email");
    // const password = formData.get("password");
    // console.log({ email, password });
    console.log(data);
    const { email, name, photoUrl, password } = data;
    console.log(email, name, photoUrl, password);

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photoUrl,
      callbackURL: "/",
    });
    console.log("data and error", res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Registration successful! You can now log in.");
    }
  };
  console.log(errors);
  return (
    <div className="max-w-7xl mx-auto min-h-[80vh] flex justify-center items-center bg-slate-50 mt-3">
      <div className="p-4 rounded-md bg-white shadow-md w-full max-w-md">
        <h2 className="font-bold text-3xl text-center mb-4">
          Register your account
        </h2>

        <form
          onSubmit={handleSubmit(handleRegisterFunc)}
          className="mt-6 space-y-4"
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              //   name="name"
              placeholder="Enter your name"
              className="input w-full"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              //   name="photoUrl"
              placeholder="Enter photo URL"
              className="input w-full"
              {...register("photoUrl", { required: "Photo URL is required" })}
            />
            {errors.photoUrl && (
              <p className="text-red-500">{errors.photoUrl.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              //   name="email"
              placeholder="Enter your email"
              className="input w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              //   name="password"
              placeholder="Enter your password"
              className="input w-full"
              {...register("password", { required: "Password is required" })}
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn bg-slate-900 text-white w-full">
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
