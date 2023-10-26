import { Link, useNavigate } from "react-router-dom";
import RegisterSidebar from "../../components/RegisterLoginSidebar";
import handleFormLogin from "../../utils/handleFormLogin";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setCredentails } from "../../redux/authSlice";


function LoginExpert() {

    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const {register, handleSubmit, setError, clearErrors,
        formState: {errors, isSubmitting}} = useForm();

    // clear nonRegisterdFieldInput error if it has errors
    let clearNonFieldError = ()=> errors.notRegisteredInput && clearErrors('notRegisteredInput')

  return (
    <main className="md:flex font-raleway md:h-[calc(100vh-3rem)]">
            <RegisterSidebar points={["Fully registered and certified","24hrs check up time", "24hrs customer service"]} btnClass={'bg-secondary rounded-md'} btnText={'Login as a patient'} btnUrl={'/login/patient'}/>

        <section className="grid w-full md:w-3/5 bg-grey">
            <div className="w-full md:w-[65%] m-auto bg-white py-10">
                
                <div className="grid items-center w-10/12 md:w-[23.3rem] md:max-w-[90%] mx-auto">
                    <h3 className="font-raleway font-semibold text-2xl sm:text-3xl text-center md:text-[2rem] opacity-90 mb-1">Expert Login</h3>
                    <p className="font-normal text-center text-base md:text-lg opacity-90 font-raleway">gain access to patients from all over Africa</p>

                    <form className="form"  onSubmit={handleSubmit(async (data)=>{
                            let response = await handleFormLogin(data, setError, clearErrors);
                            if (response) {
                                dispatch(setCredentails({refreshToken: response.refresh, accessToken: response.access}));
                                navigate('/dashboard');
                            }
                        })}>
                        
                        { errors.notRegisteredInput && 
                            <div className="p-4 mb-4 text-sm font-medium text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    {errors.notRegisteredInput.message}
                            </div>
                        }

                        <input className="w-full rounded-md custom-input h-11 bg-grey-2" {...register('email', {required: 'This field is required', onChange: clearNonFieldError})} type="email" placeholder="Email Address" />
                        <p className="w-full text-red-600 text-start" >{errors.email?.message}</p>


                        <input className="w-full rounded-md custom-input h-11 bg-grey-2" {...register('password', {required: 'This field is required', onChange: clearNonFieldError})} type="password" placeholder="Password" />
                        <p className="w-full text-red-600 text-start" >{errors.password?.message}</p>

                        <button className="w-full md:w-[min(24.7rem, 100%)] mt-9  rounded-md btn bg-secondary md:bg-main [text-wrap:balance]" type="submit" disabled={isSubmitting}>Login as a medical expert</button>
                    </form>

                    <div className="mt-10">
                        <Link className="block text-center text-grey-5" to="/register/expert">Don’t have an account? Register</Link>
                        <a className="block text-center text-grey-5" href="">Forgot password?</a>
                    </div>
                </div>

            </div>

        </section>
    </main>
  )
}

export default LoginExpert;