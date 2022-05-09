import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo2.png'
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" className='navbar' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} height='60px' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services"></Nav.Link>
                            <Nav.Link href="home#experts"></Nav.Link>
                        </Nav>
                        <Nav className='text-white text-bold'>
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/manage'>Manage Items</Nav.Link>
                            <Nav.Link as={Link} to='/add'>Add Items</Nav.Link>
                            <Nav.Link as={Link} to='/myItem'>My Items</Nav.Link>

                            {
                                user ?
                                    <Nav.Link href="">
                                        <button className='signOut-btn' onClick={handleSignOut}>Sign Out</button>
                                        {/* <Button onClick={handleSignOut} variant="link">Sign Out</Button> */}
                                    </Nav.Link>

                                    : <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;