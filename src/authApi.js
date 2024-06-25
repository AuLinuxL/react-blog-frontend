import axios from "axios"
import {ACCESS_TOKEN} from "./constants"

const authApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

authApi.interceptors.request.use(  // Inject ACCESS_TOKEN to every request
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token){
            config.headers.Authorization = `Bearer ${token}`  // Bearer: not associated with any particular user,grand access to whoever bear the right token
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default authApi;