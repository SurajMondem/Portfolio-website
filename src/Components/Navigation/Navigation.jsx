import React from "react";
import './Navigation.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Resumeurl = 'Resume.pdf';
const toolbar = props => (
    <header className={"toolbar"}>
        <nav className={"toolbar_navigation"}>
            <div className={"toolbar_toggle-button"}>
                <DrawerToggleButton click={props.drawerClickHandler }/>
            </div>
            <div className={"toolbar_logo"}><a href="/">SURAJ MONDEM</a></div>
            <div className={"spacer"}></div>
            <div className={"toolbar_navigation_items"}>
                <ul>
                    <li>
                        <a href={"#aboutme"}>About Me</a>
                    </li>
                    <li>
                        <a href={Resumeurl} target={'_blank'}>Resume</a>
                    </li>
                    <li>
                        <a href={"#portfolio"}>Projects</a>
                    </li>
                    <li>
                        <a href={""}>Photography</a>
                    </li>
                    <li>
                        <a href={"#contact-me"}>Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
