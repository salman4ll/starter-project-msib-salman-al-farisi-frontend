"use client";
import React, { useState } from "react";
import Image from "next/image";
import imgBg from "@/assets/images/bg.png";
import imgLogo from "@/assets/images/logo.png";
import imageRegis from "@/assets/images/imageRegis.png";

import Link from "next/link";

export default function Register() {
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
      <div className="w-[90%] p-6 m-auto bg-white rounded-[10px] lg:max-w-3xl z-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 md:col-span-2">
            <div className="w-full mb-6">
              <Image
                alt="logo ambis kerja"
                src={imgLogo}
                width={1000}
                className="w-12"
              />
              <h1 className="text-2xl font-medium mt-5">Create an account</h1>

              <div className="flex text-xs md:text-base">
                <p className="font-normal mr-1">Already have an ccount?</p>{" "}
                <Link href="/login" className="underline">
                  Log in
                </Link>{" "}
              </div>
            </div>
            <div>
              <form action="#" method="post">
                <div className="grid grid-cols-2 gap-2">
                  <div className="col-span-2 mb-4">
                    <label
                      htmlFor="name"
                      className="text-[#666666] text-md font-normal"
                    >
                      Name
                    </label>
                    <input
                      className="appearance-none border rounded-lg w-full py-3 px-3 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Tatang Subagyo"
                    ></input>
                  </div>
                  <div className="col-span-2 mb-4">
                    <label
                      htmlFor="email"
                      className="text-[#666666] text-md font-normal"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none border rounded-lg w-full py-3 px-3 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="example@gmail.com"
                    ></input>
                  </div>
                  <div className="col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="password"
                        className="text-[#666666] text-md font-normal"
                      >
                        Password
                      </label>
                    </div>
                    <input
                      className="appearance-none border rounded-lg w-full py-3 px-3 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******"
                    />
                  </div>
                  <div className="col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="password"
                        className="text-[#666666] text-md font-normal"
                      >
                        Confirm your password
                      </label>
                    </div>
                    <input
                      className="appearance-none border rounded-lg w-full py-3 px-3 mt-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******"
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-[#666666]"
                    >
                      Use 8 or more characters with a mix of letters, numbers &
                      symbols
                    </label>
                  </div>
                  <Link href="/login" className="w-full flex justify-center bg-[#B2B2B2] hover:bg-[#666666] text-white rounded-[40px] py-3 mt-6">
                Create an account
              </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col justify-center m-auto ml-4 max-md:hidden">
            <Image alt="Image Register" src={imageRegis} width={1000}/>
          </div>
        </div>
      </div>
    </main>
  );
}
