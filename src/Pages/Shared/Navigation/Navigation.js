import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../media/image/logo.png';
import './Navigation.css';

const Navigation = () => {
    return (

        <div className='container'>
            <Navbar collapseOnSelect expand="lg" >
                <Container >
                    <Navbar.Brand to="/home"><img width="40%" src={logo} alt=''></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='me-auto' >
                            <Nav.Link as={NavLink} className='nav-item' to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} className='nav-item' to="/about">About Us</Nav.Link>
                            <Nav.Link as={NavLink} className='nav-item' to="/products">Products</Nav.Link>
                            <Nav.Link as={NavLink} className='nav-item' to="/blog">Blog</Nav.Link>
                            {/* <Nav.Link as={NavLink} className='nav-item' to="/dashboard">Dashboard</Nav.Link> */}

                        </Nav>
                        <Nav >
                            <Nav.Link as={NavLink} to="/login"><Button>Login</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>


    );
};

export default Navigation;