import React from "react";

export function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="logo" src = "logo192.png" alt="React Logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}