import React from 'react'

function Form() {
  return (
    <>
      <form
          action=""
          method="post"
          className="grid grid-cols-1 p-5 border border-gray-15 rounded-xl text-white gap-5 xll:grid-cols-4 xll:gap-7.5 xll:p-12.5 3xl:p-24.5 3xl:gap-12.5"
        >
          <div>
            <label htmlFor="fristname" className="block text-base font-semibold leading-150 mb-2.5 xll:mb-3.5 3xl:mb-4 3xl:text-xl 3xl:leading-150">First Name</label>
            <input required type="text" id="fristname" placeholder="Enter First Name" className="w-full px-5 py-4 bg-gray-10 rounded-md outline-none border border-gray-15 placeholder:text-sm placeholder:font-medium placeholder:leading-5 placeholder:text-gray-40 text-sm leading-5 text-gray-40 font-medium 3xl:py-6 xll:rounded-lg" />
          </div>
          <div>
            <label htmlFor="lastname" className="block text-base font-semibold leading-150 mb-2.5 xll:mb-3.5 3xl:mb-4 3xl:text-xl 3xl:leading-150">Last Name</label>
            <input required type="text" id="lastname" placeholder="Enter Last Name" className="w-full px-5 py-4 bg-gray-10 rounded-md outline-none border border-gray-15 placeholder:text-sm placeholder:font-medium placeholder:leading-5 placeholder:text-gray-40 text-sm leading-5 text-gray-40 font-medium 3xl:py-6 xll:rounded-lg" />
          </div>
          <div>
            <label required htmlFor="email" className="block text-base font-semibold leading-150 mb-2.5 xll:mb-3.5 3xl:mb-4 3xl:text-xl 3xl:leading-150">Email</label>
            <input type="email" id="email" placeholder="Enter your Email" className="w-full px-5 py-4 bg-gray-10 rounded-md outline-none border border-gray-15 placeholder:text-sm placeholder:font-medium placeholder:leading-5 placeholder:text-gray-40 text-sm leading-5 text-gray-40 font-medium 3xl:py-6 xll:rounded-lg" />
          </div>
          <div>
            <label required htmlFor="number" className="block text-base font-semibold leading-150 mb-2.5 xll:mb-3.5 3xl:mb-4 3xl:text-xl 3xl:leading-150">Phone</label>
            <input type="number" id="number" placeholder="Enter Phone Number" className="w-full px-5 py-4 bg-gray-10 rounded-md outline-none border border-gray-15 placeholder:text-sm placeholder:font-medium placeholder:leading-5 placeholder:text-gray-40 text-sm leading-5 text-gray-40 font-medium 3xl:py-6 xll:rounded-lg" />
          </div>
          <div>
            <label htmlFor="location" className="block text-base font-semibold leading-150 mb-2.5 xll:mb-3.5 3xl:mb-4 3xl:text-xl 3xl:leading-150">Preferred Location</label>
            <select required name="location" id="location" className="text-gray-40 w-full px-5 py-4 bg-gray-10 border border-gray-15 outline-none rounded-md 3xl:py-[22px] 3xl:rounded-lg">
              <option value="dhaka">dhaka</option>
              <option value="kumilla">kumilla</option>
              <option value="jhinaigaty">jhinaigaty</option>
              <option value="uttora">uttora</option>
              <option value="boreshal">boreshal</option>
            </select>
          </div>
          <div>
            <label htmlFor="type" className="block text-base font-semibold leading-150 mb-2.5 xll:mb-3.5 3xl:mb-4 3xl:text-xl 3xl:leading-150">Property Type</label>
            <select required name="type" id="type"  className="text-gray-40 w-full px-5 py-4 bg-gray-10 border border-gray-15 outline-none rounded-md 3xl:py-[22px] 3xl:rounded-lg">
              <option value="dhaka">dhaka</option>
              <option value="kumilla">kumilla</option>
              <option value="jhinaigaty">jhinaigaty</option>
              <option value="uttora">uttora</option>
              <option value="boreshal">boreshal</option>
            </select>
          </div>
          <div>
            <label htmlFor="Bathrooms" className="block text-base font-semibold leading-150 mb-2.5 xll:mb-3.5 3xl:mb-4 3xl:text-xl 3xl:leading-150">Preferred Location</label>
            <select required name="Bathrooms" id="Bathrooms"  className="text-gray-40 w-full px-5 py-4 bg-gray-10 border border-gray-15 outline-none rounded-md 3xl:py-[22px] 3xl:rounded-lg">
              <option value="dhaka">dhaka</option>
              <option value="kumilla">kumilla</option>
              <option value="jhinaigaty">jhinaigaty</option>
              <option value="uttora">uttora</option>
              <option value="boreshal">boreshal</option>
            </select>
          </div>
          <div>
            <label htmlFor="Bedrooms" className="block text-base font-semibold leading-150 mb-2.5 xll:mb-3.5 3xl:mb-4 3xl:text-xl 3xl:leading-150">Preferred Location</label>
            <select required name="Bedrooms" id="Bedrooms"  className="text-gray-40 w-full px-5 py-4 bg-gray-10 border border-gray-15 outline-none rounded-md 3xl:py-[22px] 3xl:rounded-lg">
              <option value="dhaka">dhaka</option>
              <option value="kumilla">kumilla</option>
              <option value="jhinaigaty">jhinaigaty</option>
              <option value="uttora">uttora</option>
              <option value="boreshal">boreshal</option>
            </select>
          </div>
          <div className="xll:col-span-2">
            <label htmlFor="Budget" className="block text-base font-semibold leading-150 mb-2.5 xll:mb-3.5 3xl:mb-4 3xl:text-xl 3xl:leading-150">Preferred Location</label>
            <select required name="Budget" id="Budget"  className="text-gray-40 w-full px-5 py-4 bg-gray-10 border border-gray-15 outline-none rounded-md 3xl:py-[22px] 3xl:rounded-lg">
              <option value="dhaka">2000$</option>
              <option value="kumilla">5000$</option>
              <option value="jhinaigaty">6000$</option>
              <option value="uttora">2000$</option>
              <option value="boreshal">10000$</option>
            </select>
          </div>
          <div className="xll:col-span-2 xll:flex xll:items-end xll:gap-4">
            <div className="xll:w-[50%]">
            <h4 className="block text-base font-semibold leading-150 mb-2.5 xll:mb-3.5 3xl:mb-4 3xl:text-xl 3xl:leading-150">Preferred Contact Method</h4>
            <div className="flex w-full px-5 py-4 bg-gray-10 border border-gray-15 rounded-md gap-1.5 mb-4 xll:mb-0 3xl:py-[22px] 3xl:rounded-lg">
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
              <input required type="number" placeholder="Enter Your Number" className="w-full border-none outline-none bg-transparent placeholder:text-sm placeholder:leading-5 placeholder:text-gray-40 text-sm leading-5 text-gray-40" />
            </div>
            </div>
            <div className="flex w-full px-5 py-4 bg-gray-10 border border-gray-15 rounded-md gap-1.5 xll:w-[50%] 3xl:py-[22px] 3xl:rounded-lg">
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
              <input required type="email" placeholder="Enter Your Email" className="w-full border-none outline-none bg-transparent placeholder:text-sm placeholder:leading-5 placeholder:text-gray-40 text-sm leading-5 text-gray-40" />
            </div>
          </div>
          <div className="xll:col-span-4">
            <label htmlFor="massage" className="block text-base font-semibold leading-150 mb-2.5 xll:mb-3.5 3xl:mb-4 3xl:text-xl 3xl:leading-150">Message</label>
            <textarea name="massage" id="massage" placeholder="Enter your Message here.." className="bg-gray-10 border border-gray-15 rounded-md w-full p-5 resize-none h-[90px] outline-none placeholder:text-sm placeholder:font-medium placeholder:leading-5 placeholder:text-gray-40 text-sm font-medium leading-5 text-gray-40 xll:h-[120px] 3xl:h-[170px]"></textarea>
          </div>
          <div className="xll:col-span-4 xll:flex xll:justify-between xll:items-center">
            <div className="flex items-center gap-1.5 mb-5 xll:mb-0">
              <input required type="checkbox" className="h-6 w-6 bg-gray-10 appearance-none rounded-sm cursor-pointer" />
              <p className="text-sm font-medium leading-150 text-gray-60 3xl:text-lg">I agree with <a href="" className="underline">Terms of Use</a> and <a href="Pr" className="underline">Privacy Policy</a></p>
            </div>
            <button type="submit" className="purple w-full xll:w-[191px] 3xl:w-[250px]">Send Your Message</button>
          </div>
        </form>
    </>
  )
}

export default Form
