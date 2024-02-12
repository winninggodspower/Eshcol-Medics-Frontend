import { Link } from "react-router-dom";
import handleFormRegister from "../../utils/handleFormRegister";
import RegisterSidebar from "../../components/RegisterLoginSidebar";
import { useForm } from "react-hook-form";


function RegisterExpert() {

    const {register, handleSubmit, setError, 
        formState: {errors, isSubmitting}} = useForm({
            defaultValues: {
                email: '',
                phone_number: '',
                password: '',
            }
        });

  return (
    <main className="md:flex font-raleway md:h-[calc(100vh-3rem)]">
            <RegisterSidebar points={["Fully registered and certified","24hrs check up time", "24hrs customer service"]} btnClass={'bg-secondary rounded-md'} btnText={'Login as a patient'} btnUrl={'/login/patient'}/>

        <section className="grid w-full md:w-3/5 bg-grey">
            <div className="w-full md:w-[65%] m-auto bg-white py-10">
                
                <div className="grid items-center w-10/12 md:w-[23.3rem] md:max-w-[90%] mx-auto">
                    <h3 className="font-raleway font-semibold text-2xl sm:text-3xl text-center md:text-[2rem] opacity-90 mb-1">Expert register</h3>
                    <p className="font-normal text-center text-base md:text-lg opacity-90 font-raleway">gain access to patients from all over Africa</p>

                    <form className="form" onSubmit={handleSubmit(async (data)=>{
                            let response = await handleFormRegister(data, setError, true);
                            if (response) {
                                console.log('redirecting to dashboard');
                                return redirect('/login');
                            }
                    })}>
                        <input className="w-full rounded-md custom-input h-11 bg-grey-2 " type="email" {...register('email', {required: "This field is required"})} placeholder="Email address" />
                        <p className="w-full text-start text-red-600" >{errors.email?.message}</p>

                        <div className="grid grid-cols-[minmax(0,6.5rem)_minmax(0,1fr)] w-full group">
                            <select className="border-r-0 rounded-md rounded-r-none custom-input group-focus-within:input-hover bg-grey-4 " name="phone_country_code" >
                                <option value="">+234</option>
                                <option value="">+22</option>
                                <option value="">+235</option>
                            </select>
                            <input className="border-l-0 rounded-md rounded-l-none custom-input group-focus-within:input-hover bg-grey-2" type="number" {...register('phone_number', {required: "This field is required"})} placeholder="Phone number"/>
                        </div>
                        <p className="w-full text-start text-red-600" >{errors.phone_number?.message}</p>

                        <input className="w-full rounded-md custom-input h-11 bg-grey-2 " type="password" {...register('password', {required: "This field is required"})} placeholder="Password" />
                        <p className="w-full text-start text-red-600" >{errors.password?.message}</p>

                        <button className="w-full md:w-[min(24.7rem, 100%)] rounded-md mt-9 btn bg-secondary" type="submit" disabled={isSubmitting} >Register as a patient</button>
                </form>

                    <div className="mt-10">
                        <Link className="block text-center text-grey-5" to="/login/expert">Already have an account? Login</Link>
                    </div>
                </div>

            </div>

        </section>
    </main>
  )
}

export default RegisterExpert;