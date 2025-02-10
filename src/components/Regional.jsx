import React from "react";
import { Link } from "react-router";

function Regional() {
  const office = [
    {
      type: "Main Headquarters",
      tittle: "123 Estatein Plaza, City Center, Metropolis",
      discribtion:
        "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
      email: "info@estatein.com",
      phone: "+1 (123) 456-7890",
      location: "Metropolis",
    },
    {
      type: "Regional Offices",
      tittle: "456 Urban Avenue, Downtown District,Metropolis",
      discribtion:
        "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
      email: "info@restatein.com",
      phone: "+1 (123) 628-7890",
      location: "Metropolis",
    },
  ];
  return (
    <>
      {office.map((data) => {
        return (
          <div className="text-white p-6 bg-gray-8 border border-gray-15 rounded-lg w-[357px] xll:w-[630px] xll:p-10 3xl:w-[783px] 3xl:p-14.5 3xl:rounded-xl">
            <h3 className="text-sm font-medium leading-150 mb-1 xll:mb-1.5 3xl:text-lg 3xl:leading-150 3xl:mb-2.5 text-red-600">{data.type}</h3>
            <h2 className="text-xl font-semibold leading-150 mb-2 xll:text-2xl xll:mb-2.5 3xl:text-3xl 3xl:leading-150 3xl:mb-3.5">{data.tittle}</h2>
            <p className="text-sm font-medium leading-150 text-gray-60 mb-6 xll:text-base xll:leading-150 xll:mb-7.5 3xl:text-lg 3xl:leading-150 3xl:mb-10">{data.discribtion}</p>
            <div className="flex flex-wrap gap-2 mb-6 xll:mb-7.5 3xl:gap-2.5 3xl:mb-10">
              <div className="flex items-center gap-1 py-2.5 px-3.5 rounded-full bg-gray-10 border border-gray-15 3xl:py-3.5 3xl:px-5 3xl:gap-1.5">
                <div>
                  <svg
                    className="h-5 w-5 3xl:h-6 3xl:w-6"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25 7.22425V14.375C1.25 15.7557 2.36929 16.875 3.75 16.875H16.25C17.6307 16.875 18.75 15.7557 18.75 14.375V7.22425L11.3102 11.8026C10.5067 12.297 9.49327 12.297 8.68976 11.8026L1.25 7.22425Z"
                      fill="white"
                    />
                    <path
                      d="M18.75 5.75652V5.625C18.75 4.24429 17.6307 3.125 16.25 3.125H3.75C2.36929 3.125 1.25 4.24429 1.25 5.625V5.75652L9.34488 10.738C9.74664 10.9852 10.2534 10.9852 10.6551 10.738L18.75 5.75652Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h5 className="text-sm font-medium leading-150 3xl 3xl:text-lg 3xl:leading-150">{data.email}</h5>
              </div>
              <div className="flex items-center gap-1 py-2.5 px-3.5 rounded-full bg-gray-10 border border-gray-15 3xl:py-3.5 3xl:px-5 3xl:gap-1.5">
                <div>
                  <svg
                    className="h-5 w-5 3xl:h-6 3xl:w-6"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.25 3.75C1.25 2.36929 2.36929 1.25 3.75 1.25H4.89302C5.61 1.25 6.23498 1.73796 6.40887 2.43354L7.33037 6.11952C7.48284 6.72942 7.25495 7.37129 6.75202 7.74849L5.674 8.557C5.56206 8.64096 5.53772 8.7639 5.56917 8.84974C6.51542 11.4329 8.5671 13.4846 11.1503 14.4308C11.2361 14.4623 11.359 14.4379 11.443 14.326L12.2515 13.248C12.6287 12.7451 13.2706 12.5172 13.8805 12.6696L17.5665 13.5911C18.262 13.765 18.75 14.39 18.75 15.107V16.25C18.75 17.6307 17.6307 18.75 16.25 18.75H14.375C7.12626 18.75 1.25 12.8737 1.25 5.625V3.75Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h5 className="text-sm font-medium leading-150 3xl 3xl:text-lg 3xl:leading-150">{data.phone}</h5>
              </div>
              <div className="flex items-center gap-1 py-2.5 px-3.5 rounded-full bg-gray-10 border border-gray-15 3xl:py-3.5 3xl:px-5 3xl:gap-1.5">
                <div>
                  <svg
                    className="h-5 w-5 3xl:h-6 3xl:w-6"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.61646 18.6259C9.64163 18.6405 9.66141 18.6517 9.67542 18.6596L9.69869 18.6726C9.88441 18.7745 10.1148 18.7738 10.3007 18.6729L10.3246 18.6596C10.3386 18.6517 10.3584 18.6405 10.3835 18.6259C10.4339 18.5967 10.5058 18.5542 10.5963 18.4985C10.7771 18.3872 11.0323 18.223 11.3372 18.0076C11.9459 17.5776 12.7581 16.9395 13.5721 16.1061C15.1922 14.4474 16.875 11.9551 16.875 8.75C16.875 4.95304 13.797 1.875 10 1.875C6.20304 1.875 3.125 4.95304 3.125 8.75C3.125 11.9551 4.80777 14.4474 6.42788 16.1061C7.24188 16.9395 8.05409 17.5776 8.66282 18.0076C8.96771 18.223 9.22295 18.3872 9.40375 18.4985C9.49419 18.5542 9.56612 18.5967 9.61646 18.6259ZM10 11.25C11.3807 11.25 12.5 10.1307 12.5 8.75C12.5 7.36929 11.3807 6.25 10 6.25C8.61929 6.25 7.5 7.36929 7.5 8.75C7.5 10.1307 8.61929 11.25 10 11.25Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h5 className="text-sm font-medium leading-150 3xl 3xl:text-lg 3xl:leading-150">{data.location}</h5>
              </div>
            </div>
            <Link className="block purple text-center">Get Direction</Link>
          </div>
        );
      })}
    </>
  );
}

export default Regional;
