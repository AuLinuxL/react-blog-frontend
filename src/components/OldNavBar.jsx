import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavItem from 'react-bootstrap/esm/NavItem';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import '../styles/NavBar.css'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

function OldNavBar({className}) {

    const navigater = useNavigate()
    // const isAuth = useContext(isAuthed)
    const { isAuthed, _ } = useContext(AuthContext);


    const homeOnClick = () => {
        navigater("/")
    }

    const loginOnClick = () => {
        navigater("/login")
    }

    const logoutOnClick = () => {
        navigater("/logout")
    }

    const signupOnClick = () => {
        navigater("/signup")
    }

    const adminOnClick = () => {
        // navigater("/admin")
        window.location.href = '/admin';
    }

    const NavItem = () => {
        if(isAuthed){
            return (
                <>
                    <Nav.Link onClick={homeOnClick}>Home</Nav.Link>
                    <Nav.Link onClick={adminOnClick}>Admin</Nav.Link>
                    <Nav.Link onClick={logoutOnClick}>Log Out</Nav.Link>
                </>
            );
        }
        else{
            return (
                <>
                    <Nav.Link onClick={loginOnClick}>Login</Nav.Link>
                    <Nav.Link onClick={signupOnClick}>Signup</Nav.Link>
                </>
            )
        }
    }

    const handleOnClick = () => {
        window.location.href = '/';
    }

    return (
        <Navbar className={`${className} bg-body-tertiary`} bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='nav-icon' onClick={handleOnClick}>
                    Blog
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-collapse'/>
                <Navbar.Collapse id="navbar-collapse">
                    <Nav>
                        <NavItem/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default OldNavBar;

