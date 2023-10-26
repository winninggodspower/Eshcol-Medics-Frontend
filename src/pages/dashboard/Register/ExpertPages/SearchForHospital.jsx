import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import recordImage from "../../../../assets/undraw_no_data.svg"

function SearchForHospital() {

    let [searchResult, setSearchResult] = useState(false);

    return (
        <section className="w-full max-w-[90%] mx-auto font-inter min-h-[calc(100vh-7.6rem)] md:h-[calc(100vh-4.65rem)] ">

            <div className='w-[33rem] max-w-[90%] h-full mx-auto flex flex-col  pb-5 md:pt-20 pt-20'>
                
                <div className="mb-8 md:mb-7">
                    <h3 className="pb-5 text-2xl font-semibold leading-none text-center font-railway md:pb-2">Search for your Hospital</h3>
                    <p className="text-sm font-normal leading-none text-center md:text-base">If it is registered, it’ll appear on the search else register</p>
                </div>

                <div className='flex-grow'>
                    <div className='flex items-center w-full h-16 overflow-hidden border-[1px] border-black border-opacity-40 rounded-md ps-8 bg-grey-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g opacity="0.5">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.9999 21L16.6499 16.65" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                        <input type="search" className="flex-grow h-full bg-transparent border-0 ps-8" placeholder='Search for a hospital' />
                    </div>

                    {searchResult?
                    null :
                    <div className='flex flex-col items-center gap-5 my-14 '>
                        <img src={recordImage} alt="" className='mx-auto' />
                        <p className='text-base leading-none opacity-70' >We didn’t find  the hospital you’re looking for</p>
                        <button className="text-base btn-short bg-main">Register your hospital</button>
                    </div>
                    }

                </div>

                <div className='flex justify-between mb-16'>
                    <Link to={'/dashboard/register-as-hospital-or-individual'} className="btn-short bg-secondary">Back</Link>
                    <button className="btn-short bg-secondary">Continue</button>
                </div>
            </div>

        </section>
    )
}

export default SearchForHospital;
