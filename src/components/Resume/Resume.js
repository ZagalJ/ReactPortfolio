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
                    <br/>
                    <p className="resume-items">
                        Full stack web developer looking to get into the tech field. 
                    </p>
                    <br/>
                    <br></br>
                    Earned a certificate in MERN Stack Web Development from the University of Minnesota Coding Bootcamp. Learned HTML and CSS back in High School as well as some Java.
                    <br/>
                    <br/>
                    <h3 className="resume-skills">Technical Skills</h3>
                    <br></br>
                    <div className="columns">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Node JS</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>MySQL</li>
                        <li>Express</li>
                        <li>Mongo DB</li>
                        <li>Github</li>
                        <li>APIs</li>
                        <li>Handlerars</li>
                    </div>
                    <br/>
                    <br/>
                    <h3 className="resume-skills">Soft Skills</h3>
                    <br/>
                    <div className="columns">
                        <li>Fast Learner</li>
                        <li>Problem Solving</li>
                        <li>Resourceful</li>
                        <li>Teamwork</li>
                    </div>

                </div>
            </Container>

        </div>
    );
};

export default Resume;