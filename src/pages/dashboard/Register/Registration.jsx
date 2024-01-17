import React from 'react'
import { useSelector } from 'react-redux'

function Registration() {
    const userType = useSelector((state)=> state.auth.userInformation.user_type)

    return (
        <>
        { userType === 'patient' ? 
        <div>patient</div> :    
        <div>expert</div>
        }
        </>
    )
        
}

export default Registration
