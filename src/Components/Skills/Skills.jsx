import React, { Component } from "react";
import "./Skills.css";


class Skills extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="section">
                    <div className="header">
                        <h1 className="title">SKILLS</h1>
                        <hr className="section-header-dark" />
                    </div>
                    <div className="container">
                        <div className="cards-group">
                            <div className="cards">
                                <div className="card-info">
                                    <img src="https://s3.amazonaws.com/uifaces/faces/twitter/mrvanz/128.jpg"></img>
                                    <div className="card-content">
                                        <h4>
                                            Angular
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div className="cards">
                                <div className="card-info">
                                    <img src="https://s3.amazonaws.com/uifaces/faces/twitter/mrvanz/128.jpg"></img>
                                    <div className="card-content">
                                        <h4>
                                            Angular
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div className="cards">
                                <div className="card-info">
                                    <img src="https://s3.amazonaws.com/uifaces/faces/twitter/mrvanz/128.jpg"></img>
                                    <div className="card-content">
                                        <h4>
                                            Angular
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div className="cards">
                                <div className="card-info">
                                    <img src="https://s3.amazonaws.com/uifaces/faces/twitter/mrvanz/128.jpg"></img>
                                    <div className="card-content">
                                        <h4>
                                            Angular
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cards-group">
                            <div className="cards"></div>
                        </div>
                        <div className="cards-group">
                            <div className="cards"></div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Skills;