import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css'

import { Home } from "../assets/icons";
import { Tag } from "../assets/icons";
import { Bell } from '../assets/icons';

function NavBar() {

    const homeNavOnClick = () => {
        window.location.href = '/'
    }

    const tagNavOnClick = () => {
        window.location.href = '/category'
    }

    // const aboutNavOnClick = () => {
    //     window.location.href = '/about'
    // }

    const NavItem = () => {
            return (
                <>
                    <Nav.Link className='nav-item' onClick={homeNavOnClick}>
                        <Home/>
                        <div className='nav-item-text'>Home</div>
                    </Nav.Link>
                    <Nav.Link className='nav-item' onClick={tagNavOnClick}>
                        <Tag/>
                        <div className='nav-item-text'>Tag</div>
                    </Nav.Link>
                    {/* <Nav.Link className='nav-item' onClick={aboutNavOnClick}>
                        <Bell/>
                        <div  className='nav-item-text'>About</div>
                    </Nav.Link> */}
                </>
            );
        }


    const handleOnClick = () => {
        window.location.href = '/';
    }

    return (
        <Navbar className={`nav-bar bg-body-tertiary`} bg="light" expand="lg">
            <div className='nav-bar-container'>
                <Navbar.Toggle aria-controls='navbar-collapse'/>
            </div>
            <Navbar.Collapse id="navbar-collapse">
                    <Nav>
                        <NavItem/>
                    </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;