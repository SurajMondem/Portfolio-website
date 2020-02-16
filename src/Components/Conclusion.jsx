import React, {Component} from "react";
import './Conclusion.css';
import Picture from "./comingsoon.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {faFacebook , faTwitter , faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
export default class Conclusion extends Component {
    render() {
        return(
            <footer>
                <div className={"footer"}>
                    <div className={"some-more"}>
                        <div >
                            <img className={"coming-soon"} src={Picture} width={1280} height={720}/>
                        </div>
                        <div className={"buttons"}>
                            <div id="container">
                                <button className="learn-more" id={"Resume"}>
                                    <span className="circle" id={"first"}>
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Resume</span>
                                </button>
                            </div>
                            <div id="container">
                                <button className="learn-more" id={"Photography"}>
                                    <span className="circle" id={"second"}>
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Photography</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={"footer-distributed"}>
                        <div className="footer-left">
                            <h2 className="footer-name">Suraj Mondem</h2>
                            <p className="footer-links">
                                <a href="#">Home </a>
                                ·
                                <a href="#"> About Me </a>
                                ·
                                <a href="#"> Projects </a>
                                ·
                                <a href="#"> Photography </a>
                                ·
                                <a href="#"> Contact </a>
                            </p>
                            <p className="footer-company-name" id={"contact-me"}>Suraj Mondem © 2020</p>
                        </div>

                        <div className="footer-center">
                            <div>
                                <div className={"tag"}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} size={"2px"}/>
                                </div>
                                <p><span>810 Gonzalez Drive</span> San Francisco, CA - 94132 </p>
                            </div>
                            <div>
                                <div className={"tag"}>
                                <FontAwesomeIcon icon={faPhoneAlt}/>
                            </div>
                                <p>+1 (415)797-8504</p>
                            </div>
                            <div>
                                <div className={"tag"}>
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>
                                <p><a href="mailto:surajmondem@gmail.com">surajmondem@gmail.com</a></p>
                            </div>
                        </div>

                        <div className="footer-right">
                            <p className="footer-company-about">
                            </p>
                            <div className="footer-icons">
                                <a href="#"><FontAwesomeIcon icon={faFacebook} size={'2x'} /></a>
                                <span>' '</span>
                                <a href="#"><FontAwesomeIcon icon={faTwitter} size={'2x'} /></a>
                                <span>' '</span>
                                <a href="#"><FontAwesomeIcon icon={faLinkedin} size={'2x'} /></a>
                                <span>' '</span>
                                <a href="#"><FontAwesomeIcon icon={faGithub} size={'2x'} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

}