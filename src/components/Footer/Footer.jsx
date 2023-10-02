import React from 'react'

function Footer() {
  return (    
    <footer className="bg-secondary text-white px-4 font-inter relative">
        <div className="w-full mx-auto p-4 flex items-center justify-center md:justify-between">
            <span className="text-xs md:text-sm text-center opacity-70">© Brooke Eschol systems 2022
            </span>
            <ul className="hidden md:flex flex-wrap items-center absolute left-1/2 -translate-x-1/2 ">
                <li>
                    <a href="#" className="mr-5 text-sm">Home  </a>
                </li>
                <li>
                    <a href="#" className="mr-5 text-sm">Register as a medical expert</a>
                </li>
                <li>
                    <a href="#" className="mr-5 text-sm">FAQS</a>
                </li>
                <li>
                    <a href="#" className="mr-5 text-sm">Terms and conditions</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer;
