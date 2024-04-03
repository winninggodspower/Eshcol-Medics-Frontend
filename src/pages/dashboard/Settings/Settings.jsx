import avatarImage from "../../../assets/avatar-2.png"
import { Link } from "react-router-dom";
import CustomPageHeader from "../../../components/CustomPageHeader";
import PatientSettings from "./PatientSetting";
import ExpertSettings from "./ExpertSetting";
import { useSelector } from "react-redux";


function Settings() {
  const userType = useSelector((state)=> state.auth.userInformation.user_type)

    return (
        <>
        { userType === 'patient' ? 
        <PatientSettings/> :    
        <ExpertSettings/>
        }
        </>
    )   
}

export default Settings