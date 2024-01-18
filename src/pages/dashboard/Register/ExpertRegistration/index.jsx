import { Outlet, Link, redirect, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import PersonalInformation from '../RegistrationDetails/PersonalInformation';
import PaymentInformation from '../RegistrationDetails/PaymentInformation';
import HospitalDetails from '../RegistrationDetails/HospitalDetails';

export default function ExpertRegistration() {
  let navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step == 3) {
      console.log('steps completed');
      return navigate('/dashboard/review-in-progress')
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
          <PersonalInformation handleNext={handleNext}/>
        )}

        {step === 2 && (
          <PaymentInformation handleNext={handleNext} handlePrev={handlePrev}/>
        )}

        {step === 3 && (
          <HospitalDetails handleNext={handleNext} handlePrev={handlePrev}/>
        )}

    </div>
      </section >
  )
}
