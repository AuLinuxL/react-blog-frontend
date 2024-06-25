import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

export function UnloginProtectedRoute({children,to="/login"}){
    const {isAuthed,_} = useContext(AuthContext);
    return isAuthed ? children : <Navigate to={to} />;
}

export function LoginedProtectedRoute({children,to="/"}){
    const {isAuthed,_} = useContext(AuthContext);
    return isAuthed ? <Navigate to={to}/>: children;
}
