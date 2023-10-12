import { Form, Link } from "react-router-dom";
import RegisterSidebar from "../../components/RegisterLoginSidebar";
import axios from "axios";

const baseURL = "http://127.0.0.1:8000/";

function RegisterPatient() {
    return (
        <main className="md:flex font-raleway md:h-[calc(100vh-3rem)]">
            <RegisterSidebar points={['premium e-medical tools', 'advanced payment schedules', '24hrs customer service']} btnClass={'bg-main'} btnText={'Login as a medical expert'} btnUrl={'/login/expert'} />

            <section className="grid w-full md:w-3/5 bg-grey">
                <div className="w-full md:w-[65%] m-auto bg-white py-10">
                    
                    <div className="grid items-center w-10/12 md:w-[23.3rem] md:max-w-[90%] mx-auto">
                        <h3 className="font-raleway font-semibold text-2xl sm:text-3xl text-center md:text-[2rem] opacity-90 mb-1">Patient register</h3>
                        <p className="text-base font-normal text-center md:text-lg opacity-90 font-raleway">And gain access to 400k worldwide medical specialists medical freedom</p>

                        <Form className="flex flex-col items-center w-full overflow-auto mt-9 font-inter" action="/register/patient" method="post">
                            
                            <input className="w-full rounded-md custom-input h-11 bg-grey-2" type="email" name="email" placeholder="Email Address" />

                            <div className="grid grid-cols-[minmax(0,6.5rem)_minmax(0,1fr)] w-full group">
                                <select className="border-r-0 rounded-md rounded-r-none custom-input group-focus-within:input-hover bg-grey-4 " name="phone_country_code" >
                                    <option value="">+234</option>
                                    <option value="">+22</option>
                                    <option value="">+235</option>
                                </select>
                                <input className="border-l-0 rounded-md rounded-l-none custom-input group-focus-within:input-hover bg-grey-2" type="number" name="phone_number" placeholder="Phone number" />
                            </div>

                            <input className="w-full rounded-md custom-input h-11 bg-grey-2 " type="password" name="password" placeholder="Password" />

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


async function RegisterPatientAction({request}){
    const data = await request.formData();

    let response = await axios.post(baseURL + 'api/auth/register/', {
        email: data.get('email'),
        phone_number: data.get('phone_number'),
        password: data.get('password'),
    });

    console.log(response);
    return null;

}


export default RegisterPatient;
export { RegisterPatientAction };