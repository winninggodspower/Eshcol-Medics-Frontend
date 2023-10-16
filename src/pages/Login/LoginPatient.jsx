import { Form, Link } from "react-router-dom";
import RegisterSidebar from "../../components/RegisterLoginSidebar";

function LoginPatient() {
    return (
        <main className="md:flex font-raleway md:h-[calc(100vh-3rem)]">
            <RegisterSidebar points={['premium e-medical tools', 'advanced payment schedules', '24hrs customer service']} btnClass={'bg-main'} btnText={'Login as a medical expert'} btnUrl={'/login/expert'} />

            <section className="grid w-full md:w-3/5 bg-grey">
                <div className="w-full md:w-[65%] m-auto bg-white py-10">
                    
                    <div className="grid items-center w-10/12 md:w-[23.3rem] md:max-w-[90%] mx-auto">
                        <h3 className="font-raleway font-semibold text-2xl sm:text-3xl text-center md:text-[2rem] opacity-90 mb-1">Patient Login</h3>
                        <p className="font-normal text-center text-base md:text-lg opacity-90 font-raleway">And gain access to 400k worldwide medical specialists medical freedom</p>

                        <Form className="form" action="" method="post">
                            
                            <input className=" custom-input w-full h-11 bg-grey-2 rounded-md" type="email" name="email" placeholder="Email Address" />

                            <input className="custom-input w-full h-11 bg-grey-2 rounded-md " type="password" name="password" placeholder="Password" />

                            <button className="w-full md:w-[min(24.7rem, 100%)] mt-9 rounded-md btn bg-secondary" type="submit">Login as a patient</button>
                        </Form>

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