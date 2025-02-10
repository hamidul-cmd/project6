import React from 'react'

function PropertyHero({tittle, pera}) {
  return (
    <>
       <h1 className="text-[28px] leading-150 font-semibold mb-2.5 xll:text-[38px] 3xl:text-5xl 3xl:leading-150 3xl:mb-3.5">
          {tittle}
        </h1>
        <p className="text-sm font-medium leading-150 text-gray-60 xll:text-base xll:leading-150 xll:w-[1160px] 3xl:text-lg 3xl:w-[1358px]">
         {pera}
        </p>
    </>
  )
}

export default PropertyHero
