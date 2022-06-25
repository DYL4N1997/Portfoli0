import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialLinks = () => {
    return (
        <div className="social__icons">
            <div>
                <a target="_blank" href="https://www.linkedin.com/in/dylan-metcalf-7595781b3/" rel="noreferrer">
                     <BsLinkedin />   
                </a>
            </div>
            <div>
                <a target="_blank" href="https://www.github.com/DYL4N1997" rel="noreferrer">
                    <BsGithub />
                </a>
            </div>
        </div>
    );
};

export default SocialLinks;

