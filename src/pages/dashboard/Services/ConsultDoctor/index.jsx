import { useState } from "react"
import SessionChat from "./SessionChat";

function ConsultDoctor() {
    let [isDoneSearching, setIsDoneSearching] = useState(false);

    setTimeout(()=>{
        setIsDoneSearching(true);
    }, 5000)

    return (
        <div className='bg-white grow'>
            { !isDoneSearching ?
                <div className='w-11/12 max-w-[45rem] mx-auto px-[6px] font-inter'>
                    <div className="py-12 mx-auto text-center md:pt-16 ">
                        <svg className="mx-auto w-[150px] h-[150px] md:w-[250px] md:h-[250px]" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="150" r="150" fill="#BBC1F5" fillOpacity="0.6" />
                            <circle opacity="0.8" cx="150" cy="150" r="120" fill="#BBC1F5" fillOpacity="0.6" />
                            <circle opacity="0.5" cx="150" cy="150" r="75" fill="#B1B9FF" fillOpacity="0.8" />
                            <g opacity="0.65">
                                <path d="M145 165C149.437 164.999 153.747 163.514 157.243 160.78L168.232 171.77L171.768 168.235L160.778 157.245C163.513 153.749 164.999 149.439 165 145C165 133.973 156.028 125 145 125C133.973 125 125 133.973 125 145C125 156.028 133.973 165 145 165ZM145 130C153.272 130 160 136.728 160 145C160 153.273 153.272 160 145 160C136.727 160 130 153.273 130 145C130 136.728 136.727 130 145 130Z" fill="black" />
                            </g>
                        </svg>
                        <p className="mt-5 text-sm md:text-lg">Searching for available doctors...</p>
                    </div>

                    <div className="p-4 border border-grey-6 md:py-4 md:px-12 mb-7">
                        <h3 className="font-semibold font-railway text md:text-xl">Did you know?</h3>
                        <p className="text-base md:mt-2">You can book appointments with our doctor’s at their hospitals</p>
                    </div>

                </div>
                :
                <SessionChat/>
            }
        </div>
    )
}

export default ConsultDoctor
