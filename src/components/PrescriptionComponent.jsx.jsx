import newPrescriptionBadge from "../assets/new.png";

const PrescriptionComponent = ({ expertImage, date, doctorName, symptoms, marginTop, showBadge }) => {
    return (
        <div className={`flex gap-4 ${marginTop} md:gap-5`}>
            <div>
                <div className="relative">
                    <img className="w-12 mx-auto rounded-full md:w-20" src={expertImage} alt="" />
                    {showBadge && (
                        <img className="absolute bottom-0 right-0 left-auto translate-y-[10%] md:translate-y-1/4 md:translate-x-1/4 w-[30px] h-[30px] md:w-10 md:h-10" src={newPrescriptionBadge} alt="" />
                    )}
                </div>
                <span className="inline mt-2 text-xs italic md:hidden text-grey-6 md:text-sm whitespace-nowrap">{date}</span>
            </div>
            <div>
                <h4 className="text-base italic md:text-xl">Prescribed by {doctorName}</h4>
                <div className="flex gap-2 md:mt-2 mt-[6px]">
                    <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5" clip-path="url(#clip0_70_2412)">
                            <path d="M7.5 13.75C10.9518 13.75 13.75 10.9518 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.5 3.75V7.5L10 8.75" stroke="black" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_70_2412">
                                <rect width="15" height="15" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className="text-xs italic md:text-lg text-grey-7">{symptoms}</p>
                </div>
                <span className="hidden mt-2 text-xs italic text-grey-6 md:text-sm md:inline">{date}</span>
                <button className="btn flex bg-secondary rounded-md text-xs md:text-base md:py-3 py-2 px-6 md:px-3 gap-[10px] md:mt-2 mt-[18px]">
                    Download prescriptions
                    <svg className="w-[14px] h-[14px] md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 15V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default PrescriptionComponent;
