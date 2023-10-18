import { Link } from "react-router-dom";
import RegisterSidebar from "../../components/RegisterLoginSidebar";
import handleFormLogin from "../../utils/handleFormLogin";
import { useForm } from "react-hook-form";


function LoginPatient() {
    
    const {register, handleSubmit, setError, clearErrors,
        formState: {errors, isSubmitting}} = useForm();
    
    // clear nonRegisterdFieldInput error if it has errors
    let clearNonFieldError = ()=> errors.notRegisteredInput && clearErrors('notRegisteredInput')
    

    return (
        <main className="md:flex font-raleway md:h-[calc(100vh-3rem)]">
            <RegisterSidebar points={['premium e-medical tools', 'advanced payment schedules', '24hrs customer service']} btnClass={'bg-main'} btnText={'Login as a medical expert'} btnUrl={'/login/expert'} />

            <section className="grid w-full md:w-3/5 bg-grey">
                <div className="w-full md:w-[65%] m-auto bg-white py-10">
                    
                    <div className="grid items-center w-10/12 md:w-[23.3rem] md:max-w-[90%] mx-auto">
                        <h3 className="font-raleway font-semibold text-2xl sm:text-3xl text-center md:text-[2rem] opacity-90 mb-1">Patient Login</h3>
                        <p className="font-normal text-center text-base md:text-lg opacity-90 font-raleway">And gain access to 400k worldwide medical specialists medical freedom</p>

                        <form className="form"  onSubmit={handleSubmit(async (data)=>{
                            await handleFormLogin(data, setError, clearErrors);
                        })}>
                            
                            { errors.notRegisteredInput && 
                                <div className="p-4 mb-4 text-sm text-red-800 font-medium rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                     {errors.notRegisteredInput.message}
                                </div>
                            }

                            <input className="custom-input w-full h-11 bg-grey-2 rounded-md" {...register('email', {required: 'This field is required', onChange: clearNonFieldError})} type="email" placeholder="Email Address" />
                            <p className="w-full text-start text-red-600" >{errors.email?.message}</p>


                            <input className="custom-input w-full h-11 bg-grey-2 rounded-md" {...register('password', {required: 'This field is required', onChange: clearNonFieldError})} type="password" placeholder="Password" />
                            <p className="w-full text-start text-red-600" >{errors.password?.message}</p>

                            <button className="w-full md:w-[min(24.7rem, 100%)] mt-9 rounded-md btn bg-secondary" type="submit" >Login as a patient</button>
                        </form>
                        <p>{isSubmitting? "form is submitting": "form is domant"}</p>

                        <div className="mt-10">
                            <Link className="block text-center text-grey-5" to="/register/patient">Don't have an account? Register</Link>
                            <a className="block text-center text-grey-5" href="">Forgot password?</a>
                        </div>
                    </div>

                </div>

            </section>
        </main>
    )
}

export default LoginPatient;