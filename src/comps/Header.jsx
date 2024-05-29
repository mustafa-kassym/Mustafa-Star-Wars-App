import React from 'react';
import {
    Button,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle
} from "react-bootstrap";
import logo from "../media/logo.png";
import "bootstrap/dist/css/bootstrap.min.css"
import {NavLink} from "react-router-dom";
import {Route, Routes} from "react-router";
import Home from "../pages/Home";
import "../styles/App.css";
import Planets from "../pages/Planets";
import Characters from "../pages/Characters";
import Starships from "../pages/Starships";

const Header = () => {
    return (
        <div style={{display: "block", height: "2px"}}>
            <Navbar collapseOnSelect bg="light" variant="light" expand="md">
                <Container>
                    <Nav>
                        <NavbarBrand>
                            <Nav.Link as={NavLink} to="/">
                                <img src={logo}
                                     alt="logo"
                                     width="70px"
                                     height="50px"
                                />
                            </Nav.Link>
                        </NavbarBrand>
                    </Nav>

                    <NavbarToggle area-controls={"responsive-navbar-nav"}/>

                    <NavbarCollapse id={"responsive-navbar-nav"} className="justify-content-between">
                        <Nav>
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/planets">Planets</Nav.Link>
                            <Nav.Link as={NavLink} to="/characters">Characters</Nav.Link>
                            <Nav.Link as={NavLink} to="/spaceships">Spaceships</Nav.Link>
                        </Nav>

                        <Form className="ms-auto">
                            <div className="d-flex">
                                <FormControl type="text" className="me-sm-2"/>
                                <Button variant="warning" className="me-auto">Search</Button>
                            </div>
                        </Form>
                    </NavbarCollapse>


                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/planets" element={<Planets/>}/>
                <Route path="/characters" element={<Characters/>}/>
                <Route path="/starships" element={<Starships/>}/>
            </Routes>
        </div>

    );
};

export default Header;