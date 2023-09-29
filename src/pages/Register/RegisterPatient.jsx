
function RegisterPatient() {
    return (
        <main className="md:flex ">
            <section id="side-bar" className="hidden w-2/5 md:block text-white bg-[url(assets/register-background.png)]" >
                <div>
                    <h2 className="text-4xl">Gain access to 11k+ patients from all over Africa</h2>
                    <ul>
                        <li><img src="Frame.svg" alt="" />
                            premium e-medical tools
                        </li>
                        <li><img src="Frame.svg" alt="" />
                            advanced payment schedules
                        </li>
                        <li><img src="Frame.svg" alt="" />
                            24hrs customer service
                        </li>
                    </ul>
                    <a href="">Login as a medical expert</a>
                </div>
            </section>

            <section className="md:w-auto">
                <h3>Patient register</h3>
                <p>And gain access to 400k worldwide medical specialists medical freedom</p>

                <form action="" method="post">
                    <input type="email" name="" id="" placeholder="Email Address" />

                    <div>
                        <select name="" id="">
                            <option value="">+234</option>
                            <option value="">+22</option>
                            <option value="">+235</option>
                        </select>
                        <input type="number" placeholder="Phone number" />
                    </div>

                    <input type="password" placeholder="Password" />

                    <button type="submit">Register as a patient</button>
                </form>

                <a href="">Already have an account? Login</a>
                <a href="">Need emergency help?</a>

            </section>
        </main>
    )
}

export default RegisterPatient;