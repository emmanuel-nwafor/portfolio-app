import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import logo from "/src/assets/logo.png";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <>
      <div id="home"></div>

      <div className="flex shadow-lg items-center justify-evenly bg-transparent backdrop-blur-xl h-[100px] ">
        <img src={logo} alt="" className=" h-[100px] " />

        {/* <h1 className="text-blue-50 font-extrabold text-[30px] ">ECN</h1> */}

        <button onClick={toggleDropdown}>
          <svg
            className={` transition-all w-8 h-10 ml-2 transform md:hidden  ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div className="flex justify-evenly max-md:hidden ">
          <Link
            to="/"
            className="hover:underline hover:text-slate-400 text-blue-50 m-[10px]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:underline hover:text-slate-400 text-blue-50 m-[10px]"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:underline hover:text-slate-400 text-blue-50 m-[10px]"
          >
            Projects
          </Link>
          <a
            href="#contact"
            to="/contact"
            className="hover:underline hover:text-slate-400 text-blue-50 m-[10px]"
          >
            Contact
          </a>
        </div>
        <a href="mailto:echinecherem729@gmail.com">
          {" "}
          <button className=" hover:text-white hover:bg-slate-600 transition-all pl-10 pr-10 rounded-lg pb-4 pt-4 bg-slate-500 max-md:hidden">
            Contact
          </button>
        </a>
      </div>

      {isOpen && (
        <div
          className="max-md:m-[30px] max-md:flex absolute right-0 z-10 mt-2 max-md:h-[150px] 
         origin-top-right bg-blue-100 border border-gray-200 rounded-md shadow-lg"
        >
          <div className="">
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-500"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-500"
            >
              Projects
            </Link>
            <a
              href="#contact"
              className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-500"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
