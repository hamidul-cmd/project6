import React from "react";
import { Link } from "react-router";
import logom from "../assets/logom.png";
import logol from "../assets/logol.png";
import logop from "../assets/logop.png";

function Footer() {
  return (
    <>
      <footer className="max-w-wrapper m-auto">
        <section className="px-4 py-12.5 xll:p-20 xll:flex xll:justify-between 3xl:py-24.5 3xl:px-40.2">
          <div className="mb-12.5 xll:mb-0">
            <Link to="/" className="mb-5 block w-fit xll:mb-6 3xl:mb-7.5">
              <img src={logom} alt="estetine logo" className="xll:hidden" />
              <img
                src={logol}
                alt="estetine logo"
                className="hidden xll:block 3xl:hidden"
              />
              <img
                src={logop}
                alt="estetine logo"
                className="hidden 3xl:block"
              />
            </Link>
            <div className="flex gap-1.5 items-center py-3.5 px-5 border border-gray-15 rounded-lg 3xl:py-4.8 3xl:px-6 3xl:rounded-xl">
              <div>
                <svg
                  className="h-5 w-5 3xl:h-6 3xl:w-6"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.167 5.83333H15.0003V6.66667C15.0003 6.88768 15.0881 7.09964 15.2444 7.25592C15.4007 7.4122 15.6126 7.5 15.8337 7.5C16.0547 7.5 16.2666 7.4122 16.4229 7.25592C16.5792 7.09964 16.667 6.88768 16.667 6.66667V5.83333H17.5003C17.7213 5.83333 17.9333 5.74554 18.0896 5.58926C18.2459 5.43298 18.3337 5.22101 18.3337 5C18.3337 4.77899 18.2459 4.56702 18.0896 4.41074C17.9333 4.25446 17.7213 4.16667 17.5003 4.16667H16.667V3.33333C16.667 3.11232 16.5792 2.90036 16.4229 2.74408C16.2666 2.5878 16.0547 2.5 15.8337 2.5C15.6126 2.5 15.4007 2.5878 15.2444 2.74408C15.0881 2.90036 15.0003 3.11232 15.0003 3.33333V4.16667H14.167C13.946 4.16667 13.734 4.25446 13.5777 4.41074C13.4215 4.56702 13.3337 4.77899 13.3337 5C13.3337 5.22101 13.4215 5.43298 13.5777 5.58926C13.734 5.74554 13.946 5.83333 14.167 5.83333ZM17.5003 9.16667C17.2793 9.16667 17.0673 9.25446 16.9111 9.41074C16.7548 9.56702 16.667 9.77899 16.667 10V15C16.667 15.221 16.5792 15.433 16.4229 15.5893C16.2666 15.7455 16.0547 15.8333 15.8337 15.8333H4.16699C3.94598 15.8333 3.73402 15.7455 3.57774 15.5893C3.42146 15.433 3.33366 15.221 3.33366 15V7.00833L8.23366 11.9167C8.70241 12.3848 9.33782 12.6478 10.0003 12.6478C10.6628 12.6478 11.2982 12.3848 11.767 11.9167L13.8253 9.85833C13.9822 9.70141 14.0704 9.48858 14.0704 9.26667C14.0704 9.04475 13.9822 8.83192 13.8253 8.675C13.6684 8.51808 13.4556 8.42992 13.2337 8.42992C13.0117 8.42992 12.7989 8.51808 12.642 8.675L10.5837 10.7333C10.4279 10.886 10.2185 10.9715 10.0003 10.9715C9.7822 10.9715 9.57276 10.886 9.41699 10.7333L4.50866 5.83333H10.8337C11.0547 5.83333 11.2666 5.74554 11.4229 5.58926C11.5792 5.43298 11.667 5.22101 11.667 5C11.667 4.77899 11.5792 4.56702 11.4229 4.41074C11.2666 4.25446 11.0547 4.16667 10.8337 4.16667H4.16699C3.50395 4.16667 2.86807 4.43006 2.39923 4.8989C1.93038 5.36774 1.66699 6.00363 1.66699 6.66667V15C1.66699 15.663 1.93038 16.2989 2.39923 16.7678C2.86807 17.2366 3.50395 17.5 4.16699 17.5H15.8337C16.4967 17.5 17.1326 17.2366 17.6014 16.7678C18.0703 16.2989 18.3337 15.663 18.3337 15V10C18.3337 9.77899 18.2459 9.56702 18.0896 9.41074C17.9333 9.25446 17.7213 9.16667 17.5003 9.16667Z"
                    fill="#999999"
                  />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full border-none outline-none placeholder:text-sm placeholder:leading-6 placeholder:font-medium placeholder:text-gray-40 text-sm leading-6 text-gray-40 font-medium 3xl:placeholder:text-lg 3xl:placeholder:leading-6 3xl:text-lg 3xl:leading-6"
              />
              <button className="cursor-pointer">
                <svg
                  className="h-6 w-6 3xl:h-7.5 3xl:w-7.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.4274 2.5783C20.9274 2.0673 20.1874 1.8783 19.4974 2.0783L3.40742 6.7273C2.67942 6.9293 2.16342 7.5063 2.02442 8.2383C1.88242 8.9843 2.37842 9.9323 3.02642 10.3283L8.05742 13.4003C8.57342 13.7163 9.23942 13.6373 9.66642 13.2093L15.4274 7.4483C15.7174 7.1473 16.1974 7.1473 16.4874 7.4483C16.7774 7.7373 16.7774 8.2083 16.4874 8.5083L10.7164 14.2693C10.2884 14.6973 10.2084 15.3613 10.5234 15.8783L13.5974 20.9283C13.9574 21.5273 14.5774 21.8683 15.2574 21.8683C15.3374 21.8683 15.4274 21.8683 15.5074 21.8573C16.2874 21.7583 16.9074 21.2273 17.1374 20.4773L21.9074 4.5083C22.1174 3.8283 21.9274 3.0883 21.4274 2.5783Z"
                    fill="white"
                  />
                  <path
                    opacity="0.4"
                    d="M9.45139 19.1423C9.74339 19.4353 9.74339 19.9103 9.45139 20.2033L8.08539 21.5683C7.93939 21.7153 7.74739 21.7883 7.55539 21.7883C7.36339 21.7883 7.17139 21.7153 7.02539 21.5683C6.73239 21.2753 6.73239 20.8013 7.02539 20.5083L8.39039 19.1423C8.68339 18.8503 9.15839 18.8503 9.45139 19.1423ZM8.66769 15.3543C8.95969 15.6473 8.95969 16.1223 8.66769 16.4153L7.30169 17.7803C7.15569 17.9273 6.96369 18.0003 6.77169 18.0003C6.57969 18.0003 6.38769 17.9273 6.24169 17.7803C5.94869 17.4873 5.94869 17.0133 6.24169 16.7203L7.60669 15.3543C7.89969 15.0623 8.37469 15.0623 8.66769 15.3543ZM4.90649 14.1619C5.19849 14.4549 5.19849 14.9299 4.90649 15.2229L3.54049 16.5879C3.39449 16.7349 3.20249 16.8079 3.01049 16.8079C2.81849 16.8079 2.62649 16.7349 2.48049 16.5879C2.18749 16.2949 2.18749 15.8209 2.48049 15.5279L3.84549 14.1619C4.13849 13.8699 4.61349 13.8699 4.90649 14.1619Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 xll:gap-24.5">
            <div className="w-[158px] xll:w-fit">
              <h4 className="text-base font-medium leading-6 text-gray-60 mb-4 xll:text-lg xll:leading-6 xll:mb-6 3xl:text-xl 3xl:leading-6 3xl:mb-7.5">
                Home
              </h4>
              <ul className="text-white space-y-2 text-sm font-medium leading-6 xll:text-base xll:leading-6 xll:space-y-4 3xl:text-lg 3xl:leading-6 3xl:space-y-5">
                <li>
                  <a href="">Hero Section</a>
                </li>
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <a href="">Properties</a>
                </li>
                <li>
                  <a href="">Testimonials</a>
                </li>
                <li>
                  <a href="">FAQ’s</a>
                </li>
              </ul>
            </div>
            <div className="w-[158px] xll:w-fit">
              <h4 className="text-base font-medium leading-6 text-gray-60 mb-4 xll:text-lg xll:leading-6 xll:mb-6 3xl:text-xl 3xl:leading-6 3xl:mb-7.5">
                About Us
              </h4>
              <ul className="text-white space-y-2 text-sm font-medium leading-6 xll:text-base xll:leading-6 xll:space-y-4 3xl:text-lg 3xl:leading-6 3xl:space-y-5">
                <li>
                  <a href="">Our Story</a>
                </li>
                <li>
                  <a href="">Our Works</a>
                </li>
                <li>
                  <a href="">How It Works</a>
                </li>
                <li>
                  <a href="">Our Team</a>
                </li>
                <li>
                  <a href="">Our Clients</a>
                </li>
              </ul>
            </div>
            <div className="w-[158px] xll:w-fit">
              <h4 className="text-base font-medium leading-6 text-gray-60 mb-4 xll:text-lg xll:leading-6 xll:mb-6 3xl:text-xl 3xl:leading-6 3xl:mb-7.5">
                Properties
              </h4>
              <ul className="text-white space-y-2 text-sm font-medium leading-6 xll:text-base xll:leading-6 xll:space-y-4 3xl:text-lg 3xl:leading-6 3xl:space-y-5">
                <li>
                  <a href="">Portfolio</a>
                </li>
                <li>
                  <a href="">Categories</a>
                </li>
              </ul>
            </div>
            <div className="w-[158px] xll:w-fit">
              <h4 className="text-base font-medium leading-6 text-gray-60 mb-4 xll:text-lg xll:leading-6 xll:mb-6 3xl:text-xl 3xl:leading-6 3xl:mb-7.5">
                Services
              </h4>
              <ul className="text-white space-y-2 text-sm font-medium leading-6 xll:text-base xll:leading-6 xll:space-y-4 3xl:text-lg 3xl:leading-6 3xl:space-y-5">
                <li>
                  <a href="">Valuation Mastery</a>
                </li>
                <li>
                  <a href="">Strategic Marketing</a>
                </li>
                <li>
                  <a href="">Negotiation Wizardry</a>
                </li>
                <li>
                  <a href="">Closing Success</a>
                </li>
                <li>
                  <a href="">Property Management</a>
                </li>
              </ul>
            </div>
            <div className="w-[158px] xll:w-fit">
              <h4 className="text-base font-medium leading-6 text-gray-60 mb-4 xll:text-lg xll:leading-6 xll:mb-6 3xl:text-xl 3xl:leading-6 3xl:mb-7.5">
                Contact Us
              </h4>
              <ul className="text-white space-y-2 text-sm font-medium leading-6 xll:text-base xll:leading-6 xll:space-y-4 3xl:text-lg 3xl:leading-6 3xl:space-y-5">
                <li>
                  <a href="">Contact Form</a>
                </li>
                <li>
                  <a href="">Our Offices</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="px-4 py-5 xll:px-20 xll:py-3 3xl:px-40.2 3xl:py-4 bg-gray-10 xll:flex xll:items-center xll:justify-between">
          <div className="flex mb-5 justify-center items-center gap-2 xll:order-2 xll:mb-0 3xl:gap-2.5 3xl:py-2.5">
            <a
              href="https://www.facebook.com/hamidulislam.maruf.5"
              className="block bg-gray-8 p-5 rounded-full xll:p-2.5 3xl:p-3.5"
            >
              <svg
                className="h-5 w-5 3xl:h-6 3xl:w-6"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6203 3.32002H15.5003V0.14003C14.5901 0.0453769 13.6755 -0.00135428 12.7603 2.98641e-05C10.0403 2.98641e-05 8.18035 1.66003 8.18035 4.70002V7.32002H5.11035V10.88H8.18035V20H11.8603V10.88H14.9203L15.3803 7.32002H11.8603V5.05002C11.8603 4.00002 12.1403 3.32002 13.6203 3.32002Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href=""
              className="block bg-gray-8 p-5 rounded-full xll:p-2.5 3xl:p-3.5"
            >
              <svg
                className="h-5 w-5 3xl:h-6 3xl:w-6"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5585 1.66662H3.4418C3.28311 1.66442 3.12555 1.69349 2.9781 1.75219C2.83066 1.81089 2.69622 1.89805 2.58246 2.00871C2.46871 2.11937 2.37786 2.25136 2.31512 2.39713C2.25238 2.5429 2.21897 2.6996 2.2168 2.85829V17.1416C2.21897 17.3003 2.25238 17.457 2.31512 17.6028C2.37786 17.7486 2.46871 17.8805 2.58246 17.9912C2.69622 18.1019 2.83066 18.189 2.9781 18.2477C3.12555 18.3064 3.28311 18.3355 3.4418 18.3333H17.5585C17.7171 18.3355 17.8747 18.3064 18.0222 18.2477C18.1696 18.189 18.304 18.1019 18.4178 17.9912C18.5316 17.8805 18.6224 17.7486 18.6851 17.6028C18.7479 17.457 18.7813 17.3003 18.7835 17.1416V2.85829C18.7813 2.6996 18.7479 2.5429 18.6851 2.39713C18.6224 2.25136 18.5316 2.11937 18.4178 2.00871C18.304 1.89805 18.1696 1.81089 18.0222 1.75219C17.8747 1.69349 17.7171 1.66442 17.5585 1.66662ZM7.2418 15.6166H4.7418V8.11662H7.2418V15.6166ZM5.9918 7.06662C5.64702 7.06662 5.31636 6.92966 5.07256 6.68586C4.82876 6.44206 4.6918 6.1114 4.6918 5.76662C4.6918 5.42184 4.82876 5.09118 5.07256 4.84738C5.31636 4.60358 5.64702 4.46662 5.9918 4.46662C6.17488 4.44586 6.36028 4.464 6.53586 4.51986C6.71144 4.57571 6.87325 4.66803 7.01068 4.79076C7.14811 4.91348 7.25807 5.06385 7.33336 5.23202C7.40864 5.40019 7.44756 5.58237 7.44756 5.76662C7.44756 5.95087 7.40864 6.13305 7.33336 6.30122C7.25807 6.46939 7.14811 6.61976 7.01068 6.74249C6.87325 6.86521 6.71144 6.95753 6.53586 7.01338C6.36028 7.06924 6.17488 7.08738 5.9918 7.06662ZM16.2585 15.6166H13.7585V11.5916C13.7585 10.5833 13.4001 9.92495 12.4918 9.92495C12.2107 9.92701 11.937 10.0152 11.7075 10.1776C11.478 10.34 11.3039 10.5688 11.2085 10.8333C11.1433 11.0292 11.115 11.2354 11.1251 11.4416V15.6083H8.62513C8.62513 15.6083 8.62513 8.79162 8.62513 8.10829H11.1251V9.16662C11.3522 8.77254 11.6826 8.44789 12.0805 8.22762C12.4784 8.00736 12.9289 7.89983 13.3835 7.91662C15.0501 7.91662 16.2585 8.99162 16.2585 11.3V15.6166Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://x.com/mdmaruf17204871"
              className="block bg-gray-8 p-5 rounded-full xll:p-2.5 3xl:p-3.5"
            >
              <svg
                className="h-5 w-5 3xl:h-6 3xl:w-6"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8337 4.83326C18.2073 5.10501 17.5448 5.28465 16.867 5.3666C17.5821 4.93936 18.1181 4.26725 18.3753 3.47493C17.7033 3.87498 16.9676 4.15684 16.2003 4.30826C15.6874 3.75207 15.0045 3.38184 14.2585 3.25564C13.5125 3.12944 12.7458 3.2544 12.0785 3.61092C11.4112 3.96745 10.8811 4.53537 10.5714 5.22563C10.2616 5.91588 10.1897 6.68942 10.367 7.42493C9.00818 7.3562 7.67903 7.00239 6.46587 6.38648C5.25272 5.77057 4.1827 4.90634 3.32533 3.84993C3.02461 4.37507 2.86659 4.96978 2.86699 5.57493C2.86593 6.13692 3.00384 6.69044 3.26845 7.18623C3.53307 7.68202 3.91617 8.10469 4.38366 8.4166C3.84031 8.40181 3.30856 8.25601 2.83366 7.9916V8.03326C2.83773 8.82067 3.11365 9.58251 3.61475 10.1899C4.11585 10.7973 4.81137 11.213 5.58366 11.3666C5.28637 11.4571 4.97772 11.5048 4.66699 11.5083C4.4519 11.5058 4.23734 11.4862 4.02533 11.4499C4.24525 12.1273 4.67084 12.7192 5.24289 13.1434C5.81493 13.5676 6.50497 13.8029 7.21699 13.8166C6.01466 14.7627 4.53023 15.279 3.00033 15.2833C2.72177 15.2842 2.44344 15.2675 2.16699 15.2333C3.72902 16.2418 5.54934 16.7772 7.40866 16.7749C8.69174 16.7883 9.9646 16.5458 11.1529 16.0617C12.3412 15.5775 13.4212 14.8615 14.3297 13.9553C15.2381 13.0492 15.957 11.9711 16.4441 10.784C16.9313 9.59695 17.177 8.3247 17.167 7.0416C17.167 6.89993 17.167 6.74993 17.167 6.59993C17.8209 6.11227 18.3849 5.51445 18.8337 4.83326Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href=""
              className="block bg-gray-8 p-5 rounded-full xll:p-2.5 3xl:p-3.5"
            >
              <svg
                className="h-5 w-5 3xl:h-6 3xl:w-6"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6669 8.09165C19.7081 6.89886 19.4472 5.715 18.9085 4.64999C18.543 4.21299 18.0358 3.91808 17.4752 3.81665C15.1565 3.60626 12.8281 3.52002 10.5002 3.55832C8.18072 3.51829 5.86078 3.60174 3.55019 3.80832C3.09337 3.89142 2.67062 4.10569 2.33352 4.42499C1.58352 5.11665 1.50019 6.29999 1.41685 7.29999C1.29595 9.09796 1.29595 10.902 1.41685 12.7C1.44096 13.2628 1.52476 13.8215 1.66685 14.3667C1.76733 14.7875 1.97062 15.1769 2.25852 15.5C2.59791 15.8362 3.03051 16.0627 3.50019 16.15C5.29678 16.3718 7.10703 16.4637 8.91685 16.425C11.8335 16.4667 14.3919 16.425 17.4169 16.1917C17.8981 16.1097 18.3428 15.8829 18.6919 15.5417C18.9252 15.3082 19.0994 15.0226 19.2002 14.7083C19.4982 13.7938 19.6446 12.8367 19.6335 11.875C19.6669 11.4083 19.6669 8.59165 19.6669 8.09165ZM8.61685 12.375V7.21665L13.5502 9.80832C12.1669 10.575 10.3419 11.4417 8.61685 12.375Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div className="text-center text-white text-sm font-medium leading-6 space-y-2.5 xll:flex xll:gap-5 xll:space-y-0 xll:py-2.5 3xl:text-lg 3xl:leading-6 3xl:gap-[38px]  ">
            <p>@2023 Estatein. All Rights Reserved.</p>
            <a href="" className="block hover:underline">
              Terms & Conditions
            </a>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
