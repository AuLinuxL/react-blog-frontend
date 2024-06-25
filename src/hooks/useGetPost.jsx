import { useState,useEffect,useContext } from "react";
import api from "../api";

export function useGetPost(id){
    const [post,setPost] = useState('');

    const getPost = async(id) => {
        const res = await api.get(`/api/post/${id}/`)
        if(res.status === 200){
            setPost(res.data)
        }else{
            console.log('Get post error!')
        }

    };

    useEffect(
        () => {
            if(id){
                getPost(id)
            }else{
                setPost(null)
            }
        },[id]
    );

    return post;
}