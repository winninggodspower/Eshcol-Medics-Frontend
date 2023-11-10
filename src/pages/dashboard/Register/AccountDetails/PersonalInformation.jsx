import RegistrationInformationProgress from "../../../../components/RegistrationInformationProgress";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function PersonalInformation() {

  const {register, handleSubmit, setError, clearErrors,
    formState: {errors, isSubmitting}} = useForm();

  return (
    <section className="w-[90%] md:w-[70%] overflow-x-hidden mx-auto font-inter min-h-[calc(100vh-7.6rem)] md:min-h-[calc(100vh-4.65rem)]">
      <div className='flex flex-col items-center h-full pt-20 pb-5 md:pt-9'>

        <div className="flex-grow w-[33rem] max-w-[90%]">
          <RegistrationInformationProgress step={1}/>

          <form action="" className="form ">

            <label className="w-full mb-7 text-base leading-none">
              Hospital Name<span className="text-secondary">*</span>
              <input className="w-full rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('hospital_name', { required: 'This field is required' })} type="text" placeholder="Type your hospital name" />
              <p className="w-full text-red-600 text-start" >{errors.hospital_name?.message}</p>
            </label>

            <label className="w-full mb-7 text-base leading-none">
              Contact information<span className="text-secondary">*</span>
              <input className="w-full rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('contact_information', { required: 'This field is required' })} type="text" placeholder="Type your contact information" />
              <p className="w-full text-red-600 text-start" >{errors.contact_information?.message}</p>
            </label>

            <label className="w-full mb-7 text-base leading-none">
              Type of hospital<span className="text-secondary">*</span>
              <select className="w-full rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('hospital_type', { required: 'This field is required' })} defaultValue={null}>
                <option className="custom-input h-11" value="public">Public</option>
                <option className="custom-input h-11" value="private">Private</option>
              </select>
              <p className="w-full text-red-600 text-start" >{errors.hospital_type?.message}</p>
            </label>

            <label className="w-full mb-7 text-base leading-none">
              Mission statement<span className="text-secondary">*</span>
              <textarea className="w-full rounded-md custom-input h-28 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('mission_statement', { required: 'This field is required' })} placeholder="Type your hospital's mission statement" />
              <p className="w-full text-red-600 text-start" >{errors.mission_statement?.message}</p>
            </label>
          </form>
          
        </div>

        <div className='flex justify-between pb-16 w-[40rem] max-w-[90%]'>
          <Link to={'/dashboard/register-hospital'} className="btn-short bg-secondary">Back</Link>
          <Link to={'/dashboard/hostpital-ownership-information'} className="btn-short bg-secondary">Continue</Link>
        </div>

      </div>
    </section>
  )
}


export default PersonalInformation;
