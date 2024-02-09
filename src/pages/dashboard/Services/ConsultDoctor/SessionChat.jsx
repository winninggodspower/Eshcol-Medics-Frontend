import React from 'react'
import profileAvatar from "../../../../assets/avatar.png"

function SessionChat() {
  return (
    <div className='flex h-full'>
      <div id="chat" className='grow md:border-e-4 h-full'>
        
        <div className='flex items-center py-3 sm:py-5 ps-6 sm:ps-10 gap-2 sm:gap-4 '>
          <div className='relative'>
            <img className='rounded-full w-[35px] sm:w-[50px]' src={profileAvatar} alt="" />
            <span class="bottom-0 right-0 absolute  w-4 h-4 bg-Green-3 rounded-full"></span>
          </div>
         <h4 className='font-inter font-semibold text-sm sm:text-lg'> Dr Zerebyakov Elivish</h4>
        </div>
        <hr  className='h-8 '/>

        <div className='w-[85%] md:w-[90%] mx-auto font-inter'>
          <div className='w-9/12 sm:w-7/12 bg-[#D9D9D9] text-[#5D6066] text-xs md:text-base p-5 shadow-[0px_4px_120px_rgba(58,86,78,0.15)] mb-7 sm:mb-12 rounded-e-3xl rounded-ss-3xl'>
            Good day,how can i help you?
          </div>

          <div className='w-9/12 sm:w-7/12 bg-[#394FE1] text-white text-xs md:text-base p-5 shadow-[0px_4px_120px_rgba(58,86,78,0.15)] float-right mb-7 sm:mb-12 rounded-s-3xl rounded-se-3xl' >
            I’m having blisters on my eyes
          </div>
        </div>
      </div>

      <div id="doctor-details" className='hidden md:block w-[44%] border-e-4 h-full'>
        details
      </div>
    </div>
  )
}

export default SessionChat
