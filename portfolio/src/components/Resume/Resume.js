import React from "react";
import {Container, Row, Button} from "react-bootstrap";
import "./Resume.css";
import resume from "../../Assets/docs/Resume.pdf"


function Resume (){
    return (
        // Here's where we start the HTML portion of the document that is going to generate
        <div className="resume-wrapper">
            <Container fluid className="resume-container">
                <Row>
                    <Button className="resume-btn" href={resume} target="_blank">
                        Download Resume
                    </Button>
                </Row>
                <div className="resume-div">
                    <h2 className="resume-name">Jonathan Zagal</h2>
                    <p className="resume-items">
                    adipiscing elit. Sed blandit dolor et nunc lobortis, vitae faucibus nisl convallis. Fusce congue ullamcorper tellus, et varius orci. In in convallis urna. Sed vitae lorem eu mi maximus euismod vitae nec tortor. Cras in orci in risus porttitor convallis quis ac ipsum. Integer at pulvinar tellus. Phasellus ultrices augue vehicula ante pulvinar, non suscipit felis tincidunt. Nunc vehicula velit metus, nec cursus enim aliquam et. Duis risus justo, egestas vitae neque vitae, sollicitudin elementum urna. Duis convallis interdum iaculis. Sed malesuada felis nisl, ac condimentum odio vehicula quis.
                    </p>
                </div>
            </Container>

        </div>
    );
};

export default Resume;