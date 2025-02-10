import React, { useState } from "react";
import Journey from "../components/Journey";
import abouthero from "../assets/abouthero.png";
import aboutherolp from "../assets/aboutherolp.png";
import aboutheropc from "../assets/aboutheropc.png";
import AboutTittle from "../components/AboutTittle";
import RatingBox from "../components/RatingBox";
import Achivment from "../components/Achivment";
import Experience from "../components/Experience";
import Team from "../components/Team";
import ClientSlider from "../components/ClientSlider";
import Bottom from "../components/Bottom";

function About() {
  const clientData = [
    {
      duration: "Since 2019",
      name: "ABC Corporation",
      demant: "Commercial Real Estate",
      catagory: "Luxury Home Development",
      says: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      duration: "Since 2018",
      name: "GreenTech Enterprises",
      demant: "Commercial Real Estate",
      catagory: "Retail Space",
      says: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
    {
      duration: "Since 2019",
      name: "ABC Corporation",
      demant: "Commercial Real Estate",
      catagory: "Luxury Home Development",
      says: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      duration: "Since 2018",
      name: "GreenTech Enterprises",
      demant: "Commercial Real Estate",
      catagory: "Retail Space",
      says: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
    {
      duration: "Since 2019",
      name: "ABC Corporation",
      demant: "Commercial Real Estate",
      catagory: "Luxury Home Development",
      says: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      duration: "Since 2018",
      name: "GreenTech Enterprises",
      demant: "Commercial Real Estate",
      catagory: "Retail Space",
      says: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
    {
      duration: "Since 2019",
      name: "ABC Corporation",
      demant: "Commercial Real Estate",
      catagory: "Luxury Home Development",
      says: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      duration: "Since 2018",
      name: "GreenTech Enterprises",
      demant: "Commercial Real Estate",
      catagory: "Retail Space",
      says: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
    {
      duration: "Since 2019",
      name: "ABC Corporation",
      demant: "Commercial Real Estate",
      catagory: "Luxury Home Development",
      says: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      duration: "Since 2018",
      name: "GreenTech Enterprises",
      demant: "Commercial Real Estate",
      catagory: "Retail Space",
      says: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
    {
      duration: "Since 2019",
      name: "ABC Corporation",
      demant: "Commercial Real Estate",
      catagory: "Luxury Home Development",
      says: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      duration: "Since 2018",
      name: "GreenTech Enterprises",
      demant: "Commercial Real Estate",
      catagory: "Retail Space",
      says: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
  ];
  let [current, setcurent] = useState(0);
  let previse = () => {
    if (current === 0) setcurent(clientData.length - 3);
    else setcurent(current - 1);
  };
  let next = () => {
    if (current === clientData.length - 3) setcurent(0);
    else setcurent(current + 1);
  };
  return (
    <>
      <section className="hero px-4 pt-12.5 pb-20 xll:pt-16.5 xll:pb-24.6 xll:px-20 3xl:pt-24.5 3xl:pb-36.5 3xl:px-36.6 xll:flex xll:justify-between xll:items-center">
        <div className="about__hero__img bg-center bg-cover border border-gray-15 rounded-xl mb-10 xll:order-2 xll:mb-0">
          <img src={abouthero} alt="" className="block xll:hidden h-[310px]" />
          <img
            src={aboutherolp}
            alt=""
            className="hidden xll:block 3xl:hidden"
          />
          <img src={aboutheropc} alt="" className="hidden 3xl:block" />
        </div>
        <div className="about__hero__text xll:w-[610px] 3xl:w-[775px]">
          <section className="relative mb-10 xll:mb-12.5 3xl:mb-20">
            <h2 className="text-[28px] font-semibold leading-150 mb-1.5 xll:text-[38px] xll:mb-2.5 text-white 3xl:text-5xl 3xl:leading-150 3xl:mb-3.5">
              Our Journey
            </h2>
            <p className="text-sm leading-150 font-medium text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 3xl:pr-5">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we've
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
            <div className="absolute top-[-19px] left-[-8px] xll:left-[-10px] xll:top-[-24px]">
              <svg
                className="h-5 w-[45px] xll:h-6 xll:w-[54px] 3xl:h-7.5 3xl:w-[68px]"
                viewBox="0 0 69 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M15 30.0166C23.2843 30.0166 30 23.3009 30 15.0166C30 6.73233 23.2843 0.0166836 15 0.0166836C6.71573 0.0166836 0 6.73233 0 15.0166C0 23.3009 6.71573 30.0166 15 30.0166Z"
                    fill="#666666"
                  />
                  <path
                    d="M0 45C8.28427 45 15 38.2843 15 30C15 21.7157 8.28427 15 0 15C-8.28427 15 -15 21.7157 -15 30C-15 38.2843 -8.28427 45 0 45Z"
                    fill="#141414"
                  />
                  <path
                    d="M30 45C38.2843 45 45 38.2843 45 30C45 21.7157 38.2843 15 30 15C21.7157 15 15 21.7157 15 30C15 38.2843 21.7157 45 30 45Z"
                    fill="#141414"
                  />
                  <path
                    d="M0 15C8.28427 15 15 8.28427 15 0C15 -8.28427 8.28427 -15 0 -15C-8.28427 -15 -15 -8.28427 -15 0C-15 8.28427 -8.28427 15 0 15Z"
                    fill="#141414"
                  />
                  <path
                    d="M30 15C38.2843 15 45 8.28427 45 0C45 -8.28427 38.2843 -15 30 -15C21.7157 -15 15 -8.28427 15 0C15 8.28427 21.7157 15 30 15Z"
                    fill="#141414"
                  />
                </g>
                <g>
                  <path
                    d="M45 24.01C49.9706 24.01 54 19.9805 54 15.01C54 10.0394 49.9706 6.01001 45 6.01001C40.0294 6.01001 36 10.0394 36 15.01C36 19.9805 40.0294 24.01 45 24.01Z"
                    fill="#333333"
                  />
                  <path
                    d="M36 33C40.9706 33 45 28.9706 45 24C45 19.0294 40.9706 15 36 15C31.0294 15 27 19.0294 27 24C27 28.9706 31.0294 33 36 33Z"
                    fill="#141414"
                  />
                  <path
                    d="M54 33C58.9706 33 63 28.9706 63 24C63 19.0294 58.9706 15 54 15C49.0294 15 45 19.0294 45 24C45 28.9706 49.0294 33 54 33Z"
                    fill="#141414"
                  />
                  <path
                    d="M36 15C40.9706 15 45 10.9706 45 6C45 1.02944 40.9706 -3 36 -3C31.0294 -3 27 1.02944 27 6C27 10.9706 31.0294 15 36 15Z"
                    fill="#141414"
                  />
                  <path
                    d="M54 15C58.9706 15 63 10.9706 63 6C63 1.02944 58.9706 -3 54 -3C49.0294 -3 45 1.02944 45 6C45 10.9706 49.0294 15 54 15Z"
                    fill="#141414"
                  />
                </g>
                <g>
                  <path
                    d="M64.2 19.2046C66.5196 19.2046 68.4 17.3242 68.4 15.0046C68.4 12.6851 66.5196 10.8047 64.2 10.8047C61.8804 10.8047 60 12.6851 60 15.0046C60 17.3242 61.8804 19.2046 64.2 19.2046Z"
                    fill="#333333"
                  />
                  <path
                    d="M59.9998 23.4C62.3194 23.4 64.1998 21.5196 64.1998 19.2C64.1998 16.8804 62.3194 15 59.9998 15C57.6802 15 55.7998 16.8804 55.7998 19.2C55.7998 21.5196 57.6802 23.4 59.9998 23.4Z"
                    fill="#141414"
                  />
                  <path
                    d="M68.3997 23.4C70.7193 23.4 72.5997 21.5196 72.5997 19.2C72.5997 16.8804 70.7193 15 68.3997 15C66.0801 15 64.1997 16.8804 64.1997 19.2C64.1997 21.5196 66.0801 23.4 68.3997 23.4Z"
                    fill="#141414"
                  />
                  <path
                    d="M59.9998 15C62.3194 15 64.1998 13.1196 64.1998 10.8C64.1998 8.4804 62.3194 6.6 59.9998 6.6C57.6802 6.6 55.7998 8.4804 55.7998 10.8C55.7998 13.1196 57.6802 15 59.9998 15Z"
                    fill="#141414"
                  />
                  <path
                    d="M68.3997 15C70.7193 15 72.5997 13.1196 72.5997 10.8C72.5997 8.4804 70.7193 6.6 68.3997 6.6C66.0801 6.6 64.1997 8.4804 64.1997 10.8C64.1997 13.1196 66.0801 15 68.3997 15Z"
                    fill="#141414"
                  />
                </g>
              </svg>
            </div>
          </section>
          <RatingBox />
        </div>
      </section>
      <section className="values px-4 xll:px-20 3xl:px-36.6 xll:flex items-center xll:justify-between">
        <div className="mb-10 xll:mb-0 xll:w-[413px] 3xl:w-[517px]">
          <AboutTittle
            tittle="Our Values"
            pera="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          />
        </div>
        <div className="p-6 bg-gray-8 border border-gray-15 rounded-xl shadow-ss1 grid grid-cols-1 gap-10 xll:p-12.5 3xl:p-14.5 xll:grid-cols-2 xll:gap-[48px] 3xl:gap-14.5 xll:w-[807px] relative before:h-[1px] before:w-[707px] before:absolute before:top-[50%] before:left-12.5 before:bg-gray-15 before:hidden xll:before:block 3xl:w-[999px] 3xl:before:w-[879px]">
          <div className="relative before:absolute before:h-[1px] before:w-full before:left-0 before:bottom-[-20px] before:bg-gray-15 xll:before:top-0 xll:before:left-full xll:before:h-full xll:before:w-[1px] xll:before:translate-x-6">
            <div className="flex items-center gap-2 mb-3.5 xll:gap-2.5 xll:mb-4 3xl:gap-3.5 3xl:mb-5">
              <div className="svg p-4 rounded-full border border-Purple-60 xll:p-4.8 3xl:p-6">
                <svg
                  className="h-5 w-5 xll:h-6 xll:w-6 3xl:h-7.5 3xl:w-7.5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.78735 1.21068C9.23569 0.132735 10.7627 0.132735 11.2111 1.21068L13.2931 6.2164L18.6972 6.64964C19.8609 6.74293 20.3328 8.19522 19.4461 8.95473L15.3288 12.4817L16.5867 17.7551C16.8576 18.8908 15.6222 19.7883 14.6259 19.1798L9.99921 16.3538L5.37256 19.1798C4.37624 19.7883 3.14084 18.8908 3.41173 17.7551L4.66964 12.4817L0.552299 8.95473C-0.334341 8.19523 0.137532 6.74293 1.30127 6.64964L6.70536 6.2164L8.78735 1.21068Z"
                    fill="#A685FA"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold leading-150 text-white xll:text-xl xll:leading-150 3xl:text-2xl 3xl:leading-150">
                Trust
              </h3>
            </div>
            <p className="text-sm font-medium leading-150 text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
              Trust is the cornerstone of every successful real estate
              transaction.
            </p>
          </div>
          <div className="relative before:absolute before:h-[1px] before:w-full before:left-0 before:bottom-[-20px] before:bg-gray-15 xll:before:hidden">
            <div className="flex items-center gap-2 mb-3.5 xll:gap-2.5 xll:mb-4 3xl:gap-3.5 3xl:mb-5">
              <div className="svg p-4 rounded-full border border-Purple-60 xll:p-4.8 3xl:p-6">
                <svg
                  className="h-5 w-5 xll:h-6 xll:w-6 3xl:h-7.5 3xl:w-7.5"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7003 0.805289C11.8917 0.721642 12.1094 0.721642 12.3008 0.805289C16.0197 2.43011 19.5442 4.41637 22.83 6.71956C23.0678 6.88623 23.188 7.1752 23.1386 7.46135C23.0892 7.7475 22.879 7.97941 22.5991 8.05667C21.9142 8.24573 21.2352 8.44935 20.5623 8.66635C17.8312 9.54714 15.2023 10.6554 12.6976 11.9688L12.6944 11.9705C12.5808 12.0301 12.4675 12.09 12.3545 12.1504C12.1336 12.2684 11.8684 12.2684 11.6476 12.1504C11.5334 12.0895 11.4191 12.0289 11.3044 11.9688C10.0659 11.3193 8.79707 10.7201 7.50049 10.1736V9.94995C7.50049 9.8186 7.56791 9.70205 7.67222 9.63885C9.17734 8.727 10.7299 7.88565 12.3252 7.11936C12.6986 6.94002 12.8559 6.49195 12.6765 6.11858C12.4972 5.7452 12.0491 5.58791 11.6758 5.76725C10.0365 6.55463 8.44134 7.41909 6.89498 8.35592C6.4416 8.63059 6.13681 9.08014 6.03656 9.58377C5.18164 9.25491 4.31548 8.9486 3.43878 8.66588C2.76595 8.44889 2.08693 8.24571 1.40203 8.05666C1.12211 7.9794 0.911949 7.74749 0.862528 7.46134C0.813107 7.17519 0.933312 6.88622 1.1711 6.71955C4.45694 4.41636 7.98146 2.43011 11.7003 0.805289Z"
                    fill="#A685FA"
                  />
                  <path
                    d="M13.0614 13.4734C15.5002 12.1703 18.0626 11.0687 20.7263 10.1906C20.8605 11.6054 20.9462 13.0343 20.9818 14.4755C20.9894 14.7847 20.8064 15.0669 20.5209 15.1861C17.6698 16.3764 14.9579 17.834 12.4164 19.5277C12.1646 19.6955 11.8365 19.6955 11.5846 19.5277C9.04316 17.834 6.33122 16.3764 3.48008 15.1861C3.19465 15.0669 3.01165 14.7847 3.01927 14.4755C3.05478 13.0342 3.1405 11.6052 3.27476 10.1903C4.19576 10.4938 5.10464 10.8242 6.00049 11.1803V12.4507C5.55214 12.71 5.25049 13.1948 5.25049 13.75C5.25049 14.2453 5.49057 14.6846 5.86071 14.9577C5.77119 15.3383 5.63871 15.7108 5.46326 16.0675C5.91595 16.2811 6.36477 16.5017 6.80959 16.7289C7.06292 16.2137 7.24661 15.6729 7.36063 15.1207C7.88498 14.887 8.25049 14.3612 8.25049 13.75C8.25049 13.1948 7.94884 12.71 7.50049 12.4507V11.8059C8.67189 12.3177 9.81933 12.8743 10.9407 13.4734C11.6032 13.8274 12.3988 13.8274 13.0614 13.4734Z"
                    fill="#A685FA"
                  />
                  <path
                    d="M4.46271 17.4623C4.88184 17.0432 5.21551 16.5711 5.46326 16.0675C5.91595 16.2811 6.36477 16.5017 6.80959 16.7289C6.49103 17.3768 6.06213 17.9842 5.52337 18.523C5.23048 18.8158 4.7556 18.8158 4.46271 18.523C4.16982 18.2301 4.16982 17.7552 4.46271 17.4623Z"
                    fill="#A685FA"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold leading-150 text-white xll:text-xl xll:leading-150 3xl:text-2xl 3xl:leading-150">
                Excellence
              </h3>
            </div>
            <p className="text-sm font-medium leading-150 text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
              We set the bar high for ourselves. From the properties we list to
              the services we provide.
            </p>
          </div>
          <div className="relative before:absolute before:h-[1px] before:w-full before:left-0 before:bottom-[-20px] before:bg-gray-15 xll:before:top-0 xll:before:left-full xll:before:h-full xll:before:w-[1px] xll:before:translate-x-6">
            <div className="flex items-center gap-2 mb-3.5 xll:gap-2.5 xll:mb-4 3xl:gap-3.5 3xl:mb-5">
              <div className="svg p-4 rounded-full border border-Purple-60 xll:p-4.8 3xl:p-6">
                <svg
                  className="h-5 w-5 xll:h-6 xll:w-6 3xl:h-7.5 3xl:w-7.5"
                  viewBox="0 0 22 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25 3.75C7.25 1.67893 8.92893 0 11 0C13.0711 0 14.75 1.67893 14.75 3.75C14.75 5.82107 13.0711 7.5 11 7.5C8.92893 7.5 7.25 5.82107 7.25 3.75Z"
                    fill="#A685FA"
                  />
                  <path
                    d="M14.75 6.75C14.75 5.09315 16.0931 3.75 17.75 3.75C19.4069 3.75 20.75 5.09315 20.75 6.75C20.75 8.40685 19.4069 9.75 17.75 9.75C16.0931 9.75 14.75 8.40685 14.75 6.75Z"
                    fill="#A685FA"
                  />
                  <path
                    d="M1.25 6.75C1.25 5.09315 2.59315 3.75 4.25 3.75C5.90685 3.75 7.25 5.09315 7.25 6.75C7.25 8.40685 5.90685 9.75 4.25 9.75C2.59315 9.75 1.25 8.40685 1.25 6.75Z"
                    fill="#A685FA"
                  />
                  <path
                    d="M5.30986 12.1175C6.50783 10.2444 8.60835 9 11 9C13.3919 9 15.4927 10.2447 16.6906 12.1182C17.5187 13.4134 17.877 14.9752 17.709 16.4979C17.6827 16.7359 17.5444 16.947 17.3368 17.0662C15.4694 18.1376 13.3051 18.75 11 18.75C8.69492 18.75 6.53059 18.1376 4.66325 17.0662C4.45559 16.947 4.3173 16.7359 4.29103 16.4979C4.12293 14.9749 4.48141 13.4129 5.30986 12.1175Z"
                    fill="#A685FA"
                  />
                  <path
                    d="M4.08228 11.2537C4.07024 11.2722 4.05827 11.2907 4.04638 11.3093C3.08091 12.8189 2.63908 14.6167 2.77471 16.389C2.16667 16.2967 1.5767 16.1481 1.01043 15.9487L0.89547 15.9082C0.685759 15.8343 0.539227 15.6439 0.521591 15.4222L0.511923 15.3007C0.504017 15.2014 0.5 15.1011 0.5 15C0.5 12.9851 2.08905 11.3414 4.08228 11.2537Z"
                    fill="#A685FA"
                  />
                  <path
                    d="M19.2256 16.389C19.3612 14.617 18.9196 12.8196 17.9545 11.3102C17.9424 11.2913 17.9303 11.2725 17.9181 11.2537C19.9111 11.3416 21.5 12.9853 21.5 15C21.5 15.1011 21.496 15.2014 21.4881 15.3007L21.4784 15.4222C21.4608 15.6439 21.3142 15.8343 21.1045 15.9082L20.9896 15.9487C20.4234 16.1481 19.8336 16.2966 19.2256 16.389Z"
                    fill="#A685FA"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold leading-150 text-white xll:text-xl xll:leading-150 3xl:text-2xl 3xl:leading-150">
                Client-Centric
              </h3>
            </div>
            <p className="text-sm font-medium leading-150 text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
              Your dreams and needs are at the center of our universe. We
              listen, understand.
            </p>
          </div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-3.5 xll:gap-2.5 xll:mb-4 3xl:gap-3.5 3xl:mb-5">
              <div className="svg p-4 rounded-full border border-Purple-60 xll:p-4.8 3xl:p-6">
                <svg
                  className="h-5 w-5 xll:h-6 xll:w-6 3xl:h-7.5 3xl:w-7.5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.78735 1.21068C9.23569 0.132735 10.7627 0.132735 11.2111 1.21068L13.2931 6.2164L18.6972 6.64964C19.8609 6.74293 20.3328 8.19522 19.4461 8.95473L15.3288 12.4817L16.5867 17.7551C16.8576 18.8908 15.6222 19.7883 14.6259 19.1798L9.99921 16.3538L5.37256 19.1798C4.37624 19.7883 3.14084 18.8908 3.41173 17.7551L4.66964 12.4817L0.552299 8.95473C-0.334341 8.19523 0.137532 6.74293 1.30127 6.64964L6.70536 6.2164L8.78735 1.21068Z"
                    fill="#A685FA"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold leading-150 text-white xll:text-xl xll:leading-150 3xl:text-2xl 3xl:leading-150">
                Our Commitment
              </h3>
            </div>
            <p className="text-sm font-medium leading-150 text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
              We are dedicated to providing you with the highest level of
              service, professionalism.
            </p>
          </div>
        </div>
      </section>
      <section className="achivment px-4 xll:px-20 3xl:px-36.6 py-20 xll:py-24.6 3xl:py-36.5">
        <div className="mb-10 xll:mb-14.5 3xl:mb-20">
          <AboutTittle
            tittle="Our Achievements"
            pera="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          />
        </div>
        <div className="grid grid-cols-1 gap-5 xll:grid-cols-3 xll:gap-7.5 3xl:gap-10">
          <Achivment />
        </div>
      </section>
      <section className="px-4 xll:px-20 3xl:px-36.6">
        <div className="mb-10 xll:mb-14.5 3xl:mb-20">
          <AboutTittle
            tittle="Navigating the Estatein Experience"
            pera="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
          />
        </div>
        <div className="grid grid-cols-1 gap-7.5 xll:grid-cols-3 xll:gap-10 xll:gap-x-5 3xl:gap-y-12.5 3xl:gap-x-7.5">
          <Experience />
        </div>
      </section>
      <section className="team px-4 xll:px-20 3xl:px-36.6 py-20 xll:py-24.6 3xl:py-36.5">
        <div className="mb-10 xll:mb-14.5 3xl:mb-20">
          <AboutTittle
            tittle="Meet the Estatein Team"
            pera="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
          />
        </div>
        <div className="grid grid-cols-1 gap-5 xll:grid-cols-4 3xl:gap-7.5">
          <Team />
        </div>
      </section>
      <section className="client px-4 xll:px-20 3xl:px-36.6 pb-20 xll:pb-24.6 3xl:pb-36.5">
        <div className="mb-10 xll:mb-14.5 3xl:mb-20">
          <AboutTittle
            tittle="Our Valued Clients"
            pera="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
          />
        </div>
        <div className="slider__wrapper relative overflow-x-hidden h-[459px] xll:h-[420px] 3xl:h-[500px]">
          <div
            className="absolute top-0 left-0 transition-all ease-linear duration-300"
            style={{
              transform: `translatex(-${current * 810}px)`,
            }}
          >
            <ClientSlider />
          </div>
        </div>
        <Bottom
          next={next}
          previse={previse}
          number={current}
          totall={clientData.length}
        />
      </section>
      <Journey />
    </>
  );
}

export default About;
