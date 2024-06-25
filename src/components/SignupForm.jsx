import { useState } from "react";
import api from "../api";
import { ACCESS_TOKEN,REFRESH_TOKEN } from "../constants";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignupForm(){

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword){
            alert("Password do not match!")
            return
        }
        try{
            console.log(username)
            console.log(password)
            const res = await api.post(
                '/api/user/register',
                {username,password}
            )
            setIsLoading(true)
            console.log(res.status)
            if(res.status === 201){
                setIsLoading(false)
                navigate('/login')
            }else{
                setIsLoading(false)
                console.error('Failed to sign up!')
                navigate('/signup')
            }
        }catch(e){
            console.log(e)
        }
    }

    const handleLoginClick = () => {
        navigate('/login')
    }
    
    return <form onSubmit={handleSubmit} className="form-container">
        <p className="page-title">SignUp</p>
        <Form>
        <Form.Group className="mb-3 input" controlId="exampleForm.ControlForm1">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3 input" controlId="exampleForm.ControlForm1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3 input" controlId="exampleForm.ControlForm1">
            <Form.Label>Confirm</Form.Label>
            <Form.Control type="password" placeholder="Confirm" onChange={(e) => setConfirmPassword(e.target.value)}/>
        </Form.Group>
        </Form>
        <Button variant="primary" type="submit">Sign Up</Button>
        <Button variant="primary" onClick={handleLoginClick}>Log In</Button>

    </form>
}

export default SignupForm;
