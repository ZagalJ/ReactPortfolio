import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import  Container  from "react-bootstrap/Container";
import "./Header.css"

//we take the current page and submit the handle page change on click
function Header({currentPage, handlePageChange}) {

    return(
        <Navbar className="header" variant="light">
            <Container className="header-container">
                <div className="header-name">Jonathan Zagal</div>
                <span></span>
                <span></span>
                <span></span>


                <Nav className="me-auto">
                <Nav.Link 
                    className="header-font-col"
                    href="#Intro"
                    onClick={() => handlePageChange("Intro")}
                >
                    About Me
                </Nav.Link>    
                <Nav.Link 
                    className="header-font-col"
                    href="#Portfolio"
                    onClick={() => handlePageChange("Portfolio")}
                >
                    Portfolio
                </Nav.Link>   
                <Nav.Link 
                    className="header-font-col"
                    href="#Contact"
                    onClick={() => handlePageChange("Contact")}
                >
                    Contact
                </Nav.Link>
                <Nav.Link 
                    className="header-font-col"
                    href="#Resume"
                    onClick={() => handlePageChange("Resume")}
                >
                    Resume
                </Nav.Link>      
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;