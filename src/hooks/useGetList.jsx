import { useState,useEffect } from "react";
import authApi from "../authApi";
import api from "../api";

export function useGetList(url,auth=false){
    const [data,setData] = useState([]);
    const [error, setError] = useState(null);
    // const {_,setShowAlert} = useContext(AlertContext)

    const getPost = async (e) => {
        try{
            // const response = await api.get('/api/post/list')
            let response;
            if (auth) {
                response = await authApi.get(url);
            } else {
                response = await api.get(url, {
                    validateStatus: function (status) {
                        return status < 400; // 处理重定向
                    },
                });
            }
            console.log(auth);
            if(response.status === 200){
                setData(response.data);
                setError(null); 
            }else{
                setError(response.status);
                setData([]);
            }
        }catch(e){
            setError(e.message);
            setData([]);
        }
    }

    useEffect(
        () => {getPost()},[]
    )

    return { data, error };
}