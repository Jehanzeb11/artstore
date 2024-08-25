"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.svg';
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const handleClose = (route) => {
   setTimeout(() => {
      setShow(false);
    }, 300);
  };
  
  return (
    <header className="w-full flex justify-center items-center p-3 h-fit fixed top-0 z-40">

<Image src={logo} alt="logo" width={1000} height={1000} className="w-10 h-10 sm:hidden block" />

    <div className="w-full flex justify-center items-center">
      <nav className="sm:flex hidden p-3 bg-white justify-between items-center gap-6 rounded-xl backdrop-blur-xl bg-opacity-20 text-xl font-medium">
        <Image src={logo} alt="logo" width={1000} height={1000} className="w-10 h-10" />
        <ul className="flex gap-4">
          <li className="hover:text-primary text-gray-300 cursor-pointer transition-colors duration-300 ease-in-out">Home</li>
          <li className="hover:text-primary text-gray-300 cursor-pointer transition-colors duration-300 ease-in-out">About</li>
          <li className="hover:text-primary text-gray-300 cursor-pointer transition-colors duration-300 ease-in-out">Portfolio</li>
          <li className="hover:text-primary text-gray-300 cursor-pointer transition-colors duration-300 ease-in-out">Contact</li>
        </ul>
      </nav>
    </div>


    <button className="sm:hidden block p-2 rounded-full bg-white backdrop-blur-xl bg-opacity-20" onClick={() => setShow(true)}>
            <RiMenu3Fill color="#13AFF0" size={28} />
          </button>

    {show && (
        <div className="fixed z-50">
          <div
            className="fixed z-40 bg-gray-950 top-0 left-0 w-full h-screen opacity-35"
            onClick={() => setShow(false)}
          ></div>
          <div
            className={`fixed z-50 right-0 top-0 ${show ? "swipeToLeft" : "swipeToRight"
              } w-3/4 h-screen bg-white backdrop-blur-xl bg-opacity-20 p-3`}
          >
            <div className="flex justify-end">
              <button
                className="lg:hidden block text-primary"
                onClick={() => setShow(false)}
              >
                <IoCloseSharp
                  size={30}
                  className={show ? "block" : "hidden"}
                />
              </button>
            </div>
            <div className="overflow-y-scroll h-full">
              <ul className="text-white text-center mt-12 gap-8 text-2xl flex justify-center flex-col items-center font-semibold">
                <li
                  onClick={() => handleClose("")}
                  className={`hover:text-gray-900 transition-all ease-in-out cursor-pointer duration-500 text-primary`}
                >
                  Home
                </li>
                <li
                  onClick={() => handleClose("about")}
                  className={`hover:text-gray-900 transition-all ease-in-out cursor-pointer duration-500 text-primary`}
                >
                  About
                </li>
                <li
                  onClick={() => setShowMenuMobile(!showMenuMobile)}
                  className={`hover:text-gray-900 flex gap-2 items-end transition-all ease-in-out cursor-pointer duration-500 text-primary`}
                >
                  Services 
                </li>

                <li
                  onClick={()=>handleClose("our-packages")}
                  className={`hover:text-gray-900 transition-all ease-in-out cursor-pointer duration-500 text-primary`}
                >
                  Our Packages
                </li>
                <li
                  onClick={() => handleClose("contact")}
                  className={`hover:text-gray-900 transition-all ease-in-out cursor-pointer duration-500 text-primary`}
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;