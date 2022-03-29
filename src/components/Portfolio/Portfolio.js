import React from "react";
import "./Portfolio.css";
import demo1 from "../../Assets/images/demo1.png"


const Portfolio =() => {
    return (
        <div className="portfolio">
            <div className="p-text">
                <h1 className="portf-title">Portfolio</h1>
                <p className="portf-desc">
                    Some of my projects
                </p>
            </div>
            <div className="project">
                <div className="p">
                    <div className="p-header">Barnes And Node</div>
                    <a href="https://mysterious-ocean-11521.herokuapp.com/login"
                    target="_blank" 
                    rel="noreferrer">
                        <img alt="screenshot of barnes and node" className="demo-img" src={demo1}/>
                    </a>
                    <p>This is an online library management app where users can browse books by category, author and name, review books, and also reserve them to borrow. </p>
                    <a href="https://github.com/ZagalJ/BarnesAndNode">Github repo</a>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;