import CustomPageHeader from "../../components/CustomPageHeader";

function HowTo() {

    return (
        <div className='h-full bg-white grow md:border-e-4'>
            <CustomPageHeader title={'How To Use?'} />

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
    )
}

export default HowTo