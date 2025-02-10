import React from "react";
import { Link } from "react-router";

function Faqslider() {
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
  return (
    <>
      <section className="flex gap-5">
        {faqData.map((faq) => {
          return (
            <div className="p-7.5 bg-gray-8 border border-gray-15 rounded-[10px] w-[358px] xll:p-10 xll:w-[413px] 3xl:w-[512px] 3xl:p-12.5 3xl:rounded-xl">
              <h3 className="text-lg leading-150 font-semibold text-white mb-5 xll:text-xl xll:leading-150 xll:mb-6 3xl:text-2xl 3xl:leading-150 3xl:mb-7.5 h-[54px] xll:h-14.5 3xl:h-[72px]">
                {faq.tittle}
              </h3>
              <p className="text-sm leading-150 font-medium text-gray-60 mb-5 xll:text-base xll:leading-150 xll:mb-6 3xl:text-lg 3xl:leading-150 3xl:mb-7.5">
                {faq.discribtion}
              </p>
              <Link className="block black text-center bg-gray-10 leading-[130%] xll:w-fit">
                Read More
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Faqslider;
