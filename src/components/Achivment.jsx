import React from "react";

function Achivment() {
  const achivment = [
    {
      tittle: "3+ Years of Excellence",
      discribtion:
        "With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
    },
    {
      tittle: "Happy Clients",
      discribtion:
        "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
    },
    {
      tittle: "Industry Recognition",
      discribtion:
        "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
    },
  ];
  return (
    <>
      {achivment.map((data) => {
        return (
          <div className="p-7.5 bg-gray-8 border border-gray-15 rounded-[10px] shadow-ss2 xll:p-10 3xl:p-12.5 3xl:rounded-xl">
            <h3 className="text-xl font-semibold text-white leading-150 mb-4 xll:text-2xl xll:leading-150 xll:mb-6 3xl:text-3xl 3xl:leading-150 3xl:mb-7.5">
              {data.tittle}
            </h3>
            <p className="text-sm font-medium leading-150 text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
              {data.discribtion}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default Achivment;
