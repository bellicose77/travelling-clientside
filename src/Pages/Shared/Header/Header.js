import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { allContext } = useAuth()
    const { user, logOut } = allContext;
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home" activeStyle={activeStyle} >TourX</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={NavLink} to="/home" activeStyle={activeStyle}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/Services" activeStyle={activeStyle}>Services</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" activeStyle={activeStyle}>About</Nav.
                            Link>
                        <Nav.Link as={NavLink} to="/destination" activeStyle={activeStyle}>Destination</Nav.
                            Link>


                        {
                            user?.email ? <Button onClick={logOut} variant="light">Logout</Button> : <Nav.Link as={NavLink} to="/login" activeStyle={activeStyle}>Login</Nav.
                                Link>


                        }
                        {
                            user?.email ? <Nav.Link as={NavLink} to="/addService" activeStyle={activeStyle}>AddService</Nav.
                                Link> : ''
                        }
                        {
                            user?.email ? <Nav.Link as={NavLink} to="/myoders" activeStyle={activeStyle}>Myoder</Nav.
                                Link> : ''
                        }

                        <Nav.Link as={NavLink} to="/contact" activeStyle={activeStyle}>Contact Us</Nav.
                            Link>

                        {/* {
                            users?.email ? <Button onClick={logout} variant="light">Logout</Button>
                                : <Nav.Link as={NavLink} to="/login" activeStyle={activeStyle}>Login</Nav.
                                    Link>
                        } */}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </>
    );
};

export default Header;