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
                <div className="pj">
                    <div className="pj-header">Demo first project </div>
                    <a href=""
                    target="_blank">
                        <img className="demo-img" src={demo1}/>
                    </a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit dolor et nunc lobortis, vitae faucibus nisl convallis. Fusce congue ullamcorper tellus, et varius orci. </p>
                    <a href="">Github repo</a>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;