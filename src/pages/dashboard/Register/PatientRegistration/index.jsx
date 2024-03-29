import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import PersonalInformation from './PersonalInformation';
import BillingInformation from './BillingInformation';
import HositalDetails from './HospitalDetails';
import NextOfKin from './NextOfKin';

export default function PatientRegistration() {
  let navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step == 4) {
      console.log('steps completed');
      return navigate('/dashboard/services')
    }
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <section className="w-[90%] md:w-[70%] overflow-x-hidden mx-auto font-inter min-h-[calc(100vh-7.6rem)] md:min-h-[calc(100vh-4.65rem)]">
      <div className='flex flex-col items-center h-full pt-20 pb-5 md:pt-9'>

        {step === 1 && (
          <PersonalInformation handleNext={handleNext} />
        )}

        {step === 2 && (
          <BillingInformation handleNext={handleNext} handlePrev={handlePrev} />
        )}

        {step === 3 && (
          <HositalDetails handleNext={handleNext} handlePrev={handlePrev} />
        )}

        {step === 4 && (
          <NextOfKin handleNext={handleNext} handlePrev={handlePrev} />
        )}

      </div>
    </section>
  )
}
