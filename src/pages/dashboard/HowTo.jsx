import customerServiceImage from "../../assets/customer-service.png"

function HowTo() {
    return (
        <div className='flex h-full grow'>

            <div className='h-full grow md:border-e-4'>
                <div className='flex items-center gap-2 border-b ps-3 py-[15px] md:py-9 md:ps-14 border-[rgba(0,0,0,0.23)]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 19L5 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <h2 className="text-lg font-bold md:text-xl font-railway">How To Use?</h2>
                </div>

                <div className="text-base md:text-lg leading-[30px] font-inter font-medium mx-9 md:mx-10" >
                    <div className="mt-9">
                        <p><span className="font-semibold">Step 1:</span> Select a feature you’d like to use from the
                        dashboard</p>
                        <p className="mt-[11px]"><span className="font-semibold">Step 2:</span> Follow the prompts to use or communicate
                        with customer service</p>
                    </div>

                    <div className=" mt-7 md:mt-[47px]">
                        <h3 className="font-semibold">For medical checkups: </h3>
                        <p className="mb-1">Step 1: Go to dashboard</p>
                        <p className="mb-1">Step 2: Select consult a doctor</p>
                        <p className="mb-1">Step 3: communicate your symptoms with the doctor</p>
                        <p className="mb-1">Follow the doctors advice and get your diagnosis</p>
                    </div>

                    <h3 className="mt-7 font-semibold md:mt-[39px]">For emergency services: </h3>

                    <div className="mt-3 mb-3 md:mt-9">
                        <h3 className="mb-3 font-semibold md:mb-11">Step 1: Select Emergency services </h3>
                       <p> You’ll be connected to an available emergency specialist</p>
                        on a video call. <br />
                        Make sure to follow the instructions of the specialist and
                        rush to a nearby hospital if the emergency situation is
                        handled as you may still need a check up
                    </div>
                </div>
            </div>

            <div className='hidden md:block w-[44%] border-e-4 text-center'>
                <h2>Have any questions ?</h2>
                <h3>Communicate with customer service</h3>

                <img src={customerServiceImage} alt="" />
                <p>Tayo, Olu and David are online to reply you</p>

                <button>
                    Talk to customer service
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L11 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default HowTo