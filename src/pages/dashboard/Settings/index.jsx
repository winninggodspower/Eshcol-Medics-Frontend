import CustomerService from '../../../components/CustomerService'
import avatarImage from "../../../assets/avatar-2.png"

function Settings() {
  return (
    <div className='flex h-full grow'>

    <div className='h-full bg-white grow md:border-e-4'>
        <div className='flex items-center gap-2 border-b ps-3 py-[15px] md:py-9 md:ps-14 border-[rgba(0,0,0,0.23)]'>
            <svg onClick={()=>navigate(-1)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 19L5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="text-lg font-bold md:text-xl font-railway">Settings?</h2>
        </div>

       <div className=' mt-[22px] md:mt-11'>
            <div>
                <img className='mx-auto w-[100px] h-[100px] md:w-[1200px] md:h-[1200px]' src={avatarImage} alt="" />
                <h3 className='text-base text-center font-inter md:text-2xl md:mt-[26px] mt-[19px]'>Wade Warren</h3>
            </div>
       </div>
    </div>

    <CustomerService/>
</div>
  )
}

export default Settings