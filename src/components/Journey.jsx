import React from "react";
import { Link } from "react-router";
import jar1p from "../assets/jar1p.png";
import jar2p from "../assets/jar2p.png";
import jar1l from "../assets/jar1l.png";
import jar2l from "../assets/jar2l.png";
import jar1pc from "../assets/jar1pc.png";
import jar2pc from "../assets/jar2pc.png";

function Journey() {
  return (
    <>
      <section className="relative px-4 py-12.5 border-y border-gray-15 xll:px-20 xll:py-14.5 3xl:px-36.6 3xl:py-24.5 overflow-hidden">
        <div className="absolute top-0 left-0 z-10 xll:top-[60px]">
          <img src={jar1p} alt="" className="block xll:hidden" />
          <img src={jar1l} alt="" className="hidden xll:block 3xl:hidden" />
          <img src={jar1pc} alt="" className="hidden 3xl:block" />
        </div>
        <div className="relative z-20 xll:flex xll:justify-between xll:items-center ">
          <div className="text-white xll:w-[979px] 3xl:w-[1154px]">
            <h2 className="text-[28px] font-semibold leading-150 mb-1.5 xll:text-[38px] xll:mb-2.5 3xl:text-5xl 3xl:leading-150 3xl:mb-3.5">
              Start Your Real Estate Journey Today
            </h2>
            <p className="text-sm font-medium leading-150 mb-7.5 text-gray-60 xll:text-base xll:mb-0 3xl:text-lg 3xl:leading-150">
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
          <Link className="block purple text-center">Explore Properties</Link>
        </div>
        <div className="absolute bottom-0 right-0 z-10">
          <img src={jar2p} alt="" className="block xll:hidden" />
          <img src={jar2l} alt="" className="hidden xll:block 3xl:hidden" />
          <img src={jar2pc} alt="" className="hidden 3xl:block" />
        </div>
      </section>
    </>
  );
}

export default Journey;
