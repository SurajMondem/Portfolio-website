import React from 'react';
import "./SideDrawer.css"

const Resumeurl = "SurajMondem_Resume.pdf";
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <a href={"#aboutme"}>About Me</a>
                </li>
                <li>
                    <a href={Resumeurl} target={'_blank'} rel={"noopener noreferrer"}>Resume</a>
                </li>
                <li>
                    <a href={"#portfolio"}>Projects</a>
                </li>
                <li>
                    <a href={"/"}>Photography</a>
                </li>
                <li>
                    <a href={"#contact-me"}>Contact Me</a>
                </li>
            </ul>
        </nav>
    );
};

export default sideDrawer;