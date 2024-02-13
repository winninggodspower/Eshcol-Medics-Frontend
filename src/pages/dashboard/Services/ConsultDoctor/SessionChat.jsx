import React from 'react'
import profileAvatar from "../../../../assets/avatar.png"

function SessionChat() {
  return (
    <div className='flex h-full'>

      <div id="chat" className='grow relative md:border-e-4 h-full'>

        <div className='flex items-center py-3 sm:py-5 ps-6 sm:ps-10 gap-2 sm:gap-4 '>
          <div className='relative'>
            <img className='rounded-full w-[35px] sm:w-[50px]' src={profileAvatar} alt="" />
            <span class="bottom-0 right-0 absolute  w-4 h-4 bg-Green-3 rounded-full"></span>
          </div>
          <h4 className='font-inter font-semibold text-sm sm:text-lg'> Dr Zerebyakov Elivish</h4>
        </div>
        <hr className='h-0 ' />

        <p className="text-center my-7 md:mt-8 md:mb-14 font-inter text-xs md:text-sm text-[#9CA6AE]">Dr Zerebyakov is typing....</p>

        <div className='w-[85%] md:w-[90%] mx-auto font-inter'>
          <div className='w-9/12 sm:w-7/12 bg-[#D9D9D9] text-[#5D6066] text-xs md:text-base p-5 shadow-[0px_4px_120px_rgba(58,86,78,0.15)] mb-7 sm:mb-12 rounded-e-3xl rounded-ss-3xl'>
            Good day,how can i help you?
          </div>

          <div className='w-9/12 sm:w-7/12 bg-[#394FE1] text-white text-xs md:text-base p-5 shadow-[0px_4px_120px_rgba(58,86,78,0.15)] float-right mb-7 sm:mb-12 rounded-s-3xl rounded-se-3xl' >
            I’m having blisters on my eyes
          </div>
        </div>

        <div className='w-full absolute bottom-0 h-18 self-center bg-red-300'>
          <div className='py-6 bg-grey-3 '>
            <form action="">
              he
            </form>
          </div>
        </div>

      </div>

      <div id="doctor-details" className='hidden md:block w-[44%] border-e-4 h-full'>
        <h4 className='text-center mt-6 font-inter font-semibold text-sm sm:text-lg'> Dr Zerebyakov Elivish</h4>

        <div className='grid justify-center mt-8'>
          <img className='mx-auto' src={profileAvatar} alt="" />

          <div className='mt-6'>
            <div className='flex mb-2 gap-4'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="black" />
                <path d="M11 11H13V17H11V11ZM11 7H13V9H11V7Z" fill="black" />
              </svg>
              Dr Zerebyakov Elivish
            </div>
            <div className='flex mb-2 gap-4'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H6C4.897 2 4 2.897 4 4V21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22H19C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21V4C20 2.897 19.103 2 18 2ZM18 20H6V4H18V20Z" fill="black" />
                <path d="M8 6H11V8H8V6ZM13 6H16V8H13V6ZM8 10H11V12H8V10ZM13 10.031H16V12H13V10.031ZM8 14H11V16H8V14ZM13 14H16V16H13V14Z" fill="black" />
              </svg>
              Empire Hospital
            </div>
            <div className='flex mb-2 gap-4'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V7H2V9H4V11H2V13H4V15H2V17H4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2ZM13 4.999C14.648 4.999 16 6.35 16 7.999C15.9971 8.79385 15.6801 9.55533 15.1182 10.1175C14.5562 10.6796 13.7948 10.9968 13 11C11.353 11 10 9.647 10 7.999C10 6.35 11.353 4.999 13 4.999ZM19 18H7V17.25C7 15.031 9.705 12.75 13 12.75C16.295 12.75 19 15.031 19 17.25V18Z" fill="black" />
              </svg>
              <span>
                Hospitals details
                <div >+234567579548</div>
              </span>
            </div>
          </div>
        </div>

        <div className='mt-6 grid gap-y-5 justify-center'>
          <button className='btn flex gap-4 rounded-3xl bg-[#FFD700]'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            View medical certificate
          </button>
          <button className='btn flex gap-4 rounded-3xl bg-[#394FE1]'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5.83301 8.3335L9.99967 12.5002L14.1663 8.3335" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 12.5V2.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            View medical certificate
          </button>
          <button className='btn flex gap-4 rounded-3xl bg-[#352E43]'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 6L18 18" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            View medical certificate
          </button>
          <button className='btn flex gap-4 rounded-3xl bg-[#FC3D39]'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33301 12.4998C3.33301 12.4998 4.16634 11.6665 6.66634 11.6665C9.16634 11.6665 10.833 13.3332 13.333 13.3332C15.833 13.3332 16.6663 12.4998 16.6663 12.4998V2.49984C16.6663 2.49984 15.833 3.33317 13.333 3.33317C10.833 3.33317 9.16634 1.6665 6.66634 1.6665C4.16634 1.6665 3.33301 2.49984 3.33301 2.49984V12.4998Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.33301 18.3333V12.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            View medical certificate
          </button>
        </div>
      </div>
    </div>
  )
}

export default SessionChat
