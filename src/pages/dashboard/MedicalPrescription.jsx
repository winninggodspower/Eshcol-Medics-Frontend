import CustomerService from "../../components/CustomerService";
import medicalExpertImage from "../../assets/medical-expert.png";
import medicalExpertImage2 from "../../assets/prescription-expert-image.png";
import PrescriptionComponent from "../../components/PrescriptionComponent.jsx";
import CustomPageHeader from "../../components/CustomPageHeader.jsx";

function MedicalPrescription() {


  return (
    <div className='flex h-full grow min-h-[calc(100vh-4.65rem)]'>

      <div className='h-full bg-white grow md:border-e-4'>
        <CustomPageHeader title={'Medical prescriptions'} />

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