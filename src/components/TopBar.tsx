import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


function TopBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">JL</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/family-law">Family Law</NavDropdown.Item>
                            <NavDropdown.Item href="/icbc-claims">ICBC</NavDropdown.Item>
                            <NavDropdown.Item href="/immigration-law">Immigration</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="tel:{telephone}">telephone</Nav.Link>
                        {/* <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopBar;