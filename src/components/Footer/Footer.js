import React from "react";
import "./Footer.css";
import {Container, Row, Col} from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


function Footer(){
    // we get todays date and use the year only
    let date = new Date();
    let year = date.getFullYear();
    return(
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <div>Jonathan Zagal</div>
                </Col>
                <Col md="4" className="footer-copywright">
                    <div> Copyright © {year}</div>
                </Col>
                <Col md="4" className="footer-body">
                   <ul className="footer-icons">
                       <li className="social-icons">
                           <a href="https://github.com/ZagalJ"
                           target="_blank">
                               <AiFillGithub></AiFillGithub>
                           </a>
                       </li>
                       <li className="social-icons">
                           <a href="https://www.linkedin.com/in/jonathan-zagal-893946165/"
                           target="_blank">
                               <AiFillLinkedin></AiFillLinkedin>
                           </a>
                       </li>
                   </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;