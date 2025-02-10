import React from "react";
import PropertyHero from "../components/PropertyHero";
import Journey from "../components/Journey";
import BottomHero from "../components/BottomHero";
import AboutTittle from "../components/AboutTittle";
import Form from "../components/Form";
import { Link } from "react-router";
import All from "../components/All";

function contact() {

  return (
    <>
      <section className="properti__hero px-4 py-12.5 text-white xll:px-20 xll:py-24.5 xll:pb-[130px] 3xl:py-36.5 3xl:px-40.2 3xl:pb-40">
        <PropertyHero
          tittle="Get in Touch with Estatein"
          pera="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
        />
      </section>
      <BottomHero />
      <section className="px-4 py-12.5 xll:px-20 xll:py-24.5 3xl:px-40.2 3xl:py-36.5">
        <div className="mb-10 xll:mb-14.5 3xl:mb-20">
          <AboutTittle
            tittle="Let's Connect"
            pera="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
          />
        </div>
        <Form />
      </section>
      <section className="px-4 xll:px-20 3xl:px-40.2">
        <div className="mb-10 xll:mb-14.5 3xl:mb-20">
          <AboutTittle
            tittle="Discover Our Office Locations"
            pera="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
          />
        </div>
        <div>
          <div className="top p-2.5 bg-gray-10 rounded-lg flex gap-2.5 mb-7.5 w-fit 3xl:rounded-xl xll:mb-10 3xl:mb-12.5">
            <Link
              className="block text-center w-[105px] px-0 py-3.5 border border-gray-15 rounded-lg text-white text-sm font-medium leading-150 xll:w-[124px] 3xl:w-[158px] 3xl:text-lg 3xl:leading-150 3xl:rounded-[10px]"
            >
              All
            </Link>
            <Link  className="block text-center w-[105px] px-0 py-3.5 border border-gray-15 rounded-lg text-white text-sm font-medium leading-150 xll:w-[124px] 3xl:w-[158px] 3xl:text-lg 3xl:leading-150 3xl:rounded-[10px]">
              Regional
            </Link>
            <Link className="block text-center w-[105px] px-0 py-3.5 border border-gray-15 rounded-lg text-white text-sm font-medium leading-150 xll:w-[124px] 3xl:w-[158px] 3xl:text-lg 3xl:leading-150 3xl:rounded-[10px]">
              International
            </Link>
          </div>
          <section className="flex flex-wrap gap-5 justify-center xll:justify-between xll:flex-nowrap">
            <All/>
          </section>
        </div>
      </section>
      <Journey />
    </>
  );
}

export default contact;
