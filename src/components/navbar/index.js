import { Link } from "react-router-dom"
import React from "react";
import "./style.css";

function Navbar() {
    return (
<nav className="navbar navbar-dark sticky-top navbar-expand-md">
            <div className="container-fluid">


                <div class="row">

                    <div class="row-4"> <button><h1 className="navbar-name">Corbin Garner</h1></button></div>
    
            
                    <div class="row-2"> <Link to="/about" className="navlink">About</Link></div>
                    <div class="row-2"> <Link to="/portfolio" className="navlink">Portfolio</Link></div>
                    <div class="row-2">   <Link to="/experience" className="navlink">Experience</Link></div>
                    <div class="row-2">  <Link to="/contact" className="navlink">Contact</Link> </div >

                </div>
</div>
</nav>
    )
}

export default Navbar;