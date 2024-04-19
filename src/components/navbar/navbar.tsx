"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { FaUserLarge } from "react-icons/fa6";
import Image from "next/image";
import logoDesa from "@/assets/images/logoType.png";
import Link from "next/link";

interface MenuItem {
  name: string;
  url: string;
}

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  const [clickedInsideProfile, setClickedInsideProfile] = useState<boolean>(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
    setNavbarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileOpen && profileRef.current && !profileRef.current.contains(event.target as Node) && !clickedInsideProfile) {
        setProfileOpen(false);
      }
      setClickedInsideProfile(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileOpen, clickedInsideProfile]);

  const handleProfileClick = () => {
    setClickedInsideProfile(true);
  };

  const menu: MenuItem[] = [
    { name: "Home", url: "/" },    
    { name: "Layanan", url: "/layanan" },
    { name: "Artikel", url: "/artikel" },
    { name: "Tentang", url: "/tentang" },
    { name: "Kontak", url: "/kontak" },
  ];

  return (
    <nav className="bg-[#C8ABD8]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleNavbar}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-[#4C2A76] hover:bg-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4C2A76]"
              aria-controls="mobile-menu"
              aria-expanded={navbarOpen ? "true" : "false"}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {navbarOpen ? (
                <RxCross1 className="block h-6 w-6" />
              ) : (
                <AiOutlineMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link href={"/"}>            
                <div className="flex flex-shrink-0 items-center">
                <Image
                    className="h-8 w-auto"
                    src={logoDesa}
                    alt="Your Company"
                />
                </div>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {menu.map(({ name, url }, index) => (
                  <Link
                    href={url}
                    key={index}
                    className={`text-[#4C2A76] rounded-[100px] px-3 py-2 text-sm font-medium ${
                      pathname === url ? "bg-[#4C2A76] text-[#ffffff] font-bold" : "hover:font-bold hover:text-white hover:bg-[#4C2A76]"
                    }`}
                    aria-current="page"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              onClick={toggleProfile}
              onMouseDown={handleProfileClick}
              className="relative rounded-full  p-1 text-[#4C2A76] hover:text-[#2a1a3e]  focus:text-[#2a1a3e] focus:ring  focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <FaUserLarge />
            </button>
            {profileOpen && (
              <div ref={profileRef} className="relative">
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                  <Link href="/profile" className={ `block px-4 py-2 text-sm text-gray-700 ${ pathname === "/profile" ? "font-bold" : ""}`} role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</Link>
                  <Link href="/login" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {navbarOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {menu.map(({ name, url }, index) => (
              <Link
                href={url}
                key={index}
                className={`text-white block rounded-md px-3 py-2 text-base font-medium ${
                  pathname === url ? "bg-[#4C2A76] text-white" : ""
                }`}
                aria-current="page"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
