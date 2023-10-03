import { Link } from "react-router-dom";
import checkIcon from "../assets/check-icon.svg";

function RegisterSidebar({points, btnClass, btnText, btnUrl}) {

  return (
    <section id="side-bar" className="register-img hidden w-2/5 md:block text-white h-full" >
        <div className="mt-[6rem] w-[80%] mx-auto ">
            <h2 className="mb-8 text-4xl font-railway">Gain access to 11k+ patients from all over Africa</h2>
            <ul className="mb-9 ">
                {
                points.map((point, index)=>{
                    return <li key={index} className="flex mb-3 gap-x-2 font-inter"><img src={checkIcon} alt="" />
                        {point}
                    </li>
                })
                }
               
            </ul>
            <Link className={`btn ${btnClass} `} to={btnUrl}>{btnText}</Link>
        </div>
    </section>
  )
}

export default RegisterSidebar;
