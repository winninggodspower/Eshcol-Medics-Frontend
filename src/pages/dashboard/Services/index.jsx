// services images
import doctorImage from "../../../assets/services-image/doctor.png"
import ambulanceImage from "../../../assets/services-image/ambulance.png"
import nurseImage from "../../../assets/services-image/nurse.png"
import billHistoryImage from "../../../assets/services-image/bill-history.png"
import consultationImage from "../../../assets/services-image/consultation.png"
import expertHistoryImage from "../../../assets/services-image/expert-history.png"
import { Link } from "react-router-dom"

function PatientServices() {
    return (
        <div className='grow'>
            <div className='w-full max-w-[55rem] mx-auto px-[6px]'>

                <div className='flex justify-around md:justify-between w-full py-9 pt-[18px] md:pt-9'>
                    <div className='w-12 md:w-0'></div>
                    <div className='flex items-center h-10 md:h-12 md:w-64 overflow-hidden border-[1px] border-grey-3 border-opacity-40 rounded-md ps-3 me-3 md:ps-4'>
                        <svg className='w-[17px] md:w-[24px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <g opacity="0.4">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21.0004 20.9999L16.6504 16.6499" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </svg>
                        <input type="search" className="md:flex-grow h-full bg-transparent border-0 ps-3 md:ps-4 focus:shadow-none w-full md:max-w-60%" placeholder='what are you looking for' />
                    </div>

                    <div className="rounded-md  border-grey-3 border-[0.5px] inline p-2 sm:p-3 md:px-3 md:py-[0.8rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                            <path d="M16 7C16 5.4087 15.3679 3.88258 14.2426 2.75736C13.1174 1.63214 11.5913 1 10 1C8.4087 1 6.88258 1.63214 5.75736 2.75736C4.63214 3.88258 4 5.4087 4 7C4 14 1 16 1 16H19C19 16 16 14 16 7Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div id="services" className=' md:rounded-md text-white mb-10' style={{background: "linear-gradient(112deg, #5B7D6C 0.78%, #527362 99.62%)"}}>

                    <h3 className='font-railway text-center text-2xl font-semibold md:font-bold pt-7'>Services</h3>

                    <div className="grid md:grid-cols-3 grid-cols-2 md:gap-y-16 gap-y-[30px] justify-around font-inter pt-11 pb-12 md:w-[650px] max-w-[95%] mx-auto" >
                        <div className='text-center justify-self-center'>
                            <img className='mx-auto bg-white rounded-full' src={billHistoryImage} alt="" />
                            <p className='my-4 text-sm font-medium'>consult a doctor</p>
                            <Link to={'/dashboard/consult-doctor'} className='service-btn'>consult now</Link>
                        </div>

                        <div className='text-center justify-self-center'>
                            <img className='mx-auto bg-white rounded-full' src={ambulanceImage} alt="" />
                            <p className='my-4 text-sm font-medium'>Call an ambulance</p>
                            <button className='service-btn'>Call now</button>
                        </div>

                        <div className='text-center justify-self-center'>
                            <img className='mx-auto bg-white rounded-full' src={nurseImage} alt="" />
                            <p className='my-4 text-sm font-medium'>Hire a nurse</p>
                            <button className='service-btn'>Hire now</button>
                        </div>

                        <div className='text-center justify-self-center'>
                            <img className='mx-auto bg-white rounded-full' src={doctorImage} alt="" />
                            <p className='my-4 text-sm font-medium'>Bill history</p>
                            <button className='service-btn'>Hire now</button>
                        </div>

                        <div className='text-center justify-self-center'>
                            <img className='mx-auto bg-white rounded-full' src={consultationImage} alt="" />
                            <p className='my-4 mt-3 text-sm font-medium'>Emergency consultation</p>
                            <button className='service-btn'>Call now</button>
                        </div>

                        <div className='text-center justify-self-center'>
                            <img className='mx-auto bg-white rounded-full' src={expertHistoryImage} alt="" />
                            <p className='my-4 text-sm font-medium'>Expert history</p>
                            <button className='service-btn'>Hire now</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientServices
