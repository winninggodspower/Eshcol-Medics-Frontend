import profileAvater from "../assets/profile-avatar.svg"
import blurredAvater from "../assets/blurred-avatar.png"
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";


function DashboardSideBar() {

  const closeSideBar = ()=>{
    console.log('close sidebar');
    document.querySelector('aside').classList.add('-translate-x-full')
  }

  const userInformation = useSelector((state) => state.auth.userInformation);

  return (
    <aside className='w-full md:w-[30%] sm:w-2/6 md:min-w-fit md:min-h-[calc(100vh-4.65rem)] font-inter border-e-4 fixed -translate-x-full md:static md:translate-x-0 overflow-x-hidden bg-white transition-transform duration-500 md:duration-0 z-10'>
      
      <div className="absolute top-0 right-0 mt-3 mr-5 cursor-pointer md:hidden" onClick={closeSideBar}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 6L18 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="flex items-center gap-5 py-6 ps-12">
        <img src={profileAvater} style={{ width: "4.625rem" }} />
        <div className="">
          <p className="text-lg leading-none">Username</p>
          <span className="text-sm font-light leading-none text-secondary"> <Link to={'/logout'}> Sign out </Link></span>
        </div>
      </div>

      <div className="pt-2 pb-10 md:pb-8">
        <div className="flex items-center justify-center gap-2 mb-2 md:justify-start md:ps-20 md:mb-3 ">
          <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "1.5rem" }} viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_835_1879)">
              <path d="M21.0001 6C21.0001 5.20435 20.684 4.44129 20.1214 3.87868C19.5588 3.31607 18.7957 3 18.0001 3H6.00006C5.39605 3.00358 4.80718 3.1894 4.31052 3.53315C3.81385 3.8769 3.43251 4.36257 3.21641 4.92661C3.0003 5.49065 2.95949 6.10679 3.09931 6.6944C3.23913 7.28202 3.55307 7.81374 4.00006 8.22V18C4.00006 18.7956 4.31613 19.5587 4.87874 20.1213C5.44135 20.6839 6.20441 21 7.00006 21H17.0001C17.7957 21 18.5588 20.6839 19.1214 20.1213C19.684 19.5587 20.0001 18.7956 20.0001 18V8.22C20.3127 7.94042 20.5632 7.59839 20.7354 7.21601C20.9077 6.83363 20.9978 6.41938 21.0001 6ZM6.00006 5H18.0001C18.2653 5 18.5196 5.10536 18.7072 5.29289C18.8947 5.48043 19.0001 5.73478 19.0001 6C19.0001 6.26522 18.8947 6.51957 18.7072 6.70711C18.5196 6.89464 18.2653 7 18.0001 7H6.00006C5.73484 7 5.48049 6.89464 5.29295 6.70711C5.10542 6.51957 5.00006 6.26522 5.00006 6C5.00006 5.73478 5.10542 5.48043 5.29295 5.29289C5.48049 5.10536 5.73484 5 6.00006 5ZM18.0001 18C18.0001 18.2652 17.8947 18.5196 17.7072 18.7071C17.5196 18.8946 17.2653 19 17.0001 19H7.00006C6.73484 19 6.48049 18.8946 6.29295 18.7071C6.10542 18.5196 6.00006 18.2652 6.00006 18V9H18.0001V18Z" fill="black" />
              <path d="M14.13 12H9.87C9.38951 12 9 12.3895 9 12.87V13.13C9 13.6105 9.38951 14 9.87 14H14.13C14.6105 14 15 13.6105 15 13.13V12.87C15 12.3895 14.6105 12 14.13 12Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_835_1879">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="text-base leading-none">{userInformation.user_type == 'patient' ? 'Medical history' : 'Patient history'}</p>
        </div>

        <div className="flex justify-center items-center md:justify-start md:ps-[6.8rem] gap-1">
          <img src={blurredAvater} style={{ width: "1.875rem" }} />
          <span className="text-sm italic leading-none opacity-50">Nothing to show here</span>
        </div>
      </div>


      <div className="border-t-2">
        <NavLink to={'/dashboard/services'} className={({ isActive }) => "flex gap-5 border-b-2 py-7 ps-20 " + (isActive && "text-white bg-secondary") } >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 22V12H15V22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-base leading-none">Home</p>
        </NavLink>
        <NavLink to={'/dashboard/how-to-use'} className={({ isActive }) => "flex gap-5 border-b-2 py-7 ps-20 " + (isActive && "text-white bg-secondary") }>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16V12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8H12.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-base leading-none">How to use?</p>
        </NavLink>
        <NavLink to={`/dashboard/${userInformation.user_type == 'patient' ? 'medical-prescriptions' : 'prescribe'}`} className={({ isActive }) => "flex gap-5 border-b-2 py-7 ps-20 " + (isActive && "text-white bg-secondary") }>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 9H9V15H15V9Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-base leading-none">{userInformation.user_type == 'patient' ? 'Medical Prescriptions' : 'Prescribe'}</p>
        </NavLink>
        <NavLink to={'/dashboard/settings'} className={({ isActive }) => "flex gap-5 border-b-2 py-7 ps-20 " + (isActive && "text-white bg-secondary") }>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <g clipPath="url(#clip0_835_1860)">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_835_1860">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="text-base leading-none">Settings</p>
        </NavLink>
      </div>
    </aside>
  )
}

export default DashboardSideBar;
