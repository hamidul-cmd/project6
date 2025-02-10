import React, { useState } from "react";
import { Link } from "react-router";
import herom from "../assets/herom.png";
import herolp from "../assets/herolp.png";
import heropc from "../assets/heropc.png";
import ring from "../assets/ring.png";
import ringlp from "../assets/ringlp.png";
import ringpc from "../assets/ringpc.png";
import Tittle from "../components/Tittle";
import Bottom from "../components/Bottom";
import clint1 from "../assets/clint1.png";
import clint2 from "../assets/clint2.png";
import clint3 from "../assets/clint3.png";
import ClintSlider from "../components/ClintSlider";
import Faqslider from "../components/Faqslider";
import Journey from "../components/Journey";
import RatingBox from "../components/RatingBox";
import PropertiSlider from "../components/PropertiSlider";
import cird1 from "../assets/cird1.png";
import cird2 from "../assets/cird2.png";
import cird3 from "../assets/cird3.png";
import BottomHero from "../components/BottomHero";

function Home() {
  const cirdData = [
    {
      tittle: "Seaside Serenity Villa",
      pera: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..",
      badroom: "4",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird1,
    },
    {
      tittle: "Metropolitan Haven",
      pera: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
      badroom: "2",
      bathroom: "2",
      type: "villa",
      price: "$550,000",
      img: cird2,
    },
    {
      tittle: "Rustic Retreat Cottage",
      pera: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      badroom: "3",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird3,
    },
    {
      tittle: "Seaside Serenity Villa",
      pera: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..",
      badroom: "4",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird1,
    },
    {
      tittle: "Metropolitan Haven",
      pera: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
      badroom: "2",
      bathroom: "2",
      type: "villa",
      price: "$550,000",
      img: cird2,
    },
    {
      tittle: "Rustic Retreat Cottage",
      pera: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      badroom: "3",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird3,
    },
    {
      tittle: "Seaside Serenity Villa",
      pera: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..",
      badroom: "4",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird1,
    },
    {
      tittle: "Metropolitan Haven",
      pera: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
      badroom: "2",
      bathroom: "2",
      type: "villa",
      price: "$550,000",
      img: cird2,
    },
    {
      tittle: "Rustic Retreat Cottage",
      pera: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      badroom: "3",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird3,
    },
    {
      tittle: "Seaside Serenity Villa",
      pera: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..",
      badroom: "4",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird1,
    },
    {
      tittle: "Metropolitan Haven",
      pera: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
      badroom: "2",
      bathroom: "2",
      type: "villa",
      price: "$550,000",
      img: cird2,
    },
    {
      tittle: "Rustic Retreat Cottage",
      pera: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      badroom: "3",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird3,
    },
    {
      tittle: "Seaside Serenity Villa",
      pera: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..",
      badroom: "4",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird1,
    },
    {
      tittle: "Metropolitan Haven",
      pera: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
      badroom: "2",
      bathroom: "2",
      type: "villa",
      price: "$550,000",
      img: cird2,
    },
    {
      tittle: "Rustic Retreat Cottage",
      pera: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      badroom: "3",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird3,
    },
    {
      tittle: "Seaside Serenity Villa",
      pera: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..",
      badroom: "4",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird1,
    },
    {
      tittle: "Metropolitan Haven",
      pera: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... ",
      badroom: "2",
      bathroom: "2",
      type: "villa",
      price: "$550,000",
      img: cird2,
    },
    {
      tittle: "Rustic Retreat Cottage",
      pera: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
      badroom: "3",
      bathroom: "3",
      type: "villa",
      price: "$550,000",
      img: cird3,
    },
  ];
  let [current, setcurent] = useState(0);
  let previse = () => {
    if (current === 0) setcurent(cirdData.length - 3);
    else setcurent(current - 1);
  };
  let next = () => {
    if (current === cirdData.length - 3) setcurent(0);
    else setcurent(current + 1);
  };

  const clientData = [
    {
      tittle: "Exceptional Service!",
      discribtion:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      address: "USA, California",
      img: clint1,
    },
    {
      tittle: "Efficient and Reliable",
      discribtion:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      name: "Emelie Thomson",
      address: "USA, Florida",
      img: clint2,
    },
    {
      tittle: "Trusted Advisors",
      discribtion:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      name: "John Mans",
      address: "USA, Nevada",
      img: clint3,
    },
    {
      tittle: "Exceptional Service!",
      discribtion:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      address: "USA, California",
      img: clint1,
    },
    {
      tittle: "Efficient and Reliable",
      discribtion:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      name: "Emelie Thomson",
      address: "USA, Florida",
      img: clint2,
    },
    {
      tittle: "Trusted Advisors",
      discribtion:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      name: "John Mans",
      address: "USA, Nevada",
      img: clint3,
    },
    {
      tittle: "Exceptional Service!",
      discribtion:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      address: "USA, California",
      img: clint1,
    },
    {
      tittle: "Efficient and Reliable",
      discribtion:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      name: "Emelie Thomson",
      address: "USA, Florida",
      img: clint2,
    },
    {
      tittle: "Trusted Advisors",
      discribtion:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      name: "John Mans",
      address: "USA, Nevada",
      img: clint3,
    },
    {
      tittle: "Exceptional Service!",
      discribtion:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      name: "Wade Warren",
      address: "USA, California",
      img: clint1,
    },
    {
      tittle: "Efficient and Reliable",
      discribtion:
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      name: "Emelie Thomson",
      address: "USA, Florida",
      img: clint2,
    },
    {
      tittle: "Trusted Advisors",
      discribtion:
        "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      name: "John Mans",
      address: "USA, Nevada",
      img: clint3,
    },
  ];
  let [clintCurrent, setclintCurrent] = useState(0);
  let clintPrevise = () => {
    if (clintCurrent === 0) setclintCurrent(clientData.length - 3);
    else setclintCurrent(clintCurrent - 1);
  };
  let clintNext = () => {
    if (clintCurrent === clientData.length - 3) setclintCurrent(0);
    else setclintCurrent(clintCurrent + 1);
  };
  const faqData = [
    {
      tittle: "How do I search for properties on Estatein?",
      discribtion:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      tittle: "What documents do I need to sell my property through Estatein?",
      discribtion:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      tittle: "How can I contact an Estatein agent?",
      discribtion:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
      tittle: "How do I search for properties on Estatein?",
      discribtion:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      tittle: "What documents do I need to sell my property through Estatein?",
      discribtion:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      tittle: "How can I contact an Estatein agent?",
      discribtion:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
      tittle: "How do I search for properties on Estatein?",
      discribtion:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      tittle: "What documents do I need to sell my property through Estatein?",
      discribtion:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      tittle: "How can I contact an Estatein agent?",
      discribtion:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
      tittle: "How do I search for properties on Estatein?",
      discribtion:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      tittle: "What documents do I need to sell my property through Estatein?",
      discribtion:
        "Find out about the necessary documentation for listing your property with us.",
    },
    {
      tittle: "How can I contact an Estatein agent?",
      discribtion:
        "Discover the different ways you can get in touch with our experienced agents.",
    },
  ];
  let [faqcurrent, setfaqcurrent] = useState(0);
  let faqprevise = () => {
    if (faqcurrent === 0) setfaqcurrent(faqData.length - 3);
    else setfaqcurrent(faqcurrent - 1);
  };
  let faqnext = () => {
    if (faqcurrent === faqData.length - 3) setfaqcurrent(0);
    else setfaqcurrent(faqcurrent + 1);
  };

  return (
    <>
      <section className="hero pt-10 xll:p-0">
        <div className="hero__container">
          <div className="top xll:flex xll:justify-between xll:gap-14.5 3xl:gap-20 px-4 xll:p-0">
            <div className="hero__img bg-gray-10 border border-gray-15 rounded-xl bg-center bg-cover relative xll:order-2 xll:border-none xll:rounded-none xll:w-[50%]">
              <img
                src={herom}
                alt=""
                className="block xll:hidden rounded-xl w-full"
              />
              <img
                src={herolp}
                alt=""
                className="hidden xll:block 3xl:hidden"
              />
              <img src={heropc} alt="" className="hidden 3xl:block" />
              <div className="absolute left-0 bottom-[-40px] xll:top-[95px] xll:left-[-65px] cursor-pointer group h-fit">
                <img src={ring} alt="" className="block boll xll:hidden" />
                <img
                  src={ringlp}
                  alt=""
                  className="hidden xll:block 3xl:hidden boll"
                />
                <img src={ringpc} alt="" className="hidden 3xl:block boll" />
                <div className="absolute p-5 border border-gray-15 rounded-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] xll:top-[50%] 3xl:p-[22px] bg-gray-10">
                  <svg
                    className="h-5 w-5 xll:h-6 xll:w-6 3xl:h-8.5 3xl:w-8.5"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.15137 17.8489L17.756 4.2442M17.756 4.2442L7.55253 4.2442M17.756 4.2442V14.4477"
                      stroke="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="hero__text mt-[56px] mb-10 xll:pl-20 xll:m-0  xll:w-[50%] xll:flex xll:flex-col xll:justify-center 3xl:pl-40.2">
              <h1 className="text-[28px] leading-120 font-semibold text-white mb-4 xll:text-[46px] xll:mb-5 3xl:text-6xl 3xl:leading-120 3xl:mb-6">
                Discover Your Dream Property with Estatein
              </h1>
              <p className="text-sm leading-150 font-medium text-gray-60 mb-10 xll:text-base xll:leading-150 xll:mb-12.5 3xl:text-lg 3xl:leading-150 3xl:mb-14.5">
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
              </p>
              <div className="space-y-4 mb-10 xll:flex xll:items-center xll:space-y-0 xll:gap-4 xll:mb-12.5 3xl:gap-5 3xl:mb-14.5">
                <Link className="block black text-center">Learn More</Link>
                <Link className="block purple text-center">
                  Browse Properties
                </Link>
              </div>
              <RatingBox />
            </div>
          </div>
          <BottomHero/>
        </div>
      </section>
      <section className="fetured__property px-4 py-20 xll:py-24.6 xll:px-20 3xl:py-36.5 3xl:px-36.6">
        <Tittle
          tittle=" Featured Properties"
          pera1="Explore our handpicked selection of featured properties. Eachlisting offers a glimpse into exceptional homes and investmentsavailable through Estatein. "
          prea2="Click View Details for more information."
          button="View All Properties"
        />
        <PropertiSlider />
      </section>
      <section className="client__says px-4 xll:px-20 3xl:px-36.6">
        <Tittle
          tittle="What Our Clients Say"
          pera1="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
          prea2=""
          button="View All Testimonials"
        />
        <div className="clint__slider__wrapper relative overflow-hidden h-[310px] xll:h-[370px] 3xl:h-[450px]">
          <div
            className="absolute top-0 left-0 transition-all ease-linear duration-300"
            style={{ transform: `translatex(-${clintCurrent * 530}px)` }}
          >
            <ClintSlider />
          </div>
        </div>
        <Bottom
          next={clintNext}
          previse={clintPrevise}
          number={clintCurrent}
          totall={clientData.length}
          button="View All Testimonials"
        />
      </section>
      <section className="questions px-4 py-20 xll:py-24.6 xll:px-20 3xl:py-36.5 3xl:px-36.6">
        <Tittle
          tittle="Frequently Asked Questions"
          pera1="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
          prea2=" "
          button="View All FAQ’s"
        />
        <div className="faq__slider__wrapper relative overflow-hidden h-[310px] xll:h-[370px] 3xl:h-[355px]">
          <div
            className="absolute top-0 left-0 transition-all ease-linear duration-300"
            style={{ transform: `translatex(-${faqcurrent * 530}px)` }}
          >
            <Faqslider />
          </div>
        </div>
        <Bottom
          next={faqnext}
          previse={faqprevise}
          number={faqcurrent}
          totall={faqData.length}
          button="View All FAQ’s"
        />
      </section>
      <Journey />
    </>
  );
}

export default Home;
