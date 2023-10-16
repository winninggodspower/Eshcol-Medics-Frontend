import axios from "axios";

const baseURL = "http://127.0.0.1:8000/";

async function handleFormRegister(data, setError, is_expert=false) {
    try {
        let response = await axios.post(baseURL + 'api/auth/register/', {
            email: data.email,
            phone_number: data.phone_number,
            password: data.password,
            is_expert
        });

        if (response.status === 201){
            console.log('redirecting to dashboard');
            return true
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

