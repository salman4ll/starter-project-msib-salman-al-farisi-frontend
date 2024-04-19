"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";

interface MenuItem {
  name: string;
  url: string;
}

const NavProfile = ({ onChangeNav }: any) => {
  const [activeNavProfile, setactiveNavProfile] = useState("InformasiUmum");

  const handleOnClick = (nav: string) => {
    setactiveNavProfile(nav);
    onChangeNav(nav);
  };

  const menu: MenuItem[] = [
    { name: "Informasi Umum", url: "InformasiUmum" },
    { name: "CV & Portofolio", url: "CvPortofolio" },
    { name: "Pendaftaran Saya", url: "PendaftaranSaya" },
    { name: "Pekerjaan Tersimpan", url: "PekerjaanTersimpan" },
  ];

  return (
    <div className="mt-8">
      <nav className="sticky space-x-4 w-full flex flex-nowrap overflow-x-auto whitespace-nowrap md:justify-center">
        {menu.map(({ name, url }, index) => (
          <button
            onClick={() => handleOnClick(url)}                      
            key={index}
            className={`inline-block pb-1 text-sm md:text-lg leading-[15.6px] border-b-2 hover:border-[#4C2A76] font-semibold text-black hover:text-[#4C2A76] ${activeNavProfile === url ? 'text-[#4C2A76] border-[#4C2A76]' : ''}`}
          >
            {name}
          </button>
        ))}        
      </nav>
    </div>
  );
};

export default NavProfile;
