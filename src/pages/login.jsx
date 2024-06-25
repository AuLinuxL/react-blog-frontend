import { Form } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import NavBar from "../components/NavBar";

function Login(){
    return (
        <div>
            <NavBar/>
            <LoginForm/>
        </div>
    )
}

export default Login;