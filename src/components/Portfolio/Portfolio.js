import React from "react";
import "./Portfolio.css";
import demo1 from "../../Assets/images/demo1.png"
import demo2 from "../../Assets/images/demo2.png"
import demo3 from "../../Assets/images/demo3.png"
import demo4 from "../../Assets/images/demo4.png"


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
                
                <div className="p">
                    <div className="p-header">Work Day Scheduler</div>
                    <a href="https://zagalj.github.io/DayPlanner/"
                    target="_blank" 
                    rel="noreferrer">
                        <img alt="Day schedule" className="demo-img" src={demo2}/>
                    </a>
                    <p>This is an online work scheduler app where users can manage their schedule by hour. It saves appointments and shows selects the current hour </p>
                    <a href="https://github.com/ZagalJ/DayPlanner">Github repo</a>
                </div>

                <div className="p">
                    <div className="p-header">Budget Tracker</div>
                    <a href="https://zagalj.github.io/BudgetTracker/"
                    target="_blank" 
                    rel="noreferrer">
                        <img alt="screenshot of budget tracker" className="demo-img" src={demo3}/>
                    </a>
                    <p>This is a budget tracking application that can be accessed without a conection. When a user enter their transactions offline, the user should populate the total when brought back online. </p>
                    <a href="https://github.com/ZagalJ/BudgetTracker">Github repo</a>
                </div>

                <div className="p">
                    <div className="p-header">Tech Blog</div>
                    <a href="https://still-woodland-59005.herokuapp.com"
                    target="_blank" 
                    rel="noreferrer">
                        <img alt="screenshot of tech blog" className="demo-img" id="blog" src={demo4}/>
                    </a>
                    <p>This is a CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts as well. </p>
                    <a href="https://github.com/ZagalJ/MVC-TechBlog">Github repo</a>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;