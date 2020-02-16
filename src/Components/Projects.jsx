import React, {Component} from "react";
import "./Projects.css";

export default class Projects extends Component{
    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        const stylebar = "animation-delay: 0.3s;";
        const flexrow = "left: -25px;";
        const flexbar = "left: 25px; width: 112px;";
        const inline = "display: inline-block;";

        return (
        <section className="flex" id="portfolio">
            <div className="header waypoint animated slide-in-right" data-animation="slide-in-right">
                <h1 className={'project-title'}>PROJECTS</h1>
            </div>
            <div className="header-bar waypoint animated slide-in-right" data-animation="slide-in-right" data-delay=".3s" style={{stylebar}}>
            </div>

            <div className="filter-wrap waypoint animated fade-in" data-animation="fade-in">
                <div className="flex row" style={{flexrow}}>
                    <div className="filter active" data-filter="all">ALL</div>
                    <div className="filter" data-filter=".node">PROJECT 1</div>
                    <div className="filter" data-filter=".rails">PROJECT 2</div>
                    <div className="filter" data-filter=".js">PROJECT 3</div>
                </div>
                {/*<div className="float-bar" style={{flexbar}}>*/}
                {/*    <div className="flex row" >*/}
                {/*        <div className="filter" data-filter="all">ALL</div>*/}
                {/*        <div className="filter" data-filter=".node">PROJECT 1</div>*/}
                {/*        <div className="filter" data-filter=".rails">PROJECT 2</div>*/}
                {/*        <div className="filter" data-filter=".js">PROJECT 3</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            <div id="projects" className="container flex row wrap animated">
                <div className="container-fluid grid">
                    <div className="card">
                        <img id="project-image" src="html5-css-javascript-logo.png"/>
                            <div id="projectText">
                                <main>
                                    <h4>Project Title 1</h4>
                                    <Modal show={this.state.show} handleClose={this.hideModal} >
                                        <div id="parent-modal">
                                            <div id="project-picture">

                                            </div>
                                            <div id="project-content">
                                                <div id="project-heading">
                                                    <h4 className="heading">Project 1</h4>
                                                </div>
                                                <div id="project-Description">
                                                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis   nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </div>
                                            </div>
                                        </div>
                                    </Modal>
                                    <button className="modalbtn" type='button' onClick={this.showModal}>Learn More</button>
                                </main>
                            </div>
                    </div>
                    <div className="card">
                        <img id="project-image" src="html5-css-javascript-logo.png"/>
                        <div id="projectText">
                            <main>
                                <h4>Project Title 2</h4>
                                <Modal show={this.state.show} handleClose={this.hideModal} >
                                    <div id="parent-modal">
                                        <div id="project-picture">

                                        </div>
                                        <div id="project-content">
                                            <div id="project-heading">
                                                <h4 className="heading">Project 2</h4>
                                            </div>
                                            <div id="project-Description">
                                                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis   nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                                <button className="modalbtn" type='button' onClick={this.showModal}>Learn More</button>
                            </main>
                        </div>
                    </div>
                    <div className="card">
                        {/*<img src="androidLogo.png">*/}
                        <img id="project-image" src="html5-css-javascript-logo.png"/>
                        <div id="projectText">
                            <main>
                                <h4>Project Title 3</h4>
                                <Modal show={this.state.show} handleClose={this.hideModal} >
                                    <div id="parent-modal">
                                        <div id="project-picture">

                                        </div>
                                        <div id="project-content">
                                            <div id="project-heading">
                                                <h4 className="heading">Project 3</h4>
                                            </div>
                                            <div id="project-Description">
                                                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis   nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                                <button className="modalbtn" type='button' onClick={this.showModal}>Learn More</button>
                            </main>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        )
    }

}

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'cardmodal display-block' : 'cardmodal no-display';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <div id="button-container">
                    <button className="learn-more" id={"back"} onClick={handleClose}>
                                    <span className="circle" id={"first"}>
                                        <span className="icon arrow"></span>
                                    </span>
                        <span className="buttontext">Back</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

const container = document.createElement('div');