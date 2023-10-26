import { Link } from "react-router-dom"

function RegisterIndividualOrHospital() {
  return (
    <section className="w-full max-w-[90%] mx-auto pb-5 md:pt-24 pt-24 font-inter min-h-[calc(100vh-7.6rem)] md:h-[calc(100vh-4.65rem)]">

      <div className="mb-4 md:mb-16">
        <h3 className="pb-5 text-2xl font-semibold leading-none text-center font-railway md:pb-2">How do you want to register</h3>
        <p className="text-sm font-normal leading-none text-center md:text-base ">Are you part of a company or an individual</p>
      </div>

      <div className="flex items-center justify-center gap-6">

        <div className="flex flex-col items-center gap-5 md:gap-8">
          <div className="register-as-circle bg-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[34px] h-[34px] md:w-[45px] md:h-[45px]" viewBox="0 0 50 50" fill="none">
              <g clip-path="url(#clip0_81_4069)">
                <path d="M6.25 43.75H43.75" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.4167 43.75V10.4167C10.4167 9.3116 10.8557 8.25179 11.6371 7.47039C12.4185 6.68899 13.4783 6.25 14.5834 6.25H35.4167C36.5218 6.25 37.5816 6.68899 38.363 7.47039C39.1444 8.25179 39.5834 9.3116 39.5834 10.4167V43.75" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.75 43.75V35.4167C18.75 34.3116 19.189 33.2518 19.9704 32.4704C20.7518 31.689 21.8116 31.25 22.9167 31.25H27.0833C28.1884 31.25 29.2482 31.689 30.0296 32.4704C30.811 33.2518 31.25 34.3116 31.25 35.4167V43.75" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.8333 18.75H29.1666" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25 14.5834V22.9167" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_81_4069">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <button className="px-0 py-0 text-black md:py-3 md:px-6 btn-short md:bg-secondary md:text-white">I work with a hospital</button>
        </div>

        <div className="hidden text-2xl font-semibold leading-none font-raleway md:block" >
          or
        </div>

        <div className="flex flex-col items-center gap-5 md:gap-8">
          <div className="register-as-circle bg-main">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[34px] h-[34px] md:w-[45px] md:h-[45px]" viewBox="0 0 50 50" fill="none">
              <g clip-path="url(#clip0_81_4076)">
                <path d="M25.0001 22.9167C29.6025 22.9167 33.3334 19.1857 33.3334 14.5833C33.3334 9.98096 29.6025 6.25 25.0001 6.25C20.3977 6.25 16.6667 9.98096 16.6667 14.5833C16.6667 19.1857 20.3977 22.9167 25.0001 22.9167Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.5 43.75V39.5833C12.5 37.3732 13.378 35.2536 14.9408 33.6908C16.5036 32.128 18.6232 31.25 20.8333 31.25H29.1667C31.3768 31.25 33.4964 32.128 35.0592 33.6908C36.622 35.2536 37.5 37.3732 37.5 39.5833V43.75" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_81_4076">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <button className="px-0 py-0 text-black md:py-3 md:px-6 btn-short md:bg-main md:text-white" >I work alone</button>
        </div>
      </div>
    </section>
  )
}

export default RegisterIndividualOrHospital;