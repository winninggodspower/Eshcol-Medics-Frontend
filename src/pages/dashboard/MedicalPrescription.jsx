import { useNavigate } from "react-router-dom"
import CustomerService from "../../components/CustomerService";
import medicalExpertImage from "../../assets/medical-expert.png";

function MedicalPrescription() {

  let navigate = useNavigate();

  return (
    <div className='flex h-full grow'>

      <div className='h-full bg-white grow md:border-e-4'>
        <div className='flex items-center gap-2 border-b ps-3 py-[15px] md:py-9 md:ps-14 border-[rgba(0,0,0,0.23)]'>
          <svg onClick={() => navigate(-1)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19L5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 className="text-lg font-bold md:text-xl font-railway">Medical prescriptions</h2>
        </div>

        <div className="text-base md:text-lg leading-[30px] font-inter font-medium mx-9 md:mx-10" >

          <div className="flex gap-4 mt-9 md:gap-5">
            <div>
              <img className="w-12 mx-auto rounded-full md:w-20" src={medicalExpertImage} alt="" />
              <span className="inline mt-2 text-xs italic md:hidden text-grey-6 md:text-sm whitespace-nowrap">01-03-2023</span>
            </div>
            <div>
              <h4 className="text-base italic md:text-xl">Prescribed by Dr Zerebyakov</h4>
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
                <p className="text-xs italic md:text-lg text-grey-7">I think i have malaria i don’t know whats wrong with my nose, it has been running for a long....</p>
              </div>
              <span className="hidden mt-2 text-xs italic text-grey-6 md:text-sm md:inline">01-03-2023</span>
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

          
          
        </div>
      </div>

      <CustomerService />
    </div>
  )
}

export default MedicalPrescription