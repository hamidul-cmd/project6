import React from "react";

function RatingBox() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 text-white xll:grid-cols-3 xll:gap-4 3xl:gap-5">
        <div className="bg-gray-10 p-4 border border-gray-15 rounded-lg xll:py-3.5 xll:px-5 xll:rounded-[10px] 3xl:py-4 3xl:px-6 3xl:rounded-xl">
          <h3 className=" text-2xl leading-150 font-black text-center mb-0.5 xll:text-left xll:text-3xl xll:leading-150 3xl:text-[40px]">
            200+
          </h3>
          <h5 className=" text-sm font-medium leading-150 text-center text-gray-60 xll:text-left xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
            Happy Customers
          </h5>
        </div>
        <div className="bg-gray-10 p-4 border border-gray-15 rounded-lg xll:py-3.5 xll:px-5 xll:rounded-[10px] 3xl:py-4 3xl:px-6 3xl:rounded-xl">
          <h3 className=" text-2xl leading-150 font-black text-center mb-0.5 xll:text-left xll:text-3xl xll:leading-150 3xl:text-[40px]">
            10k+
          </h3>
          <h5 className=" text-sm font-medium leading-150 text-center text-gray-60 xll:text-left xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
            Properties For Clients
          </h5>
        </div>
        <div className="bg-gray-10 p-4 border border-gray-15 rounded-lg col-end-3 col-start-1 xll:col-start-auto xll:col-end-auto xll:py-3.5 xll:px-5 xll:rounded-[10px] 3xl:py-4 3xl:px-6 3xl:rounded-xl">
          <h3 className=" text-2xl leading-150 font-black text-center mb-0.5 xll:text-left xll:text-3xl xll:leading-150 3xl:text-[40px]">
            16+
          </h3>
          <h5 className=" text-sm font-medium leading-150 text-center text-gray-60 xll:text-left xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
            Years of Experience
          </h5>
        </div>
      </div>
    </>
  );
}

export default RatingBox;
