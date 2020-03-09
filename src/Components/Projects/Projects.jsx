import React, {Component} from "react";
import "./Projects.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

export default class Projects extends Component{

    render() {
        return (
        <section className="flex" id="portfolio">
            <div className="header " data-animation="slide-in-right">
                <h1 className={'project-title'}>PROJECTS</h1>
                <hr className="section-header-dark" />
            </div>
            <div className={"section--container"}>
                <div className={"flip-box-container"}>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <div className={"flip-box-title"}>
                                    <h2 >Gator Trader</h2>
                                </div>
                                <div className={"project-img"}>
                                    <img className={"image"} src={"comingsoon.jpg"} alt={""}/>
                                </div>
                            </div>
                            <div className="flip-box-back">
                                <h2 className={"flip-box-title"}>Description</h2>
                                <p className={"box-description"}>
                                    Buy & Sell website focused particularly on school parameters.
                                    Worked in a global team of 7 students. developed a full WWW
                                    application ‘Gator Trader’ using modern teamwork, Software
                                    Engineering processes, and tools. My role was Backend lead of
                                    the project where I designed and developed a MySQL database with
                                    maintaining proper Integration with Frontend.
                                </p>
                                <h6 className={"project-tools"}>
                                    Tools Used: JavaScript, NodeJS, ExpressJS, MySQL, AWS, HTML,
                                    Bootstrap.
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <div className={"flip-box-title"}>
                                    <h2 >Gin Rummy</h2>
                                </div>
                                <div className={"project-img"}>
                                    <img className={"image"} src={"comingsoon.jpg"} alt={""}/>
                                </div>
                            </div>
                            <div className="flip-box-back">
                                <h2 className={"flip-box-title"}>Description</h2>
                                <p className={"box-description"}>
                                    Multiplayer online game developed for the Boardgame Gin Rummy.
                                    Worked in a team of 4 students. Developed a full website with
                                    Authentication using PassportJS and real-time messaging using
                                    Socket.IO functionalities and a working game.
                                </p>
                                <h6 className={"project-tools"}>
                                    Tools Used: JavaScript, NodeJS, ExpressJS, PostgreSQL, Heroku,
                                    Bootstrap, Socket.IO, PassportJS.
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <div className={"flip-box-title"}>
                                    <h2 >Web Server</h2>
                                </div>
                                <div className={"project-img"}>
                                    <img className={"image"} src={"comingsoon.jpg"} alt={""}/>
                                </div>
                            </div>
                            <div className="flip-box-back">
                                <h2 className={"flip-box-title"}>Description</h2>
                                <p className={"box-description"}>
                                    Developed an Application which can Parse HTTP Requests and
                                    Generate Appropriate HTTP Responses. Development of this project
                                    involved designing low fidelity wireframes and Test-Driven
                                    Development using Postman and telnet.
                                </p>
                                <h6 className={"project-tools"}>
                                    Tools Used: Java, Apache server, Postman.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"github-link"}>
                <a className={"github"} href="https://github.com/SurajMondem" target="_blank">
                    <FontAwesomeIcon className={"github-icon"} icon={faGithub} size={'2x'} />
                </a>
            </div>
        </section>
        );
    }
}