import React from 'react'
import reviewInProgressIllustration from '../../../../assets/review-in-progress-illustration.svg';

function ReviewInProgress() {
    return (
        <section className="flex-grow flex md:items-center justify-center min-h-[calc(100vh-7.6rem)] md:min-h-[calc(100vh-4.65rem)]" >
            <div className='md:w-[36rem] max-w-[80%]'>
                <div className=' pt-20 md:pt-9 flex flex-col items-center justify-center font-railway '>
                    <img src={reviewInProgressIllustration} alt="review illustration" />
                    <h4 className='mt-10 mb-3 md:mb-4 font-semibold md:text-xl text-lg'>Review in progress</h4>
                    <p className='text-center text-sm md:text-base'>We are taking a look at the information and documents you submitted
                        We’ll send you an email if you meet the requirements we’re looking for</p>
                </div>
            </div>
            
        </section >
    )
}

export default ReviewInProgress
