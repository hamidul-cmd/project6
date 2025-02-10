import React, { useState } from "react";
import logom from "../assets/logom.png";
import logol from "../assets/logol.png";
import logop from "../assets/logop.png";
import { Link, NavLink } from "react-router";

function Header() {
  const [showmanu, setshowmanu] = useState(false);
  const gotop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <>
      <div className="maruf bg-cover bg-center text-white px-4 pt-10 pb-5 text-[12px] bg-gray-10 font-medium leading-150 relative xll:py-3.5 xll:text-sm xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:py-4.8 xll:px-0 z-[600] max-w-wrapper m-auto">
        <div className="flex gap-1.5 w-fit xll:m-auto 3xl:gap-2.5">
          <h5>✨Discover Your Dream Property with Estatein</h5>
          <a href="" className="underline">
            Learn More
          </a>
        </div>
        <div className="p-1 rounded-full bg-buttonbg w-fit absolute right-4 bottom-4 xll:right-8 xll:bottom-3 cursor-pointer">
          <svg
            className="h-4.8 w-4.8 3xl:h-6 3xl:w-6"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.5 13.5L13.5 4.5M4.5 4.5L13.5 13.5" stroke="white" />
          </svg>
        </div>
      </div>
      <header className="z-[500] max-w-wrapper m-auto sticky top-0">
        <ul
          className={` absolute w-screen left-0 flex flex-col items-center text-white top-full transition-all ease-out z-40 duration-500 bg-gray-10 xll:hidden py-3 ${
            showmanu ? "translate-y-0" : "translate-y-[-200%] xll:translate-y-0"
          }`}
        >
          <li onClick={() => setshowmanu(!showmanu)}>
            <NavLink
              to="/"
              className="py-3 block px-5 border border-transparent rounded-lg"
              onClick={gotop}
            >
              Home
            </NavLink>
          </li>
          <li onClick={() => setshowmanu(!showmanu)}>
            <NavLink
              to="/about"
              className="py-3 block px-5 border border-transparent rounded-lg"
              onClick={gotop}
            >
              About Us
            </NavLink>
          </li>
          <li onClick={() => setshowmanu(!showmanu)}>
            <NavLink
              to="/propertis"
              className="py-3 block px-5 border border-transparent rounded-lg"
              onClick={gotop}
            >
              Properties
            </NavLink>
          </li>
          <li onClick={() => setshowmanu(!showmanu)}>
            <NavLink
              to="/service"
              className="py-3 block px-5 border border-transparent rounded-lg"
              onClick={gotop}
            >
              Services
            </NavLink>
          </li>
          <li onClick={() => setshowmanu(!showmanu)} className="xll:hidden">
            <NavLink
              to="/contact"
              className="py-3 block px-5 border border-transparent rounded-lg"
              onClick={gotop}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="bg-gray-10 px-4 py-5 flex justify-between items-center relative z-50 xll:py-3.5 xll:px-20 border-y border-gray-15 3xl:py-5 3xl:px-40.2">
          <Link to="/" onClick={gotop}>
            <img src={logom} alt="estetine logo" className="xll:hidden" />
            <img
              src={logol}
              alt="estetine logo"
              className="hidden xll:block 3xl:hidden"
            />
            <img src={logop} alt="estetine logo" className="hidden 3xl:block" />
          </Link>
          <ul className="hidden xll:flex gap-6">
            <li>
              <NavLink
                to="/"
                className="py-3 block px-5 border border-transparent rounded-lg text-white text-sm font-medium leading-150 3xl:py-3.5 3xl:text-lg 3xl:leading-150 transition-all ease-in duration-200 "
                onClick={gotop}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="py-3 block px-5 border border-transparent rounded-lg text-white text-sm font-medium leading-150 3xl:py-3.5 3xl:text-lg 3xl:leading-150 transition-all ease-in duration-200 "
                onClick={gotop}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/propertis"
                className="py-3 block px-5 border border-transparent rounded-lg text-white text-sm font-medium leading-150 3xl:py-3.5 3xl:text-lg 3xl:leading-150 transition-all ease-in duration-200 "
                onClick={gotop}
              >
                Properties
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className="py-3 block px-5 border border-transparent rounded-lg text-white text-sm font-medium leading-150 3xl:py-3.5 3xl:text-lg 3xl:leading-150 transition-all ease-in duration-200 "
                onClick={gotop}
              >
                Services
              </NavLink>
            </li>
          </ul>
          <div>
            <NavLink
              to="/contact"
              className="hidden xll:block py-3 px-5 border border-transparent rounded-lg text-white text-sm font-medium leading-150 3xl:py-3.5 3xl:text-lg 3xl:leading-150"
              onClick={gotop}
            >
              Contact Us
            </NavLink>
            <div className="xll:hidden" onClick={() => setshowmanu(!showmanu)}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082 7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5 7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125 20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5 20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
