import React from 'react'

function RegistrationInformationProgress({step}) {

  let pageText = ['Personal Information', 'Payment Information', 'Hospital details'][step];

  return (
    <>
      <h3 className="pb-5 md:text-2xl text-xl font-bold leading-none text-center font-railway ">Give us more information</h3>

      <div className='mt-14 mb-12 font-railway hidden md:block'>

        <div className="relative flex justify-between max-w-96">

          <div className='flex flex-col items-center gap-[0.6rem] relative'>
            <div className='flex items-center justify-center h-[3.125rem] w-[3.125rem] rounded-full bg-secondary'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 9H9.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 9H15.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <p className='text-base font-normal text-center w-min'>Personal Information</p>
            <div className="absolute w-1/2 h-full bg-white start-0 -z-10" />
          </div>

          <div className='flex flex-col items-center gap-[0.6rem]'>
            <div className='flex items-center justify-center  h-[3.125rem] w-[3.125rem] rounded-full bg-grey-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g opacity="0.5">
                  <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 10H23" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
            </div>
            <p className='text-base font-normal text-center w-min'>Payment Information</p>
          </div>

          <div className='flex flex-col items-center gap-[0.6rem] relative'>
            <div className='flex items-center justify-center  h-[3.125rem] w-[3.125rem] rounded-full bg-grey-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g opacity="0.5" clip-path="url(#clip0_88_5346)">
                  <path d="M5 3.33337H4.16667C3.72464 3.33337 3.30072 3.50897 2.98816 3.82153C2.67559 4.13409 2.5 4.55801 2.5 5.00004V7.91671C2.5 9.13228 2.98289 10.2981 3.84243 11.1576C4.70197 12.0172 5.86776 12.5 7.08333 12.5C8.29891 12.5 9.4647 12.0172 10.3242 11.1576C11.1838 10.2981 11.6667 9.13228 11.6667 7.91671V5.00004C11.6667 4.55801 11.4911 4.13409 11.1785 3.82153C10.866 3.50897 10.442 3.33337 10 3.33337H9.16667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.66699 12.5C6.66699 13.1566 6.79632 13.8068 7.04759 14.4134C7.29887 15.02 7.66717 15.5712 8.13146 16.0355C8.59575 16.4998 9.14695 16.8681 9.75357 17.1194C10.3602 17.3707 11.0104 17.5 11.667 17.5C12.3236 17.5 12.9738 17.3707 13.5804 17.1194C14.187 16.8681 14.7382 16.4998 15.2025 16.0355C15.6668 15.5712 16.0351 15.02 16.2864 14.4134C16.5377 13.8068 16.667 13.1566 16.667 12.5V10" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.16699 2.5V4.16667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5 2.5V4.16667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.6667 9.99996C17.5871 9.99996 18.3333 9.25377 18.3333 8.33329C18.3333 7.41282 17.5871 6.66663 16.6667 6.66663C15.7462 6.66663 15 7.41282 15 8.33329C15 9.25377 15.7462 9.99996 16.6667 9.99996Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_88_5346">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className='text-base font-normal text-center w-min'>Hospital details</p>
            <div className="absolute w-1/2 h-full bg-white end-0 -z-10" />
          </div>

          <div className="absolute grid w-full grid-cols-2 translate-y-1/2 h-[3.125rem] -z-20">
            <div id="progress1" className={`w-full h-[0.3125rem] bg-grey-4 ${step > 1 && "bg-secondary"}`}></div>
            <div id="progress2" className={`w-full h-[0.3125rem] bg-grey-4 ${step > 2 && "bg-secondary"}`}></div>
          </div>

        </div>
      </div>

      <div className='flex flex-col items-center gap-[0.3rem] relative mb-14 md:mb-24 font-railway'>
        <div className='flex items-center justify-center h-[3.125rem] w-[3.125rem] rounded-full bg-secondary md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 9H9.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15 9H15.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <p className='text-base md:text-2xl font-semibold md:font-bold text-center '>{pageText}</p>
      </div>
    </>
  )
}

export default RegistrationInformationProgress;
