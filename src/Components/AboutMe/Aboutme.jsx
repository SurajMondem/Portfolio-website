import React, {Component} from "react";
import './Aboutme.css';
import PortfolioPic from "../../Assets/Images/Portfolio_pic.jpg"

export default class Aboutme extends Component {
    render() {
        return(
        <div>
            <div className={"about-header"} id={"aboutme"}>
                <h1 className={"title"}>About me</h1>
                <hr className="section-header-dark" />
            </div>
            <div className={"content-wrapper"}>
                <div className={"profile-picture"}>
                    <img src={PortfolioPic} className={'prof-picture'} height={400} width={600} alt={""} />
                </div>
                <div className={"Description-container"}>
                    <p className={"text-content"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis   nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis   nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
        )
    }
}