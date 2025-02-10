import React from "react";
import clint1 from "../assets/clint1.png";
import clint2 from "../assets/clint2.png";
import clint3 from "../assets/clint3.png";

function ClintSlider() {
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
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.         ",
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
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.         ",
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
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.         ",
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
        "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.         ",
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
  return (
    <>
      <section className="flex gap-5">
        {clientData.map((clint) => {
          return (
            <div className="w-[358px] bg-gray-8 border border-gray-15 rounded-[10px] p-7.5 xll:w-[413px] xll:p-10 3xl:w-[512px] 3xl:p-12.5 3xl:rounded-xl">
              <div className="flex gap-2 mb-6 xll:mb-7.5 3xl:gap-2.5 3xl:mb-10">
                <div className="p-1.5 bg-gray-10 border border-gray-15 rounded-full xll:p-2 3xl:p-2.5">
                  <svg
                    className="h-4.8 w-4.8 xll:h-5 xll:w-5 3xl:h-6 3xl:w-6"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.15861 1.30996C8.55219 0.697193 9.44781 0.697195 9.84139 1.30996L12.1986 4.97987C12.334 5.19071 12.5436 5.34302 12.786 5.40666L17.0047 6.51442C17.7091 6.69938 17.9859 7.55117 17.5247 8.11484L14.7628 11.4907C14.6042 11.6847 14.5241 11.9311 14.5385 12.1813L14.7886 16.5358C14.8303 17.2629 14.1058 17.7893 13.4272 17.5249L9.36304 15.9415C9.12956 15.8505 8.87044 15.8505 8.63696 15.9415L4.57282 17.5249C3.89423 17.7893 3.16966 17.2629 3.21142 16.5358L3.46153 12.1813C3.4759 11.9311 3.39582 11.6847 3.23716 11.4907L0.475274 8.11484C0.0141246 7.55117 0.290888 6.69938 0.995283 6.51442L5.21399 5.40666C5.45636 5.34302 5.66599 5.19071 5.80141 4.97987L8.15861 1.30996Z"
                      fill="#FFE600"
                    />
                  </svg>
                </div>
                <div className="p-1.5 bg-gray-10 border border-gray-15 rounded-full xll:p-2 3xl:p-2.5">
                  <svg
                    className="h-4.8 w-4.8 xll:h-5 xll:w-5 3xl:h-6 3xl:w-6"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.15861 1.30996C8.55219 0.697193 9.44781 0.697195 9.84139 1.30996L12.1986 4.97987C12.334 5.19071 12.5436 5.34302 12.786 5.40666L17.0047 6.51442C17.7091 6.69938 17.9859 7.55117 17.5247 8.11484L14.7628 11.4907C14.6042 11.6847 14.5241 11.9311 14.5385 12.1813L14.7886 16.5358C14.8303 17.2629 14.1058 17.7893 13.4272 17.5249L9.36304 15.9415C9.12956 15.8505 8.87044 15.8505 8.63696 15.9415L4.57282 17.5249C3.89423 17.7893 3.16966 17.2629 3.21142 16.5358L3.46153 12.1813C3.4759 11.9311 3.39582 11.6847 3.23716 11.4907L0.475274 8.11484C0.0141246 7.55117 0.290888 6.69938 0.995283 6.51442L5.21399 5.40666C5.45636 5.34302 5.66599 5.19071 5.80141 4.97987L8.15861 1.30996Z"
                      fill="#FFE600"
                    />
                  </svg>
                </div>
                <div className="p-1.5 bg-gray-10 border border-gray-15 rounded-full xll:p-2 3xl:p-2.5">
                  <svg
                    className="h-4.8 w-4.8 xll:h-5 xll:w-5 3xl:h-6 3xl:w-6"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.15861 1.30996C8.55219 0.697193 9.44781 0.697195 9.84139 1.30996L12.1986 4.97987C12.334 5.19071 12.5436 5.34302 12.786 5.40666L17.0047 6.51442C17.7091 6.69938 17.9859 7.55117 17.5247 8.11484L14.7628 11.4907C14.6042 11.6847 14.5241 11.9311 14.5385 12.1813L14.7886 16.5358C14.8303 17.2629 14.1058 17.7893 13.4272 17.5249L9.36304 15.9415C9.12956 15.8505 8.87044 15.8505 8.63696 15.9415L4.57282 17.5249C3.89423 17.7893 3.16966 17.2629 3.21142 16.5358L3.46153 12.1813C3.4759 11.9311 3.39582 11.6847 3.23716 11.4907L0.475274 8.11484C0.0141246 7.55117 0.290888 6.69938 0.995283 6.51442L5.21399 5.40666C5.45636 5.34302 5.66599 5.19071 5.80141 4.97987L8.15861 1.30996Z"
                      fill="#FFE600"
                    />
                  </svg>
                </div>
                <div className="p-1.5 bg-gray-10 border border-gray-15 rounded-full xll:p-2 3xl:p-2.5">
                  <svg
                    className="h-4.8 w-4.8 xll:h-5 xll:w-5 3xl:h-6 3xl:w-6"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.15861 1.30996C8.55219 0.697193 9.44781 0.697195 9.84139 1.30996L12.1986 4.97987C12.334 5.19071 12.5436 5.34302 12.786 5.40666L17.0047 6.51442C17.7091 6.69938 17.9859 7.55117 17.5247 8.11484L14.7628 11.4907C14.6042 11.6847 14.5241 11.9311 14.5385 12.1813L14.7886 16.5358C14.8303 17.2629 14.1058 17.7893 13.4272 17.5249L9.36304 15.9415C9.12956 15.8505 8.87044 15.8505 8.63696 15.9415L4.57282 17.5249C3.89423 17.7893 3.16966 17.2629 3.21142 16.5358L3.46153 12.1813C3.4759 11.9311 3.39582 11.6847 3.23716 11.4907L0.475274 8.11484C0.0141246 7.55117 0.290888 6.69938 0.995283 6.51442L5.21399 5.40666C5.45636 5.34302 5.66599 5.19071 5.80141 4.97987L8.15861 1.30996Z"
                      fill="#FFE600"
                    />
                  </svg>
                </div>
                <div className="p-1.5 bg-gray-10 border border-gray-15 rounded-full xll:p-2 3xl:p-2.5">
                  <svg
                    className="h-4.8 w-4.8 xll:h-5 xll:w-5 3xl:h-6 3xl:w-6"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.15861 1.30996C8.55219 0.697193 9.44781 0.697195 9.84139 1.30996L12.1986 4.97987C12.334 5.19071 12.5436 5.34302 12.786 5.40666L17.0047 6.51442C17.7091 6.69938 17.9859 7.55117 17.5247 8.11484L14.7628 11.4907C14.6042 11.6847 14.5241 11.9311 14.5385 12.1813L14.7886 16.5358C14.8303 17.2629 14.1058 17.7893 13.4272 17.5249L9.36304 15.9415C9.12956 15.8505 8.87044 15.8505 8.63696 15.9415L4.57282 17.5249C3.89423 17.7893 3.16966 17.2629 3.21142 16.5358L3.46153 12.1813C3.4759 11.9311 3.39582 11.6847 3.23716 11.4907L0.475274 8.11484C0.0141246 7.55117 0.290888 6.69938 0.995283 6.51442L5.21399 5.40666C5.45636 5.34302 5.66599 5.19071 5.80141 4.97987L8.15861 1.30996Z"
                      fill="#FFE600"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-white mb-6 xll:mb-7.5 3xl:mb-10 h-[117px] xll:h-[136px] 3xl:h-[158px]">
                <h3 className="text-lg font-semibold leading-150 mb-1.5 xll:text-xl xll:leading-150 xll:mb-2.5 3xl:text-2xl 3xl:leading-150 3xl:mb-3.5">
                  {clint.tittle}
                </h3>
                <p className="text-sm font-medium leading-150 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                  {clint.discribtion}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <div>
                  <img
                    src={clint.img}
                    alt=""
                    className="block h-12.5 w-12.5 3xl:h-14.5 3xl:w-14.5"
                  />
                </div>
                <div className="text-white">
                  <h5 className="text-base font-medium leading-150 xll:text-lg xll:leading-150 3xl:text-xl 3xl:leading-150 3xl:mb-0.5">
                    {clint.name}
                  </h5>
                  <h6 className="text-sm leading-150 font-medium text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                    {clint.address}
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default ClintSlider;
