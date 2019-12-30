import React, {Component} from "react";
import './Navigation.css';

export default class Navigation extends Component {
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
                            <a href={"http://localhost:3000"}>Resume</a>
                        </li>
                        <li>
                            <a href={"http://localhost:3000"}>Projects</a>
                        </li>
                        <li>
                            <a href={"http://localhost:3000"}>Photography</a>
                        </li>
                        <li>
                            <a href={"http://localhost:3000"}>Contact Me</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }

}