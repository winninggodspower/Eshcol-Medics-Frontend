import React from 'react'

// this component is for the headers that you see in the howto page, medical prescription page and also the settings page
function CustomPageHeader({ title }) {
    return (
        <div className='flex items-center gap-2 border-b ps-3 py-[15px] md:py-9 md:ps-14 border-[rgba(0,0,0,0.23)]'>
            <svg className='cursor-pointer' onClick={() => navigate(-1)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 19L5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="text-lg font-bold md:text-xl font-railway">{title}</h2>
        </div>
    )
}

export default CustomPageHeader;