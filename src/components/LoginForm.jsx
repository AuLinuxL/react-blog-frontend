import { useEffect, useState, useContext } from "react";
import api from "../authApi";
import { ACCESS_TOKEN,REFRESH_TOKEN } from "../constants";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css"
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form'
import { AuthContext } from "../Context/AuthProvider";
import Form from 'react-bootstrap/Form';
import Alert from "./Alert";
import { AlertContext } from "../App";
import { Container, Row, Col } from 'react-bootstrap';

function LoginForm(){

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()

    const {_,setShowAlert} = useContext(AlertContext)

    const {isAuthed,setIsAuthed} = useContext(AuthContext)
    console.log(isAuthed)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await api.post(
                '/api/token/',
                {username,password}
            )
            setIsLoading(true)
            if(res.status === 200){
                setIsLoading(false)
                // setShowSuccess(true)
                localStorage.setItem(ACCESS_TOKEN,res.data.access)
                localStorage.setItem(REFRESH_TOKEN,res.data.refresh)
                // alert('successful')
                setIsAuthed(true)
                navigate('/')
            }else{
                setShowAlert(true)
                console.error('Failed to log in!')
                navigate('/login')
            }
        }catch(e){
            setShowAlert(true)
            console.log(e);
        }
    }

    const handleSignupClick = () => {
        navigate('/signup')
    }
    
    return (

    // <Container className="min-vh-100 d-flex justify-content-center align-items-center text-center">
        <Form onSubmit={handleSubmit} className="form-container">
            <p className="page-title">LogIn</p>
            <Alert variant={"danger"} content={"Login Error!"}/>
            <Form.Group className="mb-3 input" controlId="exampleForm.ControlForm1">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3 input" controlId="exampleForm.ControlForm1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">Log In</Button>
            <Button variant="primary" onClick={handleSignupClick}>Sign Up</Button>
        </Form> 
    )
    // </Container> )
}

export default LoginForm;
