import { Link } from "react-router-dom"
import siteLogo from "../assets/site-logo.png"

function Navbar() {

  return (
    <nav className="bg-secondary font-inter" >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-[0.6rem]">
            <Link to="/" className="flex items-center">
                <img src={siteLogo} className="h-[3.125rem] mr-3" alt="Eshcol-Medics Logo" />
            </Link>
            <div className="flex md:order-2">
                <Link type="button"
                    className="hidden login-botton md:block"
                    style={{backgroundColor: "white"}} to={'/login'}>Login
                </Link>
                <button data-collapse-toggle="navbar-cta" type="button"
                    className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-400 rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-gray-700focus:ring-gray-600 "
                    aria-controls="navbar-cta" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <div className="relative px-4 mt-4 md:mt-0">
                    {/* search icon svg */}
                    <svg className='absolute text-xl text-white translate-y-1/2 bottom-1/2 focus:outline-0' width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <circle cx="8.625" cy="8.625" r="7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.4375 13.8383L17.8125 18.2134" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input className=' pl-8 bg-transparent border-0 border-b w-full md:w-[10.7rem] text-white' placeholder='Search' type="text" name="" id="" />
                </div>
                <ul
                    className="flex flex-col p-4 mt-2 font-medium md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                        <a href="#"
                            className="navlink"
                            aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#"
                            className="navlink">Emergency
                            service</a>
                    </li>
                    <li>
                        <a href="#"
                            className="navlink">Nursing
                            services</a>
                    </li>
                    <li>
                        <a href="#"
                            className="navlink">Ambulance
                            services</a>
                    </li>
                    <Link type="button"
                        className="login-botton md:hidden"
                        style={{backgroundColor: "white"}} to={'/login'}>Login
                    </Link>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
