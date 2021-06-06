import { Link } from "react-router-dom"
import React from "react";
import "./style.css";

function Navbar() {
    return (
<nav class="navbar navbar-dark bg-dark sticky-top">
            


                
         <h3> Corbin Garner</h3>
  
            
                 <Link to="/about" className="navlink">About</Link>
                    <Link to="/portfolio" className="navlink">Portfolio</Link>
                     <Link to="/experience" className="navlink">Experience</Link>
                   <Link to="/contact" className="navlink">Contact</Link> 

                

</nav>
    )
}

export default Navbar;