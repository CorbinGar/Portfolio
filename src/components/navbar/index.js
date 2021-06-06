import { Link } from "react-router-dom"
import React from "react";
import "./style.css";

function Navbar() {
    return (
<nav class="navbar navbar-dark bg-dark sticky-top">
            


                
         <div class="row-4"><h3> Corbin Garner</h3></div>
  
            
                    <div class="row-2"> <Link to="/about" className="navlink">About</Link></div>
                    <div class="row-2"> <Link to="/portfolio" className="navlink">Portfolio</Link></div>
                    <div class="row-2">   <Link to="/experience" className="navlink">Experience</Link></div>
                    <div class="row-2">  <Link to="/contact" className="navlink">Contact</Link> </div>

                

</nav>
    )
}

export default Navbar;