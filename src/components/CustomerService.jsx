import customerServiceImage from "../assets/customer-service.png"

function CustomerService() {
    return (
        <div className='hidden md:block w-[44%] min-w-fit border-e-4 text-center pt-[66px] px-8 lg:px-16 font-inter bg-white h-full '>
            <h2 className="text-lg font-semibold md:text-xl ">Have any questions ?</h2>
            <h3 className="mt-1 text-xl font-medium">Communicate with customer service</h3>

            <img className="my-[55px]" src={customerServiceImage} alt="" />
            <p className="font-medium">Tayo, Olu and David are online to reply you</p>

            <button className="btn mt-[55px] mb-[110px] flex bg-secondary rounded-md text-md py-4 px-7 gap-[10px] mx-auto">
                Talk to customer service
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </button>
        </div>
    )
}

export default CustomerService