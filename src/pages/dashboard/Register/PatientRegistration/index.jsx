import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react';

export default function PatientRegistration() {

  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <section className="w-[90%] md:w-[70%] overflow-x-hidden mx-auto font-inter min-h-[calc(100vh-7.6rem)] md:min-h-[calc(100vh-4.65rem)]">
      <div className='flex flex-col items-center h-full pt-20 pb-5 md:pt-9'>



      </div>
    </section>
  )
}
