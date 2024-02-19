import customerServiceImage from "../../assets/customer-service.png"

function HowTo() {
    return (
        <div className='flex h-full grow'>

            <div className='h-full grow md:border-e-4 font-inter'>
                <div className='flex'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 19L5 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <h2>How To Use?</h2>
                </div>

                <div>
                    <h4>Step 1:</h4> Select a feature you’d like to use from the
                    dashboard
                    <h4>Step 2:</h4> Follow the prompts to use or communicate
                    with customer service
                </div>

                <div>
                    <h3>For medical checkups: </h3>
                    Step 1: Go to dashboard
                    Step 2: Select consult a doctor
                    Step 3: communicate your symptoms with the doctor
                    Follow the doctors advice and get your diagnosis
                </div>

                <h3>For emergency services: </h3>

                <div>
                    <h3>Step 1: Select Emergency services </h3>
                    You’ll be connected to an available emergency specialist
                    on a video call.
                    Make sure to follow the instructions of the specialist and
                    rush to a nearby hospital if the emergency situation is
                    handled as you may still need a check up
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