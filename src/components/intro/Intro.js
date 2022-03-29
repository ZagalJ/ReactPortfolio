import React from "react";
import "./Intro.css";
import Image from "../../Assets/images/Jonathan.jpg"


const Intro =() => {
    return(
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-hello">Hello, my name is</h2>
                    <h1 className="intro-name">Jonathan</h1>
                    <div className="intro-title">
                        <h5 className="intro-text">
                            I'm a 25 years old full stack developer based in St. Paul, Minnesota. I recently graduated from the University of Minnesota Coding Bootcamp.
                            I currently work at Best Buy as a Corporate In Home Operations Specialist. I started coding back in 2013.
                        </h5>
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-bg"></div>
                <img src={Image} alt="Jonathan Zagal" className="intro-img"/>
                </div>
        </div>
    )
};

export default Intro;