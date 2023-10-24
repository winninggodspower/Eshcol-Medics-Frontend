// customBackendApi.js
import axios from 'axios';

const customBackendApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

customBackendApi.interceptors.request.use(
  (config)=>{
    const accessToken = "" // get access token from store
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
})

export default customBackendApi;
