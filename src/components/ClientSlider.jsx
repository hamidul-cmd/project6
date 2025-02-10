import React from "react";

function ClientSlider() {
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
  return (
    <>
      <section className="flex gap-10">
        {clientData.map((data) => {
          return (
            <div className="w-[357px] text-white p-6 border border-gray-15 rounded-[10px] shadow-ss1 xll:w-[619px] xll:p-10 3xl:p-12.5 3xl:w-[773px]">
              <div className="mb-7.5 xll:flex xll:justify-between xll:items-center 3xl:mb-10">
                <div className="mb-5 xll:mb-0">
                  <h5 className="text-sm font-medium leading-150 text-gray-60 mb-0.5 xll:text-base xll:leading-150 xll:mb-1 3xl:text-lg 3xl:leading-150 3xl:mb-1.5">
                    {data.duration}
                  </h5>
                  <h3 className="text-xl font-semibold leading-150 xll:text-2xl xll:leading-150 3xl:text-3xl 3xl:leading-150">
                    {data.name}
                  </h3>
                </div>
                <a href="" className="block black bg-gray-10 text-center">
                  Visit Website
                </a>
              </div>
              <div className="flex justify-between gap-8 mb-7.5 relative before:absolute before:h-full before:w-[1px] before:bg-gray-15 before:top-0 before:left-1/2 3xl:mb-10">
                <div className="w-[138px] xll:w-[249px]">
                  <h5 className="flex items-center gap-0.5 text-gray-60 text-[12px] font-medium leading-150 mb-1 xll:text-sm xll:leading-150 xll:mb-1.5 3xl:text-lg 3xl:leading-150 3xl:gap-1.5 3xl:mb-2">
                    <div>
                      <svg
                        className="h-4.8 w-4.8 xll:h-5 xll:w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.8125 4.5C2.8125 3.56802 3.56802 2.8125 4.5 2.8125H6.1875C7.11948 2.8125 7.875 3.56802 7.875 4.5V6.1875C7.875 7.11948 7.11948 7.875 6.1875 7.875H4.5C3.56802 7.875 2.8125 7.11948 2.8125 6.1875V4.5Z"
                          stroke="#999999"
                        />
                        <path
                          d="M2.8125 11.8125C2.8125 10.8805 3.56802 10.125 4.5 10.125H6.1875C7.11948 10.125 7.875 10.8805 7.875 11.8125V13.5C7.875 14.432 7.11948 15.1875 6.1875 15.1875H4.5C3.56802 15.1875 2.8125 14.432 2.8125 13.5V11.8125Z"
                          stroke="#999999"
                        />
                        <path
                          d="M10.125 4.5C10.125 3.56802 10.8805 2.8125 11.8125 2.8125H13.5C14.432 2.8125 15.1875 3.56802 15.1875 4.5V6.1875C15.1875 7.11948 14.432 7.875 13.5 7.875H11.8125C10.8805 7.875 10.125 7.11948 10.125 6.1875V4.5Z"
                          stroke="#999999"
                        />
                        <path
                          d="M10.125 11.8125C10.125 10.8805 10.8805 10.125 11.8125 10.125H13.5C14.432 10.125 15.1875 10.8805 15.1875 11.8125V13.5C15.1875 14.432 14.432 15.1875 13.5 15.1875H11.8125C10.8805 15.1875 10.125 14.432 10.125 13.5V11.8125Z"
                          stroke="#999999"
                        />
                      </svg>
                    </div>
                    Domain
                  </h5>
                  <h4 className="text-sm font-medium leading-150 xll:text-base xll:leading-150 3xl:text-xl 3xl:leading-150">
                    {data.demant}
                  </h4>
                </div>
                <div className="w-[138px] xll:w-[249px]">
                  <h5 className="flex items-center gap-0.5 text-gray-60 text-[12px] font-medium leading-150 mb-1 xll:text-sm xll:leading-150 xll:mb-1.5 3xl:text-lg 3xl:leading-150 3xl:gap-1.5 3xl:mb-2">
                    <div>
                      <svg
                        className="h-4.8 w-4.8 xll:h-5 xll:w-5 3xl:h-6 3xl:w-6"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.3125 10.125L11.1875 1.6875L9.5 7.875H15.6875L7.8125 16.3125L9.5 10.125H3.3125Z"
                          stroke="#999999"
                        />
                      </svg>
                    </div>
                    Category
                  </h5>
                  <h4 className="text-sm font-medium leading-150 xll:text-base xll:leading-15 3xl:text-xl 3xl:leading-150">
                    {data.catagory}
                  </h4>
                </div>
              </div>
              <div className="p-5 rounded-xl border border-gray-15 xll:p-6 3xl:p-7.5">
                <h5 className="text-sm font-medium leading-150 text-gray-60 mb-2 xll:text-base xll:leading-150 xll:mb-2.5 3xl:text-lg 3xl:leading-150 3xl:mb-3.5">
                  What They Said 🤗
                </h5>
                <p className="text-sm font-medium leading-150 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                  {data.says}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default ClientSlider;
