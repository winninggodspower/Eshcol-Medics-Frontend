import { useNavigate } from "react-router-dom"
import CustomerService from "../../components/CustomerService";
import medicalExpertImage from "../../assets/medical-expert.png";
import medicalExpertImage2 from "../../assets/prescription-expert-image.png";
import PrescriptionComponent from "../../components/PrescriptionComponent.jsx";

function MedicalPrescription() {

  let navigate = useNavigate();

  return (
    <div className='flex h-full grow min-h-[calc(100vh-4.65rem)]'>

      <div className='h-full bg-white grow md:border-e-4'>
        <div className='flex items-center gap-2 border-b ps-3 py-[15px] md:py-9 md:ps-14 border-[rgba(0,0,0,0.23)]'>
          <svg onClick={() => navigate(-1)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19L5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 className="text-lg font-bold md:text-xl font-railway">Medical prescriptions</h2>
        </div>

        <div className="text-base md:text-lg leading-[30px] font-inter font-medium mx-9 md:mx-10" >

          <PrescriptionComponent
            expertImage={medicalExpertImage}
            date="01-03-2023"
            doctorName="Dr Zerebyakov"
            symptoms="I think i have malaria i don’t know whats wrong with my nose, it has been running for a long...."
            marginTop="mt-9"
            showBadge={true}
          />
          <PrescriptionComponent
            expertImage={medicalExpertImage2}
            date="01-03-2023"
            doctorName="Dr Maria sanchez"
            symptoms="My hand has been shaking for a while now i don’t know whats wrong"
            marginTop="mt-[51px]"
            showBadge={false}
          />

        </div>
      </div>

      <CustomerService />
    </div>
  )
}

export default MedicalPrescription