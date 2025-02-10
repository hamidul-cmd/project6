import React from "react";
import Journey from "../components/Journey";
import PropertiSlider from "../components/PropertiSlider";
import AboutTittle from "../components/AboutTittle";
import PropertyHero from "../components/PropertyHero";
import Form from "../components/Form";

function Propertis() {
  return (
    <>
      <section className="properti__hero px-4 py-12.5 text-white xll:px-20 xll:py-24.5 xll:pb-[130px] 3xl:py-36.5 3xl:px-40.2 3xl:pb-40">
       <PropertyHero tittle=" Find Your Dream Property" pera=" Welcome to Estatein, where your dream property awaits in every corner
          of our beautiful world. Explore our curated selection of properties,
          each offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey" />
      </section>
      <section className=" px-4 py-20 xll:py-24.6 xll:px-20 3xl:py-36.5 3xl:px-36.6">
        <PropertiSlider />
      </section>
      <section className="px-4 xll:px-20 3xl:px-36.6 mb-20">
        <div className="mb-10 xll:mb-14.5 3xl:mb-20">
          <AboutTittle
            tittle="Let's Make it Happen"
            pera="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
          />
        </div>
        <Form/>
      </section>
      <Journey />
    </>
  );
}

export default Propertis;
