import PatientRegistrationProgress from "../../../../components/RegistrationInformationProgress/PatientRegistrationProgress";
import hospitalImage from "../../../../assets/hospital_image.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


function BillingInformation({ handleNext, handlePrev }) {

    const { register, handleSubmit, setError, clearErrors,
        formState: { errors, isSubmitting } } = useForm();

    return (
        <>
            <div className="flex-grow w-[33rem] max-w-[90%]">
                <PatientRegistrationProgress step={2} />

                <form action="" className="form ">

                    <label className="w-full text-base leading-none mb-7">
                        Card details<span className="text-secondary">*</span>
                        <input className="w-full mt-2 rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 md:mt-4" {...register('billing_information', { required: 'This field is required' })} type="text" placeholder="E.g 16XXXXXXXXXXXXXX" />
                        <p className="w-full text-red-600 text-start" >{errors.billing_information?.message}</p>
                    </label>

                    <div className="grid-cols-2 md:grid gap-x-10">
                        <label className="block w-full text-base leading-none mb-7">
                            Expiry date<span className="text-secondary">*</span>
                            <input className="w-full mt-2 rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 md:mt-4" {...register('expiry_date', { required: 'This field is required' })} type="text" placeholder="E.g 10/28" />
                            <p className="w-full text-red-600 text-start" >{errors.expiry_date?.message}</p>
                        </label>

                        <label className="block w-full text-base leading-none mb-7">
                            CVV<span className="text-secondary">*</span>
                            <input className="w-full mt-2 rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 md:mt-4" {...register('cvv', { required: 'This field is required' })} type="text" placeholder="E.g XXX" />
                            <p className="w-full text-red-600 text-start" >{errors.cvv?.message}</p>
                        </label>
                    </div>

                </form>

            </div>

            <div className='flex justify-between pb-16 w-[40rem] max-w-[90%]'>
                <button onClick={handlePrev} className="btn-short bg-secondary">Back</button>
                <button onClick={handleNext} className="btn-short bg-secondary">Continue</button>
            </div>
        </>
    )
}


export default BillingInformation;
