import PatientRegistrationProgress from "../../../../components/RegistrationInformationProgress/PatientRegistrationProgress";
import hospitalImage from "../../../../assets/hospital_image.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


function PersonalInformation({ handleNext }) {

    const { register, handleSubmit, setError, clearErrors,
        formState: { errors, isSubmitting } } = useForm();

    return (
        <>
            <div className="flex-grow w-[33rem] max-w-[90%]">
                <PatientRegistrationProgress step={1} />

                <form action="" className="form ">

                    <div className="grid-cols-2 md:grid gap-x-10">
                        <label className="block w-full text-base leading-none mb-7">
                            First name<span className="text-secondary">*</span>
                            <input className="w-full mt-2 rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 md:mt-4" {...register('hospital_name', { required: 'This field is required' })} type="text" placeholder="Eg. Joseph" />
                            <p className="w-full text-red-600 text-start" >{errors.first_name?.message}</p>
                        </label>

                        <label className="block w-full text-base leading-none mb-7">
                            Last name<span className="text-secondary">*</span>
                            <input className="w-full mt-2 rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 md:mt-4" {...register('contact_information', { required: 'This field is required' })} type="text" placeholder="Eg. Joseph" />
                            <p className="w-full text-red-600 text-start" >{errors.last_name?.message}</p>
                        </label>
                    </div>

                    <label className="w-full text-base leading-none mb-7">
                        Other names<span className="text-secondary">*</span>
                        <input className="w-full mt-2 rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 md:mt-4" {...register('contact_information', { required: 'This field is required' })} type="text" placeholder="Eg. Joseph" />
                        <p className="w-full text-red-600 text-start" >{errors.others_name?.message}</p>
                    </label>

                    <label className="w-full text-base leading-none mb-7">
                        Date of birth<span className="text-secondary">*</span>
                        <input className="w-full mt-2 rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 md:mt-4" {...register('contact_information', { required: 'This field is required' })} type="date" placeholder="Year/ Month/ day" />
                        <p className="w-full text-red-600 text-start" >{errors.date_of_birth?.message}</p>
                    </label>

                    <label className="w-full text-base leading-none mb-7">
                        Phone number<span className="text-secondary">*</span>
                        <div className="grid grid-cols-[minmax(0,6.5rem)_minmax(0,1fr)] w-full group">
                            <select className="border-r-0 rounded-md rounded-r-none custom-input group-focus-within:input-hover bg-grey-4 " name="phone_country_code" >
                                <option value="">+234</option>
                                <option value="">+22</option>
                                <option value="">+235</option>
                            </select>
                            <input className="border-l-0 rounded-md rounded-l-none custom-input group-focus-within:input-hover bg-grey-2 h-11" type="number" {...register('phone_number', { required: "This field is required" })} placeholder="Phone number" />
                        </div>
                    </label>

                    <label className="w-full text-base leading-none mb-7">
                        Home address<span className="text-secondary">*</span>
                        <input className="w-full mt-2 rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 md:mt-4" {...register('home_address', { required: 'This field is required' })} type="text" placeholder="E.g No 4. Pelican avenue" />
                        <p className="w-full text-red-600 text-start" >{errors.home_address?.message}</p>
                    </label>

                </form>

            </div>

            <div className='flex justify-between pb-16 w-[40rem] max-w-[90%]'>
                <Link to={'/dashboard/hostpital-ownership-information'} className="btn-short bg-secondary">Back</Link>
                <button onClick={handleNext} className="btn-short bg-secondary">Continue</button>
            </div>
        </>
    )
}


export default PersonalInformation;
