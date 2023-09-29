import checkIcon from "../../assets/check-icon.svg";

function RegisterPatient() {
    return (
        <main className="md:flex font-raleway">
            <section id="side-bar" className="register-img hidden w-2/5 md:block text-white h-[550px]" >
                <div className="mt-[6rem] w-[80%] mx-auto ">
                    <h2 className="mb-8 text-4xl font-railway">Gain access to 11k+ patients from all over Africa</h2>
                    <ul className="mb-9 ">
                        <li className="flex mb-3 gap-x-2 font-inter "><img src={checkIcon} alt="" />
                            premium e-medical tools
                        </li>
                        <li className="flex mb-3 gap-x-2 font-inter"><img src={checkIcon} alt="" />
                            advanced payment schedules
                        </li>
                        <li className="flex mb-3 gap-x-2 font-inter"><img src={checkIcon} alt="" />
                            24hrs customer service
                        </li>
                    </ul>
                    <a className="btn bg-main" href="">Login as a medical expert</a>
                </div>
            </section>

            <section className="grid w-full md:w-3/5 bg-grey">
                <div className="w-full md:w-[65%] m-auto bg-white py-10">
                    
                    <div className="grid items-center md:w-[23.3rem] max-w-[95%] mx-auto">
                        <h3 className="font-raleway font-semibold text-center text-[2rem] opacity-90 mb-1">Patient register</h3>
                        <p className="font-normal text-center opacity-90 font-raleway">And gain access to 400k worldwide medical specialists medical freedom</p>

                        <form className="flex flex-col items-center w-full mt-9 font-inter " action="" method="post">
                            
                            <input className="w-full h-11 bg-grey-2 rounded-md border-[1px] mb-5 border-grey-3 " type="email" name="" id="" placeholder="Email Address" />

                            <div className=" max-w-full w-full grid grid-cols-[auto_1fr]">
                                <select className=" bg-grey-4 rounded-md rounded-r-none border-r-0 border-[1px] mb-5 border-grey-3" name="" id="">
                                    <option value="">+234</option>
                                    <option value="">+22</option>
                                    <option value="">+235</option>
                                </select>
                                <input className=" bg-grey-2 flex-grow rounded-md rounded-l-none border-l-0 border-[1px] mb-5 border-grey-3 " type="number" placeholder="Phone number" />
                            </div>

                            <input className="w-full h-11 bg-grey-2 rounded-md border-[1px] mb-5 border-grey-3 " type="password" placeholder="Password" />

                            <button className="w-full mt-5 rounded-md btn bg-secondary" type="submit">Register as a patient</button>
                        </form>

                        <div className="mt-10">
                            <a className="block text-center text-grey-5" href="">Already have an account? Login</a>
                            <a className="block text-center text-grey-5" href="">Need emergency help?</a>
                        </div>
                    </div>

                </div>

            </section>
        </main>
    )
}

export default RegisterPatient;