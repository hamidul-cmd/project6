import React from "react";
import cird1 from "../assets/cird1.png";
import cird2 from "../assets/cird2.png";
import cird3 from "../assets/cird3.png";
import { Link } from "react-router";

function Slider() {
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

  return (
    <>
      <section className="flex gap-5" key={cirdData.length}>
        {cirdData.map((cird) => {
          return (
            <div className="cird w-[358px] p-6 bg-gray-8 rounded-xl border border-gray-15 xll:p-7.5 xll:w-[413px] 3xl:w-[512px] 3xl:p-10">
              <div className="rounded-[10px] overflow-hidden mb-4 xll:mb-5 3xl:mb-7.5">
                <img
                  src={cird.img}
                  alt=""
                  className="block h-[210px] w-full xll:h-[255px] 3xl:h-[318px]"
                />
              </div>
              <div className="mb-5 xll:mb-6 3xl:mb-7.5">
                <h3 className="text-lg font-semibold leading-150 text-white mb-0.5 xll:text-xl xll:leading-150 xll:mb-1 3xl:text-2xl 3xl:leading-150 3xl:mb-1.5">
                  {cird.tittle}
                </h3>
                <p className="text-sm font-medium leading-150 text-gray-60 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                  {cird.pera}
                  <Link className="text-white hover:underline">Read More</Link>
                </p>
              </div>
              <div className="flex gap-1.5 flex-wrap mb-5 xll:mb-6 3xl:mb-7.5 3xl:gap-2.5">
                <div className="py-1.5 px-3.5 border border-gray-15 bg-gray-10 rounded-[28px] flex items-center text-white gap-1 3xl:py-2">
                  <div>
                    <svg
                      className="h-5 w-5 3xl:h-6 3xl:w-6"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <g>
                          <path
                            d="M10.0119 17.9597C7.01369 17.9597 4.01627 17.9597 1.01806 17.9597C0.714934 17.9597 0.574786 18.0984 0.574786 18.3977C0.574786 18.4752 0.578723 18.5527 0.573999 18.6295C0.5677 18.7225 0.558252 18.8155 0.54093 18.9062C0.476368 19.2372 0.159068 19.5023 -0.220432 19.4984C-0.601507 19.4946 -0.917233 19.2116 -0.974709 18.8481C-0.988094 18.7628 -0.99518 18.6752 -0.99518 18.5891C-0.995967 16.8279 -1.00778 15.0659 -0.991243 13.3046C-0.981795 12.2783 -0.602295 11.3853 0.125212 10.6419C0.566913 10.1907 1.09207 9.86976 1.69282 9.66511C2.16522 9.50465 2.65338 9.45581 3.15098 9.45581C7.76246 9.45736 12.3739 9.45348 16.9854 9.45891C18.3365 9.46046 19.4309 9.9969 20.2419 11.0636C20.6403 11.5884 20.8781 12.1845 20.9592 12.8357C20.9867 13.055 20.9985 13.2783 20.9993 13.5C21.0025 15.2101 21.0017 16.9202 21.0009 18.6302C21.0009 18.8977 20.934 19.1411 20.7104 19.3178C20.4741 19.5046 20.2104 19.5535 19.9293 19.4395C19.66 19.3295 19.49 19.1271 19.4514 18.838C19.4317 18.6922 19.4341 18.5426 19.4301 18.3953C19.4238 18.1574 19.3238 18.0139 19.1239 17.9698C19.0798 17.9597 19.0333 17.9605 18.9876 17.9605C15.9965 17.9605 13.0054 17.9605 10.0135 17.9605L10.0119 17.9597Z"
                            fill="white"
                          />
                          <path
                            d="M9.90197 2.5C11.8467 2.5 13.7907 2.5 15.7346 2.5C16.3858 2.5 16.9944 2.64341 17.5195 3.03953C18.1951 3.54884 18.5895 4.21938 18.6226 5.06124C18.651 5.77519 18.6384 6.4907 18.6415 7.20543C18.6439 7.66589 18.6415 8.12636 18.6415 8.58682C18.6415 8.62791 18.6391 8.67132 18.6281 8.71085C18.5943 8.83566 18.5258 8.88527 18.3966 8.86124C18.2557 8.83488 18.1195 8.77829 17.9786 8.76279C17.6471 8.72713 17.3148 8.70233 16.9818 8.68527C16.7597 8.67364 16.6913 8.63411 16.6598 8.41938C16.559 7.73876 15.9189 7.12636 15.1 7.13566C14.1867 7.14574 13.2734 7.13798 12.3609 7.13798C11.6814 7.13798 11.1011 7.53643 10.8704 8.16434C10.8373 8.25426 10.8247 8.35194 10.8074 8.44651C10.7751 8.61628 10.7114 8.67984 10.5397 8.68217C10.1799 8.68605 9.8193 8.68605 9.45949 8.68217C9.29414 8.68062 9.22879 8.61628 9.19887 8.42791C9.15715 8.16357 9.05322 7.92791 8.88315 7.72093C8.5753 7.34574 8.1769 7.14186 7.6856 7.13953C6.74315 7.13488 5.80069 7.13721 4.85745 7.13876C4.06538 7.13953 3.44574 7.74884 3.34496 8.41783C3.31268 8.63411 3.24733 8.67209 3.0253 8.68605C2.65761 8.71008 2.28992 8.74419 1.92302 8.78295C1.81043 8.79457 1.70256 8.84264 1.59076 8.86124C1.4703 8.88062 1.41439 8.84031 1.38054 8.72403C1.36715 8.67829 1.36085 8.62946 1.36085 8.5814C1.36007 7.47674 1.34511 6.37209 1.364 5.26744C1.38369 4.11163 1.92617 3.26202 2.98751 2.74806C3.40795 2.54574 3.86382 2.5 4.32521 2.5C6.18413 2.5 8.04305 2.5 9.90197 2.5Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h5 className="text-sm font-medium leading-150 3xl:text-lg 3xl:leading-150">
                    {cird.badroom}-Bedroom
                  </h5>
                </div>
                <div className="py-1.5 px-3.5 border border-gray-15 bg-gray-10 rounded-[28px] flex items-center text-white gap-1 3xl:py-2">
                  <div>
                    <svg
                      className="h-5 w-5 3xl:h-6 3xl:w-6"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <g>
                          <path
                            d="M0.269455 14.2616H10.11V16.0697H16.2615V14.2655H18.7054C18.8637 16.4158 18.8761 18.3304 16.6707 19.7897C16.6437 19.8075 16.6221 19.8318 16.5623 19.885C16.8335 20.1103 17.1009 20.3329 17.3655 20.5529C17.0082 20.8945 16.7212 21.169 16.3922 21.4842C16.1019 21.1848 15.7879 20.8373 15.4458 20.5207C15.3453 20.4275 15.1673 20.3894 15.0215 20.3802C14.7831 20.3657 14.5414 20.4045 14.301 20.4052C11.1057 20.4071 7.91048 20.4065 4.71457 20.4065C4.56154 20.4065 4.398 20.436 4.25679 20.3933C3.83054 20.2653 3.55994 20.4629 3.30642 20.7684C3.09034 21.0284 2.84405 21.2629 2.61877 21.5007C2.31468 21.1808 2.03949 20.8918 1.73474 20.5707C1.939 20.39 2.19843 20.1602 2.49004 19.9014C2.28906 19.7576 2.13866 19.6577 1.99614 19.5474C0.928209 18.7244 0.350896 17.6329 0.275366 16.2924C0.23793 15.6284 0.268798 14.9604 0.268798 14.2616H0.269455Z"
                            fill="white"
                          />
                          <path
                            d="M0.275543 9.28709C0.270288 9.16821 0.261093 9.06116 0.261093 8.9541C0.260437 7.21363 0.258466 5.47381 0.261093 3.73333C0.26372 1.82078 1.59108 0.486191 3.50101 0.499984C4.14203 0.504581 4.80275 0.491446 5.41882 0.636595C6.5117 0.894711 7.20001 1.65264 7.53235 2.72057C7.59671 2.92811 7.68012 3.0286 7.90803 3.09034C9.19401 3.43909 10.0964 4.641 10.1128 5.98216C10.1155 6.19824 10.1128 6.41432 10.1128 6.64879H4.02578C3.73548 5.11389 4.56959 3.52973 6.31335 3.03517C6.15573 2.35014 5.48121 1.77217 4.7732 1.74722C4.23792 1.72817 3.70067 1.7262 3.16539 1.74722C2.24261 1.78334 1.50044 2.63059 1.4965 3.64663C1.48994 5.39762 1.49453 7.14926 1.49453 8.90025C1.49453 9.01978 1.49453 9.13932 1.49453 9.28644H0.274229L0.275543 9.28709Z"
                            fill="white"
                          />
                          <path
                            d="M10.0926 13.0327C9.96387 13.0327 9.86732 13.0327 9.77077 13.0327C6.64317 13.0327 3.51491 13.0334 0.387306 13.0321C-0.285898 13.0321 -0.769947 12.7135 -0.940054 12.1697C-1.1962 11.3514 -0.61626 10.5632 0.267771 10.5514C1.20829 10.5389 2.1488 10.5481 3.08931 10.5481C5.29873 10.5481 7.5075 10.5481 9.71692 10.5481C9.83514 10.5481 9.95336 10.5481 10.0926 10.5481V13.0321V13.0327Z"
                            fill="white"
                          />
                          <path
                            d="M15.0237 14.8711H11.3634C11.3575 14.7555 11.3477 14.6504 11.3477 14.5453C11.3464 13.2771 11.3464 12.0082 11.3477 10.7399C11.3483 9.82242 11.8494 9.31801 12.763 9.31407C13.1019 9.31275 13.4408 9.30553 13.7797 9.31604C14.5409 9.34034 15.0381 9.85197 15.0401 10.6152C15.044 11.9386 15.0414 13.2613 15.0401 14.5848C15.0401 14.6708 15.0309 14.7562 15.0237 14.8711Z"
                            fill="white"
                          />
                          <path
                            d="M16.2832 13.0209V10.5482C16.8782 10.5482 17.4648 10.5462 18.0506 10.5488C18.356 10.5501 18.668 10.5252 18.9668 10.5744C19.619 10.6821 20.0433 11.2161 20.0164 11.8394C19.9901 12.4509 19.5389 12.9756 18.8985 13.0091C18.0394 13.0544 17.1764 13.0203 16.2839 13.0203L16.2832 13.0209Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h5 className="text-sm font-medium leading-150 3xl:text-lg 3xl:leading-150">
                    {cird.bathroom}-Bathroom
                  </h5>
                </div>
                <div className="py-1.5 px-3.5 border border-gray-15 bg-gray-10 rounded-[28px] flex items-center text-white gap-1 3xl:py-2">
                  <div>
                    <svg
                      className="h-5 w-5 3xl:h-6 3xl:w-6"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 17V4H3.75C3.33579 4 3 3.66421 3 3.25C3 2.83579 3.33579 2.5 3.75 2.5H16.25C16.6642 2.5 17 2.83579 17 3.25C17 3.66421 16.6642 4 16.25 4H16V17H16.25C16.6642 17 17 17.3358 17 17.75C17 18.1642 16.6642 18.5 16.25 18.5H12.75C12.3358 18.5 12 18.1642 12 17.75V15.25C12 14.8358 11.6642 14.5 11.25 14.5H8.75C8.33579 14.5 8 14.8358 8 15.25V17.75C8 18.1642 7.66421 18.5 7.25 18.5H3.75C3.33579 18.5 3 18.1642 3 17.75C3 17.3358 3.33579 17 3.75 17H4ZM7 6C7 5.72386 7.22386 5.5 7.5 5.5H8.5C8.77614 5.5 9 5.72386 9 6V7C9 7.27614 8.77614 7.5 8.5 7.5H7.5C7.22386 7.5 7 7.27614 7 7V6ZM7.5 9.5C7.22386 9.5 7 9.72386 7 10V11C7 11.2761 7.22386 11.5 7.5 11.5H8.5C8.77614 11.5 9 11.2761 9 11V10C9 9.72386 8.77614 9.5 8.5 9.5H7.5ZM11 6C11 5.72386 11.2239 5.5 11.5 5.5H12.5C12.7761 5.5 13 5.72386 13 6V7C13 7.27614 12.7761 7.5 12.5 7.5H11.5C11.2239 7.5 11 7.27614 11 7V6ZM11.5 9.5C11.2239 9.5 11 9.72386 11 10V11C11 11.2761 11.2239 11.5 11.5 11.5H12.5C12.7761 11.5 13 11.2761 13 11V10C13 9.72386 12.7761 9.5 12.5 9.5H11.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h5 className="text-sm font-medium leading-150 3xl:text-lg 3xl:leading-150">
                    {cird.type}
                  </h5>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="price">
                  <h6 className="text-sm font-medium leading-150 text-gray-60 3xl:text-lg 3xl:leading-150 3xl:mb-0.5">
                    Price
                  </h6>
                  <h5 className="text-lg leading-150 text-white font-semibold xll:text-xl xll:leading-150 3xl:text-2xl 3xl:leading-150">
                    {cird.price}
                  </h5>
                </div>
                <Link className="block purple w-[202px] xll:w-[227px] 3xl:w-[279px] text-center">
                  View Property Details
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Slider;
