import React from 'react'
import profileAvatar from "../../../../assets/avatar.png"
import ChatBubble from '../../../../components/ChatBubble'
import UserProfile from './UserProfile'

function SessionChat() {
  return (
    <div className='flex h-full'>

      <div id="chat" className='relative h-full grow md:border-e-4'>

        <div className='flex items-center gap-2 py-3 sm:py-5 ps-6 sm:ps-10 sm:gap-4 '>
          <div className='relative'>
            <img className='rounded-full w-[35px] sm:w-[50px]' src={profileAvatar} alt="" />
            <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-Green-3"></span>
          </div>
          <h4 className='text-sm font-semibold font-inter sm:text-lg'> Dr Zerebyakov Elivish</h4>
        </div>
        <hr className='h-0 ' />

        <p className="text-center my-7 md:mt-8 md:mb-14 font-inter text-xs md:text-sm text-[#9CA6AE]">Dr Zerebyakov is typing....</p>

        <div className='w-[85%] md:w-[90%] mx-auto font-inter'>
          <ChatBubble sender={false} message={'Good day,how can i help you?'} />
          <ChatBubble sender={true} message={'I’m having blisters on my eyes'} />
        </div>

        <div className="absolute bottom-0 w-full py-6 before:content-[''] before:block before:absolute before:bottom-0 before:start-0 before:w-full before:h-full before:bg-grey-3  before:opacity-70">
          <form action="" className='w-[83%] mx-auto h-14 relative'>
            <input className='w-full rounded-3xl h-full bg-[rgba(108,108,108,.4)] border-0 md:ps-24 ps-5 text-black/50 font-inter' type="text" />
            <button  className="absolute left-0 w-20 h-full bg-tertiary rounded-3xl">
              <svg className='mx-auto' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6.25V23.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.25 15H23.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </form>
        </div>

      </div>

      <UserProfile/>
    </div>
  )
}

export default SessionChat
