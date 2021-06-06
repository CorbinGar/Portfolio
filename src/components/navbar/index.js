import { Link } from "react-router-dom"
import React from "react";
import "./style.css";

function Navbar() {
    return (
<nav className="navbar navbar-dark sticky-top navbar-expand-md">
<div className="container-fluid">

           <button><h1 className="navbar-name">Corbin Garner</h1></button>
    
            <div>
                <Link to="/about" className="navlink">About</Link>
                <Link to="/portfolio" className="navlink">Portfolio</Link>
                <Link to="/experience" className="navlink">Experience</Link>
                <Link to="/contact" className="navlink">Contact</Link>
            </div>
</div>
</nav>
    )
}

export default Navbar;