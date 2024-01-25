import PatientRegistrationProgress from "../../../../components/RegistrationInformationProgress/PatientRegistrationProgress";
import hospitalImage from "../../../../assets/hospital_image.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


function NextOfKin({ handleNext, handlePrev }) {

    const { register, handleSubmit, setError, clearErrors,
        formState: { errors, isSubmitting } } = useForm();

    return (
        <>
            <div className="flex-grow w-[33rem] max-w-[90%]">
                <PatientRegistrationProgress step={4} />

                <form action="" className="form ">

                    <label className="w-full text-base leading-none mb-7">
                        Name of next of kin<span className="text-secondary">*</span>
                        <input className="w-full mt-2 rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 md:mt-4" {...register('name_of_next_of_kin', { required: 'This field is required' })} type="text" placeholder="First name/last name/middle name" />
                        <p className="w-full text-red-600 text-start" >{errors.name_of_next_of_kin?.message}</p>
                    </label>

                    <label className="w-full text-base leading-none mb-7">
                        Next of kin’s phone number<span className="text-secondary">*</span>
                        <div className="grid grid-cols-[minmax(0,6.5rem)_minmax(0,1fr)] w-full group">
                            <select className="border-r-0 rounded-md rounded-r-none custom-input group-focus-within:input-hover bg-grey-4 " name="phone_country_code" >
                                <option value="">+234</option>
                                <option value="">+22</option>
                                <option value="">+235</option>
                            </select>
                            <input className="border-l-0 rounded-md rounded-l-none custom-input group-focus-within:input-hover bg-grey-2 h-11" type="number" {...register('next_of_kin_phone_number', { required: "This field is required" })} placeholder="Phone number" />
                        </div>
                    </label>

                    <label className="w-full text-base leading-none mb-7">
                        Next of kin’s address<span className="text-secondary">*</span>
                        <input className="w-full mt-2 rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 md:mt-4" {...register('next_of_kin_address', { required: 'This field is required' })} type="text" placeholder="E.g St XXX Hospital" />
                        <p className="w-full text-red-600 text-start" >{errors.next_of_kin_address?.message}</p>
                    </label>

                    <label className="w-full text-base leading-none mb-7">
                        Relationship with Next of kin<span className="text-secondary">*</span>
                        <input className="w-full mt-2 rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 md:mt-4" {...register('next_of_kin_relationship', { required: 'This field is required' })} type="text" placeholder="E.g Sister" />
                        <p className="w-full text-red-600 text-start" >{errors.next_of_kin_relationship?.message}</p>
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


export default NextOfKin;
