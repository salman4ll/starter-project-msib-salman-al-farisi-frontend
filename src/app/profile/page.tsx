"use client"
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import { FaCircleUser } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import NavProfile from "@/components/navbar/navProfile";
import InformasiUmum from "@/components/profile/InformasiUmum";
import CvPortofolio from "@/components/profile/CvPortofolio";
import PekerjaanTersimpan from "@/components/profile/PekerjaanTersimpang";
import PendaftaranSaya from "@/components/profile/PendaftaranSaya";

export default function Profile() {
  const [navselectedNav, setnavselectedNav] = useState("InformasiUmum");

  const handleChangeNav = (Nav: any) => {
    setnavselectedNav(Nav);
  };
  return (
    <>
      <Navbar />
      <main className="mt-12 w-[80%] m-auto">
        <div className="rounded-lg border p-4 m-auto">
          <div className="w-[98%] p-4 bg-[#c8abd860] rounded-md">
            <div className="grid grid-cols-12">
              <div className="row-span-2 max-md:col-span-2 mr-4">
                <FaCircleUser className="text-4xl flex flex-col h-full justify-center m-auto" />
              </div>
              <div className="col-span-9 md:col-span-11 flex">
                <h1 className="font-semibold mr-2">Salman Al-Farisi</h1>
                <button>
                  <FiEdit3 className="text-[#4C2A76] stroke-[3px] text-xl" />
                </button>
              </div>
              <div className="col-span-9 md:col-span-11">
                <span className="text-sm text-[#666666]">
                  Software Engineering Technology student at IPB University |
                  Fullstack Web Development at PT Otak kanan
                </span>
              </div>
            </div>
          </div>
        </div>
        <NavProfile
          onChangeNav={handleChangeNav}
          navselectedNav={navselectedNav}
        />

        {/* Tampilkan komponen layanan berdasarkan kategori yang dipilih */}
      {navselectedNav === "InformasiUmum" && <InformasiUmum />}      
      {navselectedNav === "CvPortofolio" && <CvPortofolio />}      
      {navselectedNav === "PendaftaranSaya" && <PendaftaranSaya />}      
      {navselectedNav === "PekerjaanTersimpan" && <PekerjaanTersimpan />}      
      </main>
    </>
  );
}
