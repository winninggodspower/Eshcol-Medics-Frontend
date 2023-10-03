import { Form, Link } from "react-router-dom";
import RegisterSidebar from "../../components/RegisterLoginSidebar";

function RegisterPatient() {
    return (
        <main className="md:flex font-raleway md:h-[calc(100vh-3rem)]">
            <RegisterSidebar points={['premium e-medical tools', 'advanced payment schedules', '24hrs customer service']} btnClass={'bg-main'} btnText={'Login as a medical expert'} btnUrl={'/login/expert'} />

            <section className="grid w-full md:w-3/5 bg-grey">
                <div className="w-full md:w-[65%] m-auto bg-white py-10">
                    
                    <div className="grid items-center w-10/12 md:w-[23.3rem] md:max-w-[90%] mx-auto">
                        <h3 className="font-raleway font-semibold text-2xl sm:text-3xl text-center md:text-[2rem] opacity-90 mb-1">Patient register</h3>
                        <p className="font-normal text-center text-base md:text-lg opacity-90 font-raleway">And gain access to 400k worldwide medical specialists medical freedom</p>

                        <Form className="flex flex-col items-center w-full mt-9 font-inter overflow-auto" action="" method="post">
                            
                            <input className=" custom-input w-full h-11 bg-grey-2 rounded-md" type="email" name="email" placeholder="Email Address" />

                            <div className="grid grid-cols-[minmax(0,6.5rem)_minmax(0,1fr)] w-full group">
                                <select className="custom-input group-focus-within:input-hover  bg-grey-4 rounded-md rounded-r-none border-r-0 " name="phone_country_code" >
                                    <option value="">+234</option>
                                    <option value="">+22</option>
                                    <option value="">+235</option>
                                </select>
                                <input className="custom-input group-focus-within:input-hover bg-grey-2 rounded-md rounded-l-none border-l-0" type="number" name="phone_number" placeholder="Phone number" />
                            </div>

                            <input className="custom-input w-full h-11 bg-grey-2 rounded-md " type="password" name="password" placeholder="Password" />

                            <button className="w-full md:w-[min(24.7rem, 100%)] mt-5 rounded-md btn bg-secondary" type="submit">Register as a patient</button>
                        </Form>

                        <div className="mt-10">
                            <Link className="block text-center text-grey-5" to="/login/patient">Already have an account? Login</Link>
                            <a className="block text-center text-grey-5" href="">Need emergency help?</a>
                        </div>
                    </div>

                </div>

            </section>
        </main>
    )
}

export default RegisterPatient;