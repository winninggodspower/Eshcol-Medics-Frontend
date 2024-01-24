import PatientRegistrationProgress from "../../../../components/RegistrationInformationProgress/PatientRegistrationProgress";
import hospitalImage from "../../../../assets/hospital_image.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


function HositalDetails({ handleNext, handlePrev }) {

    const { register, handleSubmit, setError, clearErrors,
        formState: { errors, isSubmitting } } = useForm();

    return (
        <>
            <div className="flex-grow w-[33rem] max-w-[90%]">
                <PatientRegistrationProgress step={3} />

                <form action="" className="form ">

                    <label className="w-full text-base leading-none mb-7">
                        Last used Hospital name<span className="text-secondary">*</span>
                        <input className="w-full mt-2 rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 md:mt-4" {...register('last_used_hospital_name', { required: 'This field is required' })} type="text" placeholder="E.g St XXX Hospital" />
                        <p className="w-full text-red-600 text-start" >{errors.last_used_hospital_name?.message}</p>
                    </label>

                    <label className="w-full text-base leading-none mb-7">
                        Hospital address<span className="text-secondary">*</span>
                        <input className="w-full mt-2 rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 md:mt-4" {...register('hospital_address', { required: 'This field is required' })} type="text" placeholder="E.g St XXX Hospital" />
                        <p className="w-full text-red-600 text-start" >{errors.hospital_address?.message}</p>
                    </label>


                    <label className="w-full text-base leading-none mb-7">
                        Hospital Phone number<span className="text-secondary">*</span>
                        <input className="w-full mt-2 rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 md:mt-4" {...register('hospital_hone_number', { required: 'This field is required' })} type="text" placeholder="E.g St XXX Hospital" />
                        <p className="w-full text-red-600 text-start" >{errors.hospital_hone_number?.message}</p>
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


export default HositalDetails;
