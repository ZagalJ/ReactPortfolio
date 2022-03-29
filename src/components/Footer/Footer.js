import React from "react";
import "./Footer.css";
import {Container, Row, Col} from "react-bootstrap";

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
                    <div>Social</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;