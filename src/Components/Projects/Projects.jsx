import React, {Component} from "react";
import "./Projects.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import Comingsoon from '../../Assets/Images/comingsoon.jpg';
import Java from '../../Assets/Images/java-logo.png';
import Node from '../../Assets/Images/Node2.png';
import Mern from '../../Assets/Images/MernStack.png';
import Mern2 from '../../Assets/Images/Mern.jfif';
import NodeJs from '../../Assets/Images/NodeJs.png';
import NodeSvg from '../../Assets/Images/NodeSvg.png';
import Reactpic from '../../Assets/Images/React.png';

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
                    {/*GATOR TRADER*/}
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <div className={"flip-box-title"}>
                                    <h2 >Gator Trader</h2>
                                </div>
                                <div className={"project-img"}>
                                    <img className={"image"} src={Node} alt={""}/>
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
                    {/*GIN RUMMY*/}
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <div className={"flip-box-title"}>
                                    <h2>Gin Rummy</h2>
                                </div>
                                <div className={"project-img"}>
                                    <img className={"image"} src={Node} alt={""}/>
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
                    {/*WEB SERVER*/}
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <div className={"flip-box-title"}>
                                    <h2 >Web Server</h2>
                                </div>
                                <div className={"project-img"}>
                                    <img className={"image"} src={Java} alt={""}/>
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
                    {/*CORONA APP*/}
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <div className={"flip-box-title"}>
                                    <h2 >Corona Tracker</h2>
                                </div>
                                <div className={"project-img"}>
                                    <img className={"image"} src={Reactpic} alt={""}/>
                                </div>
                            </div>
                            <div className="flip-box-back">
                                <h2 className={"flip-box-title"}>Description</h2>
                                <p className={"box-description"}>
                                    A self designed and developed Covid-19 cases tracking app. I created this app
                                    to spread awareness and updates of Corona Virus around the world. the project
                                    updates real-time data using public RESTful APIs. the design approach uses trendy
                                    Neomorphistic UI with minimalistic color combinations.
                                    <br/>
                                    <b>Website:</b> <a style={{fontWeight: "bold"}} href={"https://coronainworld.com"} target={"_blank"}>Corona Tracker</a>
                                </p>
                                <h6 className={"project-tools"}>
                                    Tools Used: JavaScript, React, HTML, CSS
                                </h6>
                            </div>
                        </div>
                    </div>
                    {/*Frontend Youtube clone*/}
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <div className={"flip-box-title"}>
                                    <h2 >Youtube Clone</h2>
                                </div>
                                <div className={"project-img"}>
                                    <img className={"image"} src={Reactpic} alt={""}/>
                                </div>
                            </div>
                            <div className="flip-box-back">
                                <h2 className={"flip-box-title"}>Description</h2>
                                <p className={"box-description"}>
                                    Created a self developed Frontend Youtube clone using Reactjs, the
                                    project fetches Video data from Public RESTful APIs. the project has been
                                    made with proper integration of Video Functionalities and Responsive Design.
                                </p>
                                <h6 className={"project-tools"}>
                                    Tools Used: JavaScript, HTML, CSS, React, MaterialUI.
                                </h6>
                            </div>
                        </div>
                    </div>
                    {/*MarkYourVote*/}
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <div className={"flip-box-title"}>
                                    <h2 >Mark Your Vote</h2>
                                </div>
                                <div className={"project-img"} style={{marginTop: "30px"}}>
                                    <img className={"image"} src={Mern2} alt={""}/>
                                </div>
                            </div>
                            <div className="flip-box-back">
                                <h2 className={"flip-box-title"}>Description</h2>
                                <p className={"box-description"}>
                                    Mark Your Vote is a polling application where Users can vote on various questions
                                    and create their own. this project is developed using proper Model-View-Controller
                                    concept which provides the Graphical results in Real-time to Users. Used proper
                                    state management of Data using React and Redux technologies.
                                </p>
                                <h6 className={"project-tools"}>
                                    Tools Used: MongoDB, ExpressJs, React, Redux, NodeJs, ChartJs
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