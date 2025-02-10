import React from "react";
import { Link } from "react-router";

function Bottom({ next, previse, number, totall, button }) {
  return (
    <>
      <section className="flex items-center justify-between mt-7.5 pt-4 border-t border-gray-15 xll:mt-10 3xl:pt-5 3xl:mt-12.5">
        <div>
          <div className="hidden xll:block">
            <span className="text-base font-medium leading-150 text-gray-60 3xl:text-xl 3xl:leading-150">
              <span className="text-white">{number}</span> of {totall}
            </span>
          </div>
          <Link className="block black xll:hidden">{button}</Link>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            className="p-2.5 border border-gray-15 rounded-full hover:bg-gray-10 3xl:p-3.5 cursor-pointer"
            onClick={previse}
          >
            <div className="rotate-180">
              <svg
                className="h-6 w-6 3xl:h-7.5 3xl:w-7.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.59961 12C3.59961 11.503 4.00255 11.1 4.49961 11.1L17.2651 11.1L12.2758 6.34876C11.9175 6.00425 11.9063 5.43451 12.2509 5.07621C12.5954 4.71792 13.1651 4.70675 13.5234 5.05126L20.1234 11.3513C20.2999 11.5209 20.3996 11.7552 20.3996 12C20.3996 12.2448 20.2999 12.4791 20.1234 12.6488L13.5234 18.9488C13.1651 19.2933 12.5954 19.2821 12.2509 18.9238C11.9063 18.5655 11.9175 17.9958 12.2758 17.6513L17.2651 12.9L4.49961 12.9C4.00255 12.9 3.59961 12.4971 3.59961 12Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
          <div className="xll:hidden">
            <span className="text-sm font-medium leading-150 text-gray-60">
              <span className="text-white">{number}</span> of {totall}
            </span>
          </div>
          <button
            className="p-2.5 border border-gray-15 rounded-full hover:bg-gray-10 3xl:p-3.5 cursor-pointer"
            onClick={next}
          >
            <div>
              <svg
                className="h-6 w-6 3xl:h-7.5 3xl:w-7.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.59961 12C3.59961 11.503 4.00255 11.1 4.49961 11.1L17.2651 11.1L12.2758 6.34876C11.9175 6.00425 11.9063 5.43451 12.2509 5.07621C12.5954 4.71792 13.1651 4.70675 13.5234 5.05126L20.1234 11.3513C20.2999 11.5209 20.3996 11.7552 20.3996 12C20.3996 12.2448 20.2999 12.4791 20.1234 12.6488L13.5234 18.9488C13.1651 19.2933 12.5954 19.2821 12.2509 18.9238C11.9063 18.5655 11.9175 17.9958 12.2758 17.6513L17.2651 12.9L4.49961 12.9C4.00255 12.9 3.59961 12.4971 3.59961 12Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </div>
      </section>
    </>
  );
}

export default Bottom;
