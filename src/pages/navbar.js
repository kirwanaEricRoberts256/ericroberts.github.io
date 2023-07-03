import {Link} from "react-router-dom"
import './navbar.css'
import React from "react"
export default function  Navbar(){
return(
<div className="Navbar">
    <div className="Logo"><h1>@roberts</h1></div>
<ul>
<li><Link to="/" className="Link">HOME</Link></li>
<li><Link to="/about" className="Link">ABOUT ME</Link></li>
<li><Link to="/contact" className="Link">Contact</Link></li>
<li><Link to="/project" className="Link">My projects</Link></li>



</ul>


</div>

)

}