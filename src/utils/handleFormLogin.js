import { redirect } from "react-router-dom";
import customBackendApi from "./customBackendApi";

async function handleFormLogin(data, setError, clearErrors) {
    console.log('login form handler was called');
    try {
        let response = await customBackendApi.post('/token/', {
            email: data.email,
            password: data.password,
        });

        if (response.status === 200){
            // save to user state
            clearErrors();
            console.log(response.data);
            return response.data;
        }
        else {
            setError("notRegisteredInput", {
                type: "custom",
                message: error.data.details ,
            })
            return false
        }


    } catch (error) {
        setError("notRegisteredInput", {
            type: "custom",
            message: error.response.data.detail ,
        })
        return false
    }
}



export default handleFormLogin;

