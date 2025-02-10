import React from "react";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";

function Team() {
  const team = [
    {
      name: "Max Mitchell",
      position: "Founder",
      img: team1,
    },
    {
      name: "Sarah Johnson",
      position: "Chief Real Estate Officer",
      img: team2,
    },
    {
      name: "David Brown",
      position: "Head of Property Management",
      img: team3,
    },
    {
      name: "Michael Turner",
      position: "Legal Counsel",
      img: team4,
    },
  ];

  return (
    <>
      {team.map((data) => {
        return (
          <div className="p-5 border border-gray-15 rounded-xl xll:p-6 3xl:p-7.5">
            <div className="img relative mb-10 xll:mb-12.5">
              <img
                src={data.img}
                alt="team member img"
                className="h-[268px] w-full block xll:h-[220px] 3xl:h-[253px]"
              />
              <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%]">
                <a
                  href="https://x.com/mdmaruf17204871"
                  className="py-2.5 px-5 rounded-full bg-Purple-60 block 3xl:py-3.5 3xl:px-6.6"
                >
                  <svg
                    className="h-5 w-5 3xl:h-6 3xl:w-6"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8337 4.83326C18.2073 5.10501 17.5448 5.28465 16.867 5.3666C17.5821 4.93936 18.1181 4.26725 18.3753 3.47493C17.7033 3.87498 16.9676 4.15684 16.2003 4.30826C15.6874 3.75207 15.0045 3.38184 14.2585 3.25564C13.5125 3.12944 12.7458 3.2544 12.0785 3.61092C11.4112 3.96745 10.8811 4.53537 10.5714 5.22563C10.2616 5.91588 10.1897 6.68942 10.367 7.42493C9.00818 7.3562 7.67903 7.00239 6.46587 6.38648C5.25272 5.77057 4.1827 4.90634 3.32533 3.84993C3.02461 4.37507 2.86659 4.96978 2.86699 5.57493C2.86593 6.13692 3.00384 6.69044 3.26845 7.18623C3.53307 7.68202 3.91617 8.10469 4.38366 8.4166C3.84031 8.40181 3.30856 8.25601 2.83366 7.9916V8.03326C2.83773 8.82067 3.11365 9.58251 3.61475 10.1899C4.11585 10.7973 4.81137 11.213 5.58366 11.3666C5.28637 11.4571 4.97772 11.5048 4.66699 11.5083C4.4519 11.5058 4.23734 11.4862 4.02533 11.4499C4.24525 12.1273 4.67084 12.7192 5.24289 13.1434C5.81493 13.5676 6.50497 13.8029 7.21699 13.8166C6.01466 14.7627 4.53023 15.279 3.00033 15.2833C2.72177 15.2842 2.44344 15.2675 2.16699 15.2333C3.72902 16.2418 5.54934 16.7772 7.40866 16.7749C8.69174 16.7883 9.9646 16.5458 11.1529 16.0617C12.3412 15.5775 13.4212 14.8615 14.3297 13.9553C15.2381 13.0492 15.957 11.9711 16.4441 10.784C16.9313 9.59695 17.177 8.3247 17.167 7.0416C17.167 6.89993 17.167 6.74993 17.167 6.59993C17.8209 6.11227 18.3849 5.51445 18.8337 4.83326Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="text">
              <h4 className="text-lg font-semibold text-white text-center leading-7 mb-0.5 xll:text-xl xll:leading-7 xll:mb-1 3xl:text-2xl 3xl:leading-7 3xl:mb-1.5">
                {data.name}
              </h4>
              <h5 className="text-center text-gray-60 text-sm font-medium leading-6 mb-4 xll:text-base xll:leading-6 xll:mb-5 3xl:text-lg 3xl:leading-6 3xl:mb-6">
                {data.position}
              </h5>
              <div className="flex justify-between items-center p-2 pl-6 rounded-full border border-gray-15 bg-gray-10 xll:p-2.5 xll:pl-5 3xl:p-3.5 3xl:pl-6">
                <h4 className="text-sm font-medium leading-7 text-white xll:text-base xll:leading-7 3xl:text-lg 3xl:leading-7">
                  Say Hello 👋
                </h4>
                <div className="p-3 rounded-full bg-Purple-60 cursor-pointer xll:p-1.5 3xl:p-[7px]">
                  <svg
                    className="h-6 w-6 3xl:h-7.5 3xl:w-7.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.4274 2.5783C20.9274 2.0673 20.1874 1.8783 19.4974 2.0783L3.40742 6.7273C2.67942 6.9293 2.16342 7.5063 2.02442 8.2383C1.88242 8.9843 2.37842 9.9323 3.02642 10.3283L8.05742 13.4003C8.57342 13.7163 9.23942 13.6373 9.66642 13.2093L15.4274 7.4483C15.7174 7.1473 16.1974 7.1473 16.4874 7.4483C16.7774 7.7373 16.7774 8.2083 16.4874 8.5083L10.7164 14.2693C10.2884 14.6973 10.2084 15.3613 10.5234 15.8783L13.5974 20.9283C13.9574 21.5273 14.5774 21.8683 15.2574 21.8683C15.3374 21.8683 15.4274 21.8683 15.5074 21.8573C16.2874 21.7583 16.9074 21.2273 17.1374 20.4773L21.9074 4.5083C22.1174 3.8283 21.9274 3.0883 21.4274 2.5783Z"
                      fill="white"
                    />
                    <path
                      opacity="0.4"
                      d="M9.45139 19.1423C9.74339 19.4353 9.74339 19.9103 9.45139 20.2033L8.08539 21.5683C7.93939 21.7153 7.74739 21.7883 7.55539 21.7883C7.36339 21.7883 7.17139 21.7153 7.02539 21.5683C6.73239 21.2753 6.73239 20.8013 7.02539 20.5083L8.39039 19.1423C8.68339 18.8503 9.15839 18.8503 9.45139 19.1423ZM8.66769 15.3543C8.95969 15.6473 8.95969 16.1223 8.66769 16.4153L7.30169 17.7803C7.15569 17.9273 6.96369 18.0003 6.77169 18.0003C6.57969 18.0003 6.38769 17.9273 6.24169 17.7803C5.94869 17.4873 5.94869 17.0133 6.24169 16.7203L7.60669 15.3543C7.89969 15.0623 8.37469 15.0623 8.66769 15.3543ZM4.90649 14.1619C5.19849 14.4549 5.19849 14.9299 4.90649 15.2229L3.54049 16.5879C3.39449 16.7349 3.20249 16.8079 3.01049 16.8079C2.81849 16.8079 2.62649 16.7349 2.48049 16.5879C2.18749 16.2949 2.18749 15.8209 2.48049 15.5279L3.84549 14.1619C4.13849 13.8699 4.61349 13.8699 4.90649 14.1619Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Team;
