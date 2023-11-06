import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import imageIcon from "../../../../assets/image-icon.svg"

function RegisterHospital() {

  const {register, handleSubmit, setError, clearErrors,
    formState: {errors, isSubmitting}} = useForm();


  return (
    <section className="max-w-[90%] mx-auto font-inter min-h-[calc(100vh-7.6rem)] md:min-h-[calc(100vh-4.65rem)] ">

            <div className='h-full flex flex-col items-center pb-5 pt-20 md:pt-9'>
                
                <div className="flex-grow w-[33rem] max-w-[90%]">
                    <h3 className="pb-8 text-2xl font-semibold leading-none text-center font-railway md:pb-12">Register Your Hospital</h3>

                  <form action="" className="form">

                    <label className="w-full mb-7 text-base leading-none">
                      Hospital Name<span className="text-secondary">*</span>
                      <input className="w-full rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('hospital_name', {required: 'This field is required'})} type="text" placeholder="Type your hospital name" />
                      <p className="w-full text-red-600 text-start" >{errors.hospital_name?.message}</p>
                    </label>

                    <label className="w-full mb-7 text-base leading-none">
                      Contact information<span className="text-secondary">*</span>
                      <input className="w-full rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('contact_information', {required: 'This field is required'})} type="text" placeholder="Type your contact information" />
                      <p className="w-full text-red-600 text-start" >{errors.contact_information?.message}</p>
                    </label>

                    <label className="w-full mb-7 text-base leading-none">
                      Type of hospital<span className="text-secondary">*</span>
                      <select className="w-full rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('hospital_type', {required: 'This field is required'})} defaultValue={null}>
                        <option className="custom-input h-11" value="public">Public</option>
                        <option className="custom-input h-11" value="private">Private</option>
                      </select>
                      <p className="w-full text-red-600 text-start" >{errors.hospital_type?.message}</p>
                    </label>

                    <label className="w-full mb-7 text-base leading-none">
                      Mission statement<span className="text-secondary">*</span>
                      <textarea className="w-full rounded-md custom-input h-28 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('mission_statement', {required: 'This field is required'})} placeholder="Type your hospital's mission statement" />
                      <p className="w-full text-red-600 text-start" >{errors.mission_statement?.message}</p>
                    </label>
                    
                    <div className="w-full mb-7 text-base leading-none">
                    Federal Ministry of Health certificate<span className="text-secondary">*</span>
                      
                      <label className="rounded-md custom-input w-fit bg-grey-2 px-5 md:px-10 py-[0.62rem] md:py-6 mt-2 md:mt-4 flex items-center gap-3">
                        <input className="hidden" type="file" {...register('minister_of_health_certificate', {required: 'This field is required'})}  />
                        <img src={imageIcon} alt="image icon" />
                        <span className="text-sm ">Upload media</span>
                      </label>
                      <p className="w-full text-red-600 text-start " >{errors.minister_of_health_certificate?.message}</p>
                    </div>

                    <div className="w-full mb-7 text-base leading-none">
                    A photograph of the hospital<span className="text-secondary">*</span>
                      
                      <label className="rounded-md custom-input w-fit bg-grey-2 px-5 md:px-10 py-[0.62rem] md:py-6 mt-2 md:mt-4 flex items-center gap-3">
                        <input className="hidden" type="file" {...register('hospital_photography', {required: 'This field is required'})}  />
                        <img src={imageIcon} alt="image icon" />
                        <span className="text-sm ">Upload media</span>
                      </label>
                      <p className="w-full text-red-600 text-start " >{errors.hospital_photography?.message}</p>
                    </div>

                  </form>

                </div>

                <div className='flex justify-between pb-16 w-[40rem] max-w-[90%]'>
                    <Link to={'/dashboard/search-for-hospital'} className="btn-short bg-secondary">Back</Link>
                    <button className="btn-short bg-secondary">Continue</button>
                </div>

            </div>

        </section>
  )
}


export default RegisterHospital;