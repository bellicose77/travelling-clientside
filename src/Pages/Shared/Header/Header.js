import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
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
                        <Nav.Link as={NavLink} to="/contact" activeStyle={activeStyle}>Contact Us</Nav.
                            Link>

                        {/* {
                            users?.email ? <Button onClick={logout} variant="light">Logout</Button>
                                : <Nav.Link as={NavLink} to="/login" activeStyle={activeStyle}>Login</Nav.
                                    Link>
                        } */}
                        <Navbar.Text>
                            Signed in as: <a href="#login"></a>
                        </Navbar.Text>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </>
    );
};

export default Header;