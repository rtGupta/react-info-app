import React from "react";

export function Navbar(props) {
    return (
       <nav className={props.darkMode ? "dark" : "none"}>
            <img className="nav--logo" src="images/react-icon-small.png" alt="React Logo"></img>
            <h1 className="nav--title">React Facts</h1>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider_circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
       </nav>
    )
}