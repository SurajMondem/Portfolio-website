import React, {Component} from "react";
import './Conclusion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {faFacebook , faTwitter , faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import CircularProgress from "@material-ui/core/CircularProgress";
require('dotenv').config();


export default class Conclusion extends Component {
    constructor(){
        super();

        this.state = {
            profile: null,
            access_token: null,
        };

    } 

    async fetchInstaFeed(){
        const access_token_before = process.env.REACT_APP_API_KEY;
        const grant_type = "ig_refresh_token";
        const refreshurl = `https://graph.instagram.com/refresh_access_token?grant_type=${grant_type}&access_token=${access_token_before}`;
        const res = await fetch(refreshurl);
        let result = await res.json();
        this.setState({access_token: result.access_token})
        const access_token = this.state.access_token != null ? this.state.access_token : process.env.REACT_APP_API_KEY;
        const userid = process.env.REACT_APP_USER_ID;
        const fields = "id,media_type,media_url";
        const url = `https://graph.instagram.com/${userid}/media?fields=${fields}&access_token=${access_token}`;
        const response = await fetch(url);
        let data = await response.json();
        this.setState({profile: data.data })
    }

    componentDidMount(){
        this.fetchInstaFeed();
    };

    openResume() {
        window.open('./SurajMondem_Resume.pdf','_blank');
    };

    render() {
        let content = this.state.profile;
        //console.log(content);
        while(content == null) return <CircularProgress color="secondary" />;
        content = content.slice(0,12);
        return(
            <React.Fragment>
                <div className={"footer"}>
                    <div className={"some-more"}>
                        <div className="picture-heading">
                            <h1 className="title">INSTAGRAM</h1>
                            <hr className="section-header-dark" />
                        </div>
                        <div className={"ig-profile"}>
                            {content.map((data, index) => (
                                <div className="images" key={index}><img className={"pictures"} src={data.media_url} alt={""}/></div>
                            ))}
                            
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
                </div>
                <footer>
                    <div className="footer">
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
                                    <a href="https://www.facebook.com/surajmondem888" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size={'2x'} /></a>
                                    <span>' '</span>
                                    <a href="https://twitter.com/MondemSuraj" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size={'2x'} /></a>
                                    <span>' '</span>
                                    <a href="https://www.linkedin.com/in/surajmondem" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size={'2x'} /></a>
                                    <span>' '</span>
                                    <a href="https://github.com/SurajMondem" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size={'2x'} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }

}