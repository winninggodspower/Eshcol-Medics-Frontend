import customBackendApi from "./customBackendApi";


const FetchAccessTokenFromServer = async (refreshToken)=>{
    try {
        let response = await customBackendApi.post('/token/refresh/', {
            refresh: refreshToken,
        })

        if (response.status == 200) {
            return response.data;
        }else{
            return null;
        }
    } catch (error) {
        return null;
    }
    
}

export default FetchAccessTokenFromServer;