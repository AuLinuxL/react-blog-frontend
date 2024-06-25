import { useEffect,useState,useContext,createContext } from "react";
import {jwtDecode} from "jwt-decode";
import api from "../authApi"
import { ACCESS_TOKEN, REFRESH_TOKEN, } from "../constants";

export const AuthContext = createContext(null)

function AuthProvider({children}) {

    const [ isAuthed,setIsAuthed ] = useState(false);

    useEffect(
        () => {auth().catch(() => setIsAuthed(false))},[]
    );

    // let authUpdate = isAuthed;

    // useEffect(() => setIsAuthed(authUpdate),[authUpdate]);

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try {
            const res = await api.post("/api/token/refresh/", {
                refresh: refreshToken
            })
            console.log(res.status)
            if(res.status === 200){
                localStorage.setItem(ACCESS_TOKEN,res.data.access);
                setIsAuthed(true);
            }else{
                setIsAuthed(false);
                console.log("error statue(refreshToken)")
            }
        }catch(e){
            console.log(e);
            setIsAuthed(false);
            console.log("error")
        }
    };

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(!token){
            console.log("No token(auth)")
            setIsAuthed(false);
            return;
        }

        const tokenExp = jwtDecode(token).exp;
        const now = Date.now() / 1000;

        if (tokenExp < now){
            await refreshToken();
        }else{
            setIsAuthed(true);
        }
    }

    if (isAuthed === null){
        return <div>Loading...</div>;
    }


    return (<AuthContext.Provider value={{isAuthed,setIsAuthed}}>
        {children}
    </AuthContext.Provider>)
}

export default AuthProvider