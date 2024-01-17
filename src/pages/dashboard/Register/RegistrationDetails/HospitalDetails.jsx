import ExpertRegistrationProgress from "../../../../components/RegistrationInformationProgress/ExpertRegistrationProgress";
import hospitalImage from "../../../../assets/hospital_image.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function HospitalDetails() {

  const {register, handleSubmit, setError, clearErrors, watch, 
    formState: {errors, isSubmitting}} = useForm({
      defaultValues: {
        "ageYouTreat": false,
      }
    });

    const ageYouTreat = watch('ageYouTreat');
  return (
    <>
      <div className="flex-grow w-[33rem] max-w-[90%]">
        <ExpertRegistrationProgress step={3} />

        <form action="" className="form ">

            <label className="w-full mb-7 text-base leading-none">
                Medical department
              <input className="w-full rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('medical_details', { required: 'This field is required' })} type="text" placeholder="Eg. Joseph" />
              <p className="w-full text-red-600 text-start" >{errors.medical_details?.message}</p>
            </label>

            <label className="w-full mb-7 text-base leading-none">
              What age do you treat
              <div className="flex md:gap-x-5 justify-between md:justify-normal">
                <label className={`rounded-md custom-input py-[0.7rem] bg-grey-2 md:px-7 px-5 mt-2 md:mt-4 flex items-center text-grey-3 font-normal cursor-pointer ${ageYouTreat == 'Adult' ? 'bg-secondary text-white': '' } `} >
                  <input type="radio" name="age_you_treat"  {...register('ageYouTreat', { required: 'This field is required' })} value="Adult" className="hidden" />
                  Adult
                </label>
                <label className={`rounded-md custom-input py-[0.7rem] bg-grey-2 md:px-7 px-5 mt-2 md:mt-4 flex items-center text-grey-3 font-normal cursor-pointer  ${ageYouTreat == 'Teen' ? 'bg-secondary text-white': '' }`}>
                  <input type="radio" name="age_you_treat" {...register('ageYouTreat', { required: 'This field is required' })} value="Teen" className="hidden" />
                  Teen
                </label>
                <label className={`rounded-md custom-input py-[0.7rem] bg-grey-2 md:px-7 px-5 mt-2 md:mt-4 flex items-center text-grey-3 font-normal cursor-pointer ${ageYouTreat == 'Child' ? 'bg-secondary text-white': '' }`}>
                  <input type="radio" name="age_you_treat" {...register('ageYouTreat', { required: 'This field is required' })} value="Child" className="hidden" />
                  Child
                </label>
              </div>
              <p className="w-full text-red-600 text-start" >{errors.last_name?.message}</p>
            </label>

        </form>

      </div>

      <div className='flex justify-between pb-16 w-[40rem] max-w-[90%]'>
        <Link to={'/dashboard/payment-information'} className="btn-short bg-secondary">Back</Link>
        <Link to={''} className="btn-short bg-secondary">Continue</Link>
      </div>
    </>
  )
}


export default HospitalDetails;
