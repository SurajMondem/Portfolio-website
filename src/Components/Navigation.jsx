import React, {Component} from "react";
import './Navigation.css';

export default class Navigation extends Component {

    openResume(){
        window.open('/Intern_Resume.pdf', '_blank');
    };

    render() {
        return(
            <div className={"Navigation-Wrapper"}>
                <nav>
                    <h1 className={"head-name"}>Suraj Mondem</h1>
                    <ul>

                        <li>
                            <a href={"#aboutme"}>About Me</a>
                        </li>
                        <li>
                            <a href={this.openResume}>Resume</a>
                        </li>
                        <li>
                            <a href={this.openResume}>Skills</a>
                        </li>
                        <li>
                            <a href={"#portfolio"}>Projects</a>
                        </li>
                        <li>
                            <a href={"#"}>Photography</a>
                        </li>
                        <li>
                            <a href={"#contact-me"}>Contact Me</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }

}