import React from 'react'

function PatientRegistrationProgress({ step }) {

    let pageText = ['Personal Information', 'Billing Information', 'Hospital details', 'Next of kin'][step - 1];

    return (
        <>
            <h3 className="pb-5 text-xl font-bold leading-none text-center md:text-2xl font-railway ">Give us more information</h3>

            <div className='hidden mb-12 mt-14 font-railway md:block'>

                <div className="relative flex justify-between max-w-96">

                    <div className='flex flex-col items-center gap-[0.6rem] relative'>
                        <div className='flex items-center justify-center h-[3.125rem] w-[3.125rem] rounded-full bg-secondary'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 9H9.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 9H15.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className='text-base font-normal text-center w-min'>Personal Information</p>
                        <div className="absolute w-1/2 h-full bg-white start-0 -z-10" />
                    </div>

                    <div className='flex flex-col items-center gap-[0.6rem]'>
                        <div className={`flex items-center justify-center  h-[3.125rem] w-[3.125rem] rounded-full  ${step >= 2 ? 'bg-secondary' : 'bg-grey-4'}`}>
                            <svg className={`${step >= 2 ? 'text-white' : 'text-black'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g opacity={step >= 2 ? 1 : 0.5}>
                                    <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1 10H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                        </div>
                        <p className='text-base font-normal text-center w-min'>Billing Information</p>
                    </div>

                    <div className='flex flex-col items-center gap-[0.6rem] relative'>
                        <div className={`flex items-center justify-center  h-[3.125rem] w-[3.125rem] rounded-full ${step >= 3 ? 'bg-secondary' : 'bg-grey-4'}`}>
                            <svg className={`${step >= 3 ? 'text-white' : 'text-black'}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g opacity={step >= 3 ? 1 : 0.5} clipPath="url(#clip0_88_5346)">
                                    <path d="M5 3.33337H4.16667C3.72464 3.33337 3.30072 3.50897 2.98816 3.82153C2.67559 4.13409 2.5 4.55801 2.5 5.00004V7.91671C2.5 9.13228 2.98289 10.2981 3.84243 11.1576C4.70197 12.0172 5.86776 12.5 7.08333 12.5C8.29891 12.5 9.4647 12.0172 10.3242 11.1576C11.1838 10.2981 11.6667 9.13228 11.6667 7.91671V5.00004C11.6667 4.55801 11.4911 4.13409 11.1785 3.82153C10.866 3.50897 10.442 3.33337 10 3.33337H9.16667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.66699 12.5C6.66699 13.1566 6.79632 13.8068 7.04759 14.4134C7.29887 15.02 7.66717 15.5712 8.13146 16.0355C8.59575 16.4998 9.14695 16.8681 9.75357 17.1194C10.3602 17.3707 11.0104 17.5 11.667 17.5C12.3236 17.5 12.9738 17.3707 13.5804 17.1194C14.187 16.8681 14.7382 16.4998 15.2025 16.0355C15.6668 15.5712 16.0351 15.02 16.2864 14.4134C16.5377 13.8068 16.667 13.1566 16.667 12.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.16699 2.5V4.16667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5 2.5V4.16667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.6667 9.99996C17.5871 9.99996 18.3333 9.25377 18.3333 8.33329C18.3333 7.41282 17.5871 6.66663 16.6667 6.66663C15.7462 6.66663 15 7.41282 15 8.33329C15 9.25377 15.7462 9.99996 16.6667 9.99996Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_88_5346">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p className='text-base font-normal text-center w-min'>Hospital details</p>
                    </div>

                    <div className='flex flex-col items-center gap-[0.6rem] relative'>
                        <div className={`flex items-center justify-center  h-[3.125rem] w-[3.125rem] rounded-full  ${step >= 4 ? 'bg-secondary' : 'bg-grey-4'}`}>
                            <svg className={`${step >= 4 ? 'text-white' : 'text-black'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g  opacity={step >= 4 ? 1 : 0.5} id="user 1">
                                <path id="Vector" d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path id="Vector_2" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </svg>
                        </div>
                        <p className='text-base font-normal text-center '>Next of Kin</p>
                        <div className="absolute w-1/2 h-full bg-white end-0 -z-10" />
                    </div>
                    
                    {/* straight horizontal lines */}
                    <div className="absolute grid w-full grid-cols-3 translate-y-1/2 h-[3.125rem] -z-20">
                        <div id="progress1" className={`w-full h-[0.3125rem] bg-grey-4 ${step > 1 && "bg-secondary"}`}></div>
                        <div id="progress2" className={`w-full h-[0.3125rem] bg-grey-4 ${step > 2 && "bg-secondary"}`}></div>
                        <div id="progress2" className={`w-full h-[0.3125rem] bg-grey-4 ${step > 3 && "bg-secondary"}`}></div>
                    </div>

                </div>
            </div>

            <div className='flex flex-col items-center gap-[0.3rem] relative mb-14 font-railway z-0'>
                <div className='flex items-center justify-center h-[3.125rem] w-[3.125rem] rounded-full bg-secondary md:hidden'>
                    {step == 1 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 9H9.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 9H15.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                    {step == 2 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 10H23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                    {step == 3 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clipPath="url(#clip0_203_5597)">
                                <path d="M5 3.33334H4.16667C3.72464 3.33334 3.30072 3.50894 2.98816 3.8215C2.67559 4.13406 2.5 4.55798 2.5 5.00001V7.91668C2.5 9.13225 2.98289 10.298 3.84243 11.1576C4.70197 12.0171 5.86776 12.5 7.08333 12.5C8.29891 12.5 9.4647 12.0171 10.3242 11.1576C11.1838 10.298 11.6667 9.13225 11.6667 7.91668V5.00001C11.6667 4.55798 11.4911 4.13406 11.1785 3.8215C10.866 3.50894 10.442 3.33334 10 3.33334H9.16667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.66667 12.5C6.66667 13.1566 6.796 13.8068 7.04727 14.4134C7.29855 15.02 7.66685 15.5712 8.13114 16.0355C8.59543 16.4998 9.14663 16.8681 9.75325 17.1194C10.3599 17.3707 11.0101 17.5 11.6667 17.5C12.3233 17.5 12.9735 17.3707 13.5801 17.1194C14.1867 16.8681 14.7379 16.4998 15.2022 16.0355C15.6665 15.5712 16.0348 15.02 16.2861 14.4134C16.5373 13.8068 16.6667 13.1566 16.6667 12.5V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.16667 2.5V4.16667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 2.5V4.16667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.6667 9.99999C17.5871 9.99999 18.3333 9.2538 18.3333 8.33332C18.3333 7.41285 17.5871 6.66666 16.6667 6.66666C15.7462 6.66666 15 7.41285 15 8.33332C15 9.2538 15.7462 9.99999 16.6667 9.99999Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_203_5597">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    )}
                    {step == 4 && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="user 1">
                                <path id="Vector" d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path id="Vector_2" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </svg>
                    )}
                </div>
                <p className='text-base font-semibold text-center md:text-2xl md:font-bold '>{pageText}</p>
            </div>
        </>
    )
}

export default PatientRegistrationProgress;
