import React from "react";

function Experience() {
  const experience = [
    {
      step: "01",
      tittle: "Discover a World of Possibilities",
      discribtion:
        "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
    },
    {
      step: "02",
      tittle: "Narrowing Down Your Choices",
      discribtion:
        "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    },
    {
      step: "03",
      tittle: "Personalized Guidance",
      discribtion:
        "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
    },
    {
      step: "04",
      tittle: "See It for Yourself",
      discribtion:
        "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
    },
    {
      step: "05",
      tittle: "Making Informed Decisions",
      discribtion:
        "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
    },
    {
      step: "06",
      tittle: "Getting the Best Deal",
      discribtion:
        "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    },
  ];

  return (
    <>
      {experience.map((data) => {
        return (
          <div className="text-white">
            <div className="py-3.5 px-4 border-l border-Purple-60 3xl:py-4 3xl:px-5">
              <span className="block text-base font-medium leading-150 3xl:text-xl 3xl:leading-150">
                Step{data.step}
              </span>
            </div>
            <div className="p-7.5 grra relative rounded-[10px] rounded-tl-none xll:p-10 3xl:p-12.5">
              <h3 className="text-lg font-semibold leading-150 mb-3.5 xll:text-xl xll:leading-150 xll:mb-4 3xl:text-[26px] 3xl:mb-5">
                {data.tittle}
              </h3>
              <p className="text-sm font-medium leading-150 text-gray-60 h-[84px] xll:h-[96px] xll:text-base xll:leading-150 3xl:h-[108px] 3xl:text-lg 3xl:leading-150">
                {data.discribtion}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Experience;
