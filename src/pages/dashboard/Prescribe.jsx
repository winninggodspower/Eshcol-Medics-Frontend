import CustomPageHeader from "../../components/CustomPageHeader";
import PrescriptionUserImg from "@/assets/prescription-user.png";
import { useState } from "react";

// page where doctors use to prescribes drugs 
function Prescribe() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='h-full bg-white grow md:border-e-4'>
            <CustomPageHeader title={'Prescriptions'} />
            <PrescribeModal openModal={openModal} setOpenModal={setOpenModal} />
            <div className="text-base md:text-lg leading-[30px] font-inter font-medium pt-9 mx-9 md:mx-10 grid gap-y-4 md:gap-y-6" >
                <div className="flex justify-between pb-5 md:pb-8 xl:px-7 border-b">
                    <div className="flex gap-[15px] md:gap-3 xl:gap-5 items-center">
                        <img className="rounded-full md:w-[55px] md:h-[55px]" width={50} height={50} src={PrescriptionUserImg} alt="" />
                        <p className="font-inter font-semibold text-base md:text-lg ">Savannah Nyugen</p>
                    </div>
                    <button onClick={() => setOpenModal(true)} className="text-xs md:text-base opacity-70">Prescribe</button>
                </div>
                <div className="flex justify-between pb-5 md:pb-8 xl:px-7 border-b">
                    <div className="flex gap-[15px] md:gap-3 xl:gap-5 items-center">
                        <img className="rounded-full md:w-[55px] md:h-[55px]" width={50} height={50} src={PrescriptionUserImg} alt="" />
                        <p className="font-inter font-semibold text-base md:text-lg ">Savannah Nyugen</p>
                    </div>
                    <button onClick={() => setOpenModal(true)} className="text-xs md:text-base opacity-70">Prescribe</button>
                </div>
            </div>
        </div>
    )
}


export default Prescribe;

function PrescribeModal({openModal, setOpenModal}) {
  return (
    <div id="default-modal" tabIndex="-1" aria-hidden="true" className={ `${(openModal? 'flex': 'hidden')} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-60`}>
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow ">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" onClick={() => setOpenModal(false)}  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 ">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 ">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">I accept</button>
                <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 ">Decline</button>
            </div>
        </div>
    </div>
</div>
  )
}

