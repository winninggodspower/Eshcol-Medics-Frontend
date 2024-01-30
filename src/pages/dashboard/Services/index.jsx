import React from 'react'

function PatientServices() {
    return (
        <div className='grow'>
            <div className='w-full max-w-[55rem] mx-auto '>
                <div className='flex justify-between w-full py-9 px-3'>
                    <div></div>
                    <div className='flex items-center h-10 md:h-12 md:w-64 overflow-hidden border-[1px] border-grey-3 border-opacity-40 rounded-md ps-3 me-3 md:ps-4'>
                        <svg className='w-[17px] md:w-[24px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <g opacity="0.4">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.0004 20.9999L16.6504 16.6499" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                        <input type="search" className="md:flex-grow h-full bg-transparent border-0 ps-3 md:ps-4 focus:shadow-none w-full md:max-w-60%" placeholder='what are you looking for' />
                    </div>

                    <div className="rounded-md  border-grey-3 border-[0.5px] inline p-2 sm:p-3 md:px-3 md:py-[0.8rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                            <path d="M16 7C16 5.4087 15.3679 3.88258 14.2426 2.75736C13.1174 1.63214 11.5913 1 10 1C8.4087 1 6.88258 1.63214 5.75736 2.75736C4.63214 3.88258 4 5.4087 4 7C4 14 1 16 1 16H19C19 16 16 14 16 7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>

                <div id="services" >
                    <h3>Services</h3>

                    <div className="grid grid-cols-4 md:grid-cols-2">
                        <div>
                            <img src="" alt="" />
                            <p>consult a doctor</p>
                            <button>consult now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientServices
