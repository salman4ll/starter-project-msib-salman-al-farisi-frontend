"use client";
import React, { useState } from "react";
import Image from "next/image";
import imgBg from "@/assets/images/bg.png";
import imgLogo from "@/assets/images/logo.png";
import googleLogo from "@/assets/images/googleLogo.png";

import Link from "next/link";

import { Icon } from "@iconify/react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="relative h-screen w-full flex flex-col">
      <Image
        alt="image background"
        src={imgBg}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="w-[90%] p-6 m-auto bg-white rounded-[10px] lg:max-w-xl z-10">
        <div className="w-full text-center">
          <Image
            alt="logo ambis kerja"
            src={imgLogo}
            width={1000}
            className="w-8 m-auto"
          />
          <h1 className="text-2xl font-medium mt-5">Log In</h1>
          <div className="flex justify-center text-xs md:text-base">
            <p className="font-normal mr-1">Don't have an account? </p>{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>{" "}
          </div>
        </div>
        <div className="w-[90%] md:w-[80%] m-auto mt-8 md:mt-10">
          <Link href="#">
            <div className="flex flex-row justify-center items-center border-[2px] border-[#333333] rounded-[40px] p-2 md:p-3 hover:bg-[#B2B2B2] hover:border-[#B2B2B2B2] hover:text-white">
              <Image
                alt="logo google"
                src={googleLogo}
                width={1000}
                className="w-[24px] mr-3"
              />
              <p className="md:font-bold font-semibold text-[14px] md:text-lg">Login With Google</p>
            </div>
          </Link>
          <div className="flex mt-6 items-center">
            <hr className="w-[100%] mr-3 border-[1px]" />
            <p className="font-bold text-xl text-[#666666]">OR</p>
            <hr className="w-[100%] ml-3 border-[1px]" />
          </div>
          <div>
            <form action="" method="post" className="mt-4">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-[#666666] text-md font-normal"
                >
                  Your Email
                </label>
                <input
                  className="appearance-none border rounded-lg w-full py-3 px-3 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                ></input>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="password"
                    className="text-[#666666] text-md font-normal"
                  >
                    Your Password
                  </label>

                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="focus:outline-none flex items-center"
                  >
                    <Icon
                      icon={showPassword ? "ri:eye-off-fill" : "ri:eye-fill"}
                      className="text-[#666666] mr-1"
                    />
                    <p className="text-[#666666]">{showPassword ? "Hide" : "Show"}</p>
                  </button>
                </div>
                <input
                  className="appearance-none border rounded-lg w-full py-3 px-3 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                />
              </div>
              <Link href="#" className="flex justify-end text-[14px] mt-2 underline">Forget your password</Link>              
              <button type="submit" className="w-full flex justify-center bg-[#B2B2B2] hover:bg-[#666666] text-white rounded-[40px] py-3 mt-6">
                Log In
              </button>
            </form>            
          </div>
        </div>
      </div>
    </main>
  );
}
