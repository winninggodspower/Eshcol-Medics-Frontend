import { redirect } from "react-router-dom";
import customBackendApi from "./customBackendApi";

async function handleFormRegister(data, setError, is_expert=false) {
    try {
        let response = await customBackendApi.post('/auth/register/', {
            email: data.email,
            phone_number: data.phone_number,
            password: data.password,
            is_expert
        });

        if (response.status === 201){
            clearErrors();
            return response;
        }
        else {
            setMultipleError(res.data, setError);
            return false
        }


    } catch (error) {
        setMultipleError(error.response.data, setError);
        return false
    }
}

function setMultipleError(errors, setError){
    Object.keys(errors).forEach((field) => {
        setError(field, {
          type: 'errorType',
          message: errors[field][0], // Display the first error message
        });
    });
}

export default handleFormRegister;

