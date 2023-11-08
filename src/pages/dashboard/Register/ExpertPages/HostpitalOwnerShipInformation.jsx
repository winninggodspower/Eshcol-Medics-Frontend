import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import imageIcon from "../../../../assets/image-icon.svg"

function HostpitalOwnerShipInformation() {

    const {register, handleSubmit, setError, clearErrors, watch,
        formState: {errors, isSubmitting}} = useForm({
            defaultValues:{
                isOwner: "Yes",
            }
        });
        
    const isOwner = watch('isOwner');

  return (
    <section className="w-[90%] md:w-[70%] overflow-x-hidden mx-auto font-inter min-h-[calc(100vh-7.6rem)] md:min-h-[calc(100vh-4.65rem)] ">

            <div className='h-full flex flex-col items-center pb-5 pt-20 md:pt-9'>
                
                <div className="flex-grow w-[33rem] max-w-[90%]">
                    <h3 className="pb-8 text-2xl font-semibold leading-none text-center font-railway md:pb-14">Ownership information</h3>

                  <form action="" className="form">

                    <label className="w-full lg:w-fit mb-7 md:mb-12 text-base md:text-xl md:font-normal leading-none md:text-center">
                        Are you the owner of the hospital?
                        <select className="w-full rounded-md custom-input h-11 max-w-sm bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4 font-normal" {...register('isOwner', {required: 'This field is required'})} defaultValue={null}>
                            <option className="custom-input h-11" value="Yes">Yes</option>
                            <option className="custom-input h-11" value="No">No</option>
                        </select>
                        <p className="w-full font-normal text-red-600 text-start" >{errors.isOwner?.message}</p>
                    </label>

                    { isOwner == "Yes" ? 
                    <div className="w-full md:w-fit mb-7 text-base leading-none ">
                        <span>Upload the bussiness certificate<span className="text-secondary">*</span></span>
                      
                        <label className="rounded-md custom-input w-fit bg-grey-2 px-5 md:px-10 py-[0.62rem] md:py-6 mt-2 md:mt-4 flex items-center gap-3">
                        <input className="hidden" type="file" {...register('minister_of_health_certificate', {required: 'This field is required'})}  />
                        <img className="w-7 md:w-10" src={imageIcon} alt="image icon" />
                        <span className="text-sm ">Upload media</span>
                        </label>
                        <p className="w-full text-red-600 text-start " >{errors.minister_of_health_certificate?.message}</p>
                    </div>
                    :
                    <>
                        <label className="w-full mb-7 text-base leading-none">
                            Owners Name<span className="text-secondary">*</span>
                            <input className="w-full rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('owners_name', {required: 'This field is required'})} type="text" placeholder="Type your owners name" />
                            <p className="w-full text-red-600 text-start" >{errors.hospital_name?.message}</p>
                        </label>

                        <label className="w-full mb-7 text-base leading-none">
                            Owners phone number<span className="text-secondary">*</span>
                            <input className="w-full rounded-md custom-input h-11 bg-grey-2 md:ps-7 ps-5 mt-2 md:mt-4" {...register('owners_phone_number', {required: 'This field is required'})} type="text" placeholder="Type owners phone number" />
                            <p className="w-full text-red-600 text-start" >{errors.contact_information?.message}</p>
                        </label>

                        <div className="md:mb-10 mb-5"/>
                    </>
                    }

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

export default HostpitalOwnerShipInformation;
