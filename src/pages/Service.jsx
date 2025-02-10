import React from "react";
import PropertyHero from "../components/PropertyHero";
import Journey from "../components/Journey";
import BottomHero from "../components/BottomHero";
import AboutTittle from "../components/AboutTittle";
import Unlock from "../components/Unlock";
import { Link } from "react-router";
import Smart from "../components/Smart";

function Service() {
  return (
    <>
      <section className="properti__hero px-4 py-12.5 text-white xll:px-20 xll:py-24.5 xll:pb-[130px] 3xl:py-36.5 3xl:px-40.2 3xl:pb-40">
        <PropertyHero
          tittle="Elevate Your Real Estate Experience"
          pera="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
        />
      </section>
      <BottomHero />
      <section className="px-4 py-20 xll:py-24.6 xll:px-20 3xl:py-36.5 3xl:px-36.6">
        <div className="mb-10 xll:mb-14.5 3xl:mb-20">
          <AboutTittle
            tittle="Unlock Property Value"
            pera="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
          />
        </div>
        <Unlock />
      </section>
      <section className="px-4 xll:px-20 3xl:px-36.6">
        <div className="mb-10 xll:mb-14.5 3xl:mb-20">
          <AboutTittle
            tittle="Effortless Property Management"
            pera="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
          />
        </div>
        <Unlock />
      </section>
      <section className="px-4 py-20 xll:py-24.6 xll:px-20 3xl:py-36.5 3xl:px-36.6 xll:flex xll:justify-between">
        <div className="mb-10 xll:mb-0 xll:w-[412px] 3xl:w-[519px]">
          <div className="mb-7.5 xll:mb-10 3xl:mb-12.5">
            <AboutTittle
              tittle="Smart Investments, Informed Decisions"
              pera="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
            />
          </div>
          <div className="smart p-6 bg-gray-10 border border-gray-15 rounded-[10px] bg-center bg-cover text-white xll:p-10 3xl:p-12.5 3xl:rounded-xl">
            <h3 className="text-xl font-bold leading-150 mb-5 text-center xll:text-[22px] xll:mb-5 3xl:text-2xl 3xl:leading-150 3xl:mb-7.5">Unlock Your Investment Potential</h3>
            <p className="text-sm font-medium leading-150 text-gray-60 mb-5 xll:text-base xll:leading-150 xll:mb-5 xll:text-white-90 3xl:text-lg 3xl:leading-150 3xl:mb-7.5">Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
            <Link className="block black text-center bg-gray-8">Learn More</Link>
          </div>
        </div>
        <Smart/>
      </section>
      <Journey />
    </>
  );
}

export default Service;
