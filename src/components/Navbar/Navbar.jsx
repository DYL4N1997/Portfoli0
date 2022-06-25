import React, { useState } from "react";
import "./Navbar.css";


const Navbar = () => {
    const navLinks = ["home", "about", "work", "skills", "contact"];
    // react hook for toggle
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="nav">
            <div className="nav-logo">
                <div className="nav__logo-container">
                    <span>Dylan Metcalf</span>
                </div>    
            </div>    
            <ul className="nav__links">

            



            </ul>

            
            
        </nav>
    )




export default Navbar;