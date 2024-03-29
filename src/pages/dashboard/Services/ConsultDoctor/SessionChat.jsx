import { useState } from 'react'
import profileAvatar from "../../../../assets/avatar.png"
import ChatBubble from '../../../../components/ChatBubble'
import UserProfile from './UserProfile'


function SessionChat() {

  let [isMediaOpen, setisMediaOpen] = useState(false)

  let animate = (e) => {
    let svg = e.currentTarget;
    let rotateDeg = isMediaOpen ? 0 : -140
    svg.style.transform = `rotate(${rotateDeg}deg)`;

    // toggle state
    setisMediaOpen(isMediaOpen ? false : true)

  }

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

        <div className="fixed md:absolute bottom-0 w-full py-3 md:py-6 before:content-[''] before:block before:absolute before:bottom-0 before:start-0 before:w-full before:h-full before:bg-grey-3  before:opacity-70">
          <form action="" className='w-[83%] mx-auto h-11 md:h-14 relative'>
            <input className='w-full rounded-3xl h-full bg-[rgba(108,108,108,.4)] border-0 md:ps-24 ps-5 text-black/50 font-inter' type="text" />
            <button type='button' className="absolute left-0 h-full w-14 md:w-20 bg-tertiary rounded-3xl">
              <svg onClick={animate} className='mx-auto transition-transform ease-out' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6.25V23.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.25 15H23.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="absolute top-0 md:end-0 w-full ps-16 md:ps-0 md:w-[calc(100%-5.5rem)] h-full flex gap-[5%] md:gap-[4%] text-white font-inter overflow-x-hidden">
              <label className='flex items-center gap-2 md:gap-3 text-[10px] md:text-base'>
                <svg className='w-6 h-6 md:w-10 md:h-10' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="#055C9F" />
                  <path d="M26.2049 12.0215H13.7936C12.8143 12.0215 12.0205 12.8153 12.0205 13.7945V26.2059C12.0205 27.1851 12.8143 27.9789 13.7936 27.9789H26.2049C27.1841 27.9789 27.978 27.1851 27.978 26.2059V13.7945C27.978 12.8153 27.1841 12.0215 26.2049 12.0215Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.8972 18.227C17.6316 18.227 18.227 17.6316 18.227 16.8972C18.227 16.1627 17.6316 15.5674 16.8972 15.5674C16.1627 15.5674 15.5674 16.1627 15.5674 16.8972C15.5674 17.6316 16.1627 18.227 16.8972 18.227Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M27.9783 22.6597L23.5457 18.2271L13.7939 27.9788" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Upload media
                <input className='hidden' type="file" />
              </label>
              <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-base">
                <svg className='w-6 h-6 md:w-10 md:h-10' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="#352E43" />
                  <g clipPath="url(#clip0_68_2030)">
                    <path d="M29.5302 15.3477L23.3252 19.7798L29.5302 24.2119V15.3477Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.5529 13.5747H11.8022C10.823 13.5747 10.0293 14.3684 10.0293 15.3476V24.2118C10.0293 25.191 10.823 25.9847 11.8022 25.9847H21.5529C22.532 25.9847 23.3257 25.191 23.3257 24.2118V15.3476C23.3257 14.3684 22.532 13.5747 21.5529 13.5747Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_68_2030">
                      <rect width="21.2743" height="21.2743" fill="white" transform="translate(9.14258 9.14258)" />
                    </clipPath>
                  </defs>
                </svg>
                Switch to video call
              </div>
            </div>
          </form>
        </div>

      </div>

      <UserProfile />
    </div>
  )
}

export default SessionChat
