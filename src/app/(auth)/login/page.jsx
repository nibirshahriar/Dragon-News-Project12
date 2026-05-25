"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = (data) => {
    // e.preventDefault();
    // const formData = new FormData(e.target);
    // const email = formData.get("email");
    // const password = formData.get("password");
    // console.log({ email, password });
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="max-w-7xl mx-auto min-h-[80vh] flex justify-center items-center bg-slate-50 mt-3">
      <div className="p-4 rounded-md bg-white shadow-md w-full max-w-md">
        <h2 className="font-bold text-3xl text-center mb-4">
          Login your account
        </h2>
        <form
          onSubmit={handleSubmit(handleLoginFunc)}
          className="mt-6 space-y-4"
        >
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

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              //   name="password"
              placeholder="Enter your password"
              className="input w-full"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn bg-slate-900 text-white w-full">Login</button>
        </form>

        <p className="text-center mt-4">
          Dont have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
