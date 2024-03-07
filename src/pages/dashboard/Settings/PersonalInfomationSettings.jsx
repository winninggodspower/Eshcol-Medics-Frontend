import { useNavigate } from "react-router-dom"

function PersonalInfomationSettings() {
  let navigate = useNavigate();
  
  return (
    <div className='bg-white grow md:border-e-4'>
      <div className='flex items-center gap-2 border-b ps-3 py-[15px] md:py-9 md:ps-14 border-[rgba(0,0,0,0.23)]'>
        <svg onClick={() => navigate(-1)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 19L5 12L12 5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="text-lg font-bold md:text-xl font-railway">Personal information</h2>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default PersonalInfomationSettings