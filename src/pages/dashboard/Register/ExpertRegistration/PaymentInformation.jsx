import ExpertRegistrationProgress from "../../../../components/RegistrationInformationProgress/ExpertRegistrationProgress";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


function PaymentInformation({ handleNext, handlePrev }) {

    const {register, handleSubmit, setError, clearErrors,
        formState: {errors, isSubmitting}} = useForm();

  return (
    <>
      <div className="flex-grow w-[33rem] max-w-[90%]">
        <ExpertRegistrationProgress step={2} />

        <form action="" className="form ">

          <label className="w-full mb-7 text-base leading-none">
            Account number<span className="text-secondary">*</span>
            <input className="w-full rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('account_number', { required: 'This field is required' })} type="number" placeholder="E.g 16XXXXXXXXXXXXXX" />
            <p className="w-full text-red-600 text-start" >{errors.account_number?.message}</p>
          </label>

          <label className="w-full mb-7 text-base leading-none">
            Bank name<span className="text-secondary">*</span>
            <input className="w-full rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('bank_name', { required: 'This field is required' })} type="number" placeholder="E.g Guaranty trust bank" />
            <p className="w-full text-red-600 text-start" >{errors.bank_name?.message}</p>
          </label>

        </form>

      </div>

      <div className='flex justify-between pb-16 w-[40rem] max-w-[90%]'>
        <button onClick={handlePrev} className="btn-short bg-secondary">Back</button>
        <button onClick={handleNext} className="btn-short bg-secondary">Continue</button>
      </div>
    </>
  )
}

export default PaymentInformation;