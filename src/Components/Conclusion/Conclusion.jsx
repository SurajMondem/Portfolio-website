import React, {Component} from "react";
import './Conclusion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {faFacebook , faTwitter , faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import Picture from '../../Assets/Images/comingsoon.png'

export default class Conclusion extends Component {

    openResume() {
        window.open('./SurajMondem_Resume.pdf','_blank');
    };

    render() {
        return(
            <footer>
                <div className={"footer"}>
                    <div className={"some-more"}>
                        <div >
                            <img className={"coming-soon"} src={Picture} width={1280} height={720} alt={""}/>
                        </div>
                        <div className={"buttons"}>
                            <div id="container-left">
                                <button className="btn-1" id={"Resume"} onClick={this.openResume}>
                                    <span className={"span"}>  Resume  </span>
                                </button>
                            </div>
                            <div id="container-right">
                                <button className="btn-2" id={"Photography"}>
                                    <span className={"span"}>Photography</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={"footer-distributed"}>
                        <div className="footer-left" id={"item"}>
                            <div className={"left-content"}>
                                <h2 className="footer-name">Suraj Mondem</h2>
                                <p className="footer-links">
                                <a href="/">Home </a>
                                ·
                                <a href="#aboutme"> About Me </a>
                                ·
                                <a href="#portfolio"> Projects </a>
                                ·
                                <a href="/"> Photography </a>
                                ·
                                <a href="contact-me"> Contact </a>
                                </p>
                                <p className="footer-company-name" id={"contact-me"}>Suraj Mondem © 2020</p>
                            </div>
                        </div>
                        <div className="footer-center" id={"item"} >
                            <div className={"center-content"}>
                                <div className={"tag-block"}>
                                    <div className={"tag"}>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </div>
                                        <p> San Francisco, CA - 94132 </p>
                                </div>
                                <div className={"tag-block"}>
                                    <div className={"tag"}>
                                        <FontAwesomeIcon icon={faPhoneAlt}/>
                                    </div>
                                    <p>+1 (415)797-8504</p>
                                </div>
                                <div className={"tag-block"}>
                                    <div className={"tag"}>
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                    </div>
                                    <p><a href="mailto:surajmondem@gmail.com">surajmondem@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-right" id={"item"}>
                            <div className={"right-content"}>
                                <div className="footer-icons">
                                    <a href="https://www.facebook.com/surajmondem888" target="_blank"><FontAwesomeIcon icon={faFacebook} size={'2x'} /></a>
                                    <span>' '</span>
                                    <a href="https://twitter.com/MondemSuraj" target="_blank"><FontAwesomeIcon icon={faTwitter} size={'2x'} /></a>
                                    <span>' '</span>
                                    <a href="https://www.linkedin.com/in/surajmondem" target="_blank"><FontAwesomeIcon icon={faLinkedin} size={'2x'} /></a>
                                    <span>' '</span>
                                    <a href="https://github.com/SurajMondem" target="_blank"><FontAwesomeIcon icon={faGithub} size={'2x'} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

}