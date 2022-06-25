import React, { useState } from "react";
import "./Navbar.css";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
// import CV from "../../assets/CV.pdf";


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
                {navLinks.map((link) => {
                    return (
                        <li key={link} className="nav_link">
                            <a href={`#${link}`}>{link}</a>    
                        </li>
                    );
                })}
                {/* <a href={CV} target="_blank" className="nav_link" rel="noreferrer">
                    CV
                </a> */}
            </ul>
            {/* {Mobile friendly nav} */}
            <div className="nav-menu">
        {/* on click - set toggle to true (open-menu) */}
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HiX
              style={{ height: "35px", width: "35px", margin: "10px" }}
              onClick={() => setToggle(false)}
            />

            <ul className="nav-menu-ul">
              {navLinks.map((item) => (
                <li className="nav-menu-li" key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>       
    </nav>
  );
};

export default Navbar;