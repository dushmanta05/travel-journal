import React from "react";
import img from "/src/assets/Path.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={img} alt="travel-icon" />
            <h1>My Travel Journal</h1>
        </nav>
    )
}