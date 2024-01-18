import React from 'react'
import { useSelector } from 'react-redux'
import PatientRegistration from './PatientRegistration'
import ExpertRegistration from './ExpertRegistration'

function Registration() {
    const userType = useSelector((state)=> state.auth.userInformation.user_type)

    return (
        <>
        { userType === 'patient' ? 
        <PatientRegistration/> :    
        <ExpertRegistration/>
        }
        </>
    )   
        
}

export default Registration
