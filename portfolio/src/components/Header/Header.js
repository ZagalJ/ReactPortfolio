import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import  Container  from "react-bootstrap/Container";
import "./Header.css"

function Header({currentPage, handlePageChage}) {
    return(
        <Navbar className="header" fixed="top" variant="light">
            <Container className="header-container">
                <div className="header-name">Jonathan Zagal</div>

                <Nav className="me-auto">
                <Nav.Link 
                    className="header-font-col"
                    href="#Intro"
                    onClick={() => handlePageChage("Intro")}
                >
                    About Me
                </Nav.Link>    
                <Nav.Link 
                    className="header-font-col"
                    href="#Portfolio"
                >
                    Portfolio
                </Nav.Link>   
                <Nav.Link 
                    className="header-font-col"
                    href="#Contact"
                >
                    Contact
                </Nav.Link>
                <Nav.Link 
                    className="header-font-col"
                    href="#Resume"
                >
                    Resume
                </Nav.Link>      
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;