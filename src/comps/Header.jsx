import React, {useState} from 'react';
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
import {Route, Routes, useLocation} from "react-router";
import Home from "../pages/Home";
import "../styles/App.css";
import Planets from "../pages/Planets";
import Characters from "../pages/Characters";
import Starships from "../pages/Starships";

const Header = (props) => {

    const {setIsHomePage} = props;

    const [searchInput, setSearchInput] = useState("");
    const [searchText, setSearchText] = useState("");

    const location = useLocation();

    const handleInput = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearch = () => {
        setSearchText(searchInput);
    };

    const handleReset = () => {
        setSearchInput("");
        setSearchText("");
    };



    console.log(searchText);


    return (
        <div>
            <Navbar collapseOnSelect bg="light" variant="light" expand="md">
                <Container>
                    <Nav>
                        <NavbarBrand>
                            <Nav.Link as={NavLink} to="/" onClick={() => setIsHomePage(true)}>
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
                            <Nav.Link as={NavLink} to="/" onClick={() => setIsHomePage(true)}>Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/planets" onClick={() => setIsHomePage(false)}>Planets</Nav.Link>
                            <Nav.Link as={NavLink} to="/characters" onClick={() => setIsHomePage(false)}>Characters</Nav.Link>
                            <Nav.Link as={NavLink} to="/starships" onClick={() => setIsHomePage(false)}>Starships</Nav.Link>
                        </Nav>

                        {location.pathname !== "/" &&
                        <Form className="ms-auto">
                            <div className="d-flex">
                                <FormControl onChange={handleInput} type="text" className="me-sm-2" value={searchInput}/>
                                <Button onClick={handleSearch} variant="warning" className="me-auto">Search</Button>
                                <Button disabled={!searchInput} onClick={handleReset} variant="outline-danger" className="me-auto ms-1"> Reset </Button>
                            </div>
                        </Form>
                        }
                    </NavbarCollapse>


                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/planets" element={<Planets searchText={searchText}/>}/>
                <Route path="/characters" element={<Characters/>}/>
                <Route path="/starships" element={<Starships/>}/>
            </Routes>
        </div>

    );
};

export default Header;