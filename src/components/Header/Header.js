import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = (props) => {
    
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home" className='fs-4 fw-bold'>Fake Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                        <Nav.Link href="#link">Cart<sup>{props.count}</sup></Nav.Link>
                    <Nav.Link href="#link">Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;