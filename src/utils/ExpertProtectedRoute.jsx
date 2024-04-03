import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

function ExpertProtectedRoute() {
    const userType = useSelector((state)=> state.auth.userInformation.user_type)
    console.log(userType);
    return (
      userType === 'expert'? <Outlet/> : 
      <div className='bg-white grow md:border-e-4'>
        <p className='text-center mt-2'>You don't have access to this route</p>
      </div>
      );
}

export default ExpertProtectedRoute;
