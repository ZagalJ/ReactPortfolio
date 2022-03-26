import React from "react";
import "./Intro.css";


const Intro =() => {
    return(
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-hello">Hello, my name is</h2>
                    <h1 className="intro-name">Jonathan</h1>
                    <div className="intro-title">
                        <h5 className="intro-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit dolor et nunc lobortis, vitae faucibus nisl convallis. Fusce congue ullamcorper tellus, et varius orci. In in convallis urna. Sed vitae lorem eu mi maximus euismod vitae nec tortor. Cras in orci in risus porttitor convallis quis ac ipsum. Integer at pulvinar tellus. Phasellus ultrices augue vehicula ante pulvinar, non suscipit felis tincidunt. Nunc vehicula velit metus, nec cursus enim aliquam et. Duis risus justo, egestas vitae neque vitae, sollicitudin elementum urna. Duis convallis interdum iaculis. Sed malesuada felis nisl, ac condimentum odio vehicula quis.
                        </h5>
                    </div>
                </div>
                <div className="intro-right">
                <h1>my Pictures</h1>
                </div>
            </div>
        </div>
    )
};

export default Intro;