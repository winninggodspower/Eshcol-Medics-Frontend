import RegistrationInformationProgress from "../../../../components/RegistrationInformationProgress";
import hospitalImage from "../../../../assets/hospital_image.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function PersonalInformation() {

  const {register, handleSubmit, setError, clearErrors,
    formState: {errors, isSubmitting}} = useForm();

  return (
    <>
      <div className="flex-grow w-[33rem] max-w-[90%]">
        <RegistrationInformationProgress step={1} />

        <form action="" className="form ">

          <div className="md:grid grid-cols-2 gap-x-10">
            <label className="w-full block mb-7 text-base leading-none">
              First name<span className="text-secondary">*</span>
              <input className="w-full rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('hospital_name', { required: 'This field is required' })} type="text" placeholder="Eg. Joseph" />
              <p className="w-full text-red-600 text-start" >{errors.first_name?.message}</p>
            </label>

            <label className="w-full block mb-7 text-base leading-none">
              Last name<span className="text-secondary">*</span>
              <input className="w-full rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('contact_information', { required: 'This field is required' })} type="text" placeholder="Eg. Joseph" />
              <p className="w-full text-red-600 text-start" >{errors.last_name?.message}</p>
            </label>
          </div>

          <label className="w-full mb-7 text-base leading-none">
            Other names<span className="text-secondary">*</span>
            <input className="w-full rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('contact_information', { required: 'This field is required' })} type="text" placeholder="Eg. Joseph" />
            <p className="w-full text-red-600 text-start" >{errors.others_name?.message}</p>
          </label>

          <label className="w-full mb-7 text-base leading-none">
            Date of birth<span className="text-secondary">*</span>
            <input className="w-full rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('contact_information', { required: 'This field is required' })} type="date" placeholder="Year/ Month/ day" />
            <p className="w-full text-red-600 text-start" >{errors.date_of_birth?.message}</p>
          </label>

          <label className="w-full mb-7 text-base leading-none">
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

          <div className="w-full mb-7 text-base leading-none font-inter">
            <span className="hidden md:inline">Hospital name</span>
            <div className="w-full rounded-md custom-input bg-grey-2 md:ps-7 ps-5 pe-1 pt-[0.65rem] pb-4 md:py-7 mt-2 md:mt-4">
              <div className="grid grid-cols-[auto_1fr] md:gap-x-4 gap-x-[0.65rem] md:gap-y-2 gap-y-1">
                <img className="row-span-2" src={hospitalImage} alt="" />
                <h4 className=" text-xs md:text-base font-semibold">Acton Crawford Hospital</h4>
                <p className="text-[0.625rem] md:text-sm font-normal opacity-70" >2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
              </div>
            </div>

          </div>

        </form>

      </div>

      <div className='flex justify-between pb-16 w-[40rem] max-w-[90%]'>
        <Link to={'/dashboard/hostpital-ownership-information'} className="btn-short bg-secondary">Back</Link>
        <Link to={'/dashboard/payment-information'} className="btn-short bg-secondary">Continue</Link>
      </div>
    </>
  )
}


export default PersonalInformation;
