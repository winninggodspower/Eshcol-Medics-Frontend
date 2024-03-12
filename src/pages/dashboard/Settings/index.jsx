import avatarImage from "../../../assets/avatar-2.png"
import { Link } from "react-router-dom";
import CustomPageHeader from "../../../components/CustomPageHeader";

function EditIcon() {
  return (
    <svg className='hidden md:block me-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.7">
        <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function Settings() {
  return (
      <div className='bg-white grow md:border-e-4'>
        <CustomPageHeader title={'Settings?'}/>

        <div className=' mt-[22px] md:mt-11'>
          <div>
            <img className='mx-auto w-[100px] h-[100px] md:w-[120px] md:h-[120px]' src={avatarImage} alt="" />
            <h3 className='text-base text-center font-inter md:text-2xl md:mt-[26px] mt-[19px]'>Wade Warren</h3>
          </div>
        </div>

        <div className='mt-[42px] md:mt-[34px] font-inter'>
          <div className="flex justify-between border border-grey-8 w-[90%] md:w-[83%] max-w-[519px] mx-auto py-5 px-8">
            <div className='flex items-center text-sm gap-7 md:text-xl'>
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17.5" cy="17.5" r="17.5" fill="#352E43" />
                <g clipPath="url(#clip0_70_3221)">
                  <path d="M17.5 24.5C21.366 24.5 24.5 21.366 24.5 17.5C24.5 13.634 21.366 10.5 17.5 10.5C13.634 10.5 10.5 13.634 10.5 17.5C10.5 21.366 13.634 24.5 17.5 24.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.6992 18.8999C14.6992 18.8999 15.7492 20.2999 17.4992 20.2999C19.2492 20.2999 20.2992 18.8999 20.2992 18.8999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.4004 15.3999H15.4074" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19.5996 15.3999H19.6066" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_70_3221">
                    <rect width="16.8" height="16.8" fill="white" transform="translate(9.09961 9.1001)" />
                  </clipPath>
                </defs>
              </svg>
              Personal information
            </div>
            <Link to={'personal-information'} >
              <EditIcon />
            </Link>
          </div>

          <div className="flex justify-between border border-grey-8 w-[90%] md:w-[83%] max-w-[519px] mx-auto py-5 px-8 mt-[15px]">
            <div className='flex items-center text-sm gap-7 md:text-xl'>
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17.5" cy="17.5" r="17.5" fill="#352E43" />
                <g clipPath="url(#clip0_70_3229)">
                  <path d="M23.7988 11.8999H11.1988C10.4256 11.8999 9.79883 12.5267 9.79883 13.2999V21.6999C9.79883 22.4731 10.4256 23.0999 11.1988 23.0999H23.7988C24.572 23.0999 25.1988 22.4731 25.1988 21.6999V13.2999C25.1988 12.5267 24.572 11.8999 23.7988 11.8999Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.79883 16.1001H25.1988" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_70_3229">
                    <rect width="16.8" height="16.8" fill="white" transform="translate(9.09961 9.1001)" />
                  </clipPath>
                </defs>
              </svg>
              Billing information
            </div>
            <Link to={'billing-information'} >
              <EditIcon />
            </Link>
          </div>

          <div className="flex justify-between border border-grey-8 w-[90%] md:w-[83%] max-w-[519px] mx-auto py-5 px-8 mt-[15px]">
            <div className='flex items-center text-sm gap-7 md:text-xl'>
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17.5" cy="17.5" r="17.5" fill="#352E43" />
                <path d="M23.1004 23.8001V22.4001C23.1004 21.6575 22.8054 20.9453 22.2803 20.4202C21.7552 19.8951 21.043 19.6001 20.3004 19.6001H14.7004C13.9578 19.6001 13.2456 19.8951 12.7205 20.4202C12.1954 20.9453 11.9004 21.6575 11.9004 22.4001V23.8001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.4992 16.8002C19.0456 16.8002 20.2992 15.5466 20.2992 14.0002C20.2992 12.4538 19.0456 11.2002 17.4992 11.2002C15.9528 11.2002 14.6992 12.4538 14.6992 14.0002C14.6992 15.5466 15.9528 16.8002 17.4992 16.8002Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Next of kin
            </div>
            <EditIcon />
          </div>

          <div className="flex justify-between border border-grey-8 w-[90%] md:w-[83%] max-w-[519px] mx-auto py-5 px-8 mt-[15px]">
            <div className='flex items-center text-sm gap-7 md:text-xl'>
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17.5" cy="17.5" r="17.5" fill="#352E43" />
                <g clipPath="url(#clip0_70_3247)">
                  <path d="M21.5833 16.9165H13.4167C12.7723 16.9165 12.25 17.4388 12.25 18.0832V22.1665C12.25 22.8108 12.7723 23.3332 13.4167 23.3332H21.5833C22.2277 23.3332 22.75 22.8108 22.75 22.1665V18.0832C22.75 17.4388 22.2277 16.9165 21.5833 16.9165Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.584 16.9165V14.5832C14.584 13.8096 14.8913 13.0678 15.4383 12.5208C15.9852 11.9738 16.7271 11.6665 17.5007 11.6665C18.2742 11.6665 19.0161 11.9738 19.563 12.5208C20.11 13.0678 20.4173 13.8096 20.4173 14.5832V16.9165" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_70_3247">
                    <rect width="14" height="14" fill="white" transform="translate(10.5 10.5)" />
                  </clipPath>
                </defs>
              </svg>

              Security
            </div>
            <EditIcon />
          </div>

        </div>
      </div>
  )
}

export default Settings