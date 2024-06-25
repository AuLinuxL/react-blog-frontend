import { Form } from "react-router-dom"
import SignupForm from "../components/SignupForm"
import NavBar from "../components/NavBar";

function Signup(){
    return (<div>
        <NavBar/>
        <SignupForm/>
    </div>)
}

export default Signup;