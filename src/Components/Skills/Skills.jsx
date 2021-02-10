import React, { Component } from "react";
import "./Skills.css";
import trello from "../../Assets/Images/trello.png";
import photoshop from "../../Assets/Images/Photoshop.png"

var data = {
        skills : {
            "Programming Languages" : [
                {
                    "name": "Java",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/Java.svg"
                },
                {
                    "name": "Python",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/Python.svg"
                },
                {
                    "name": "C",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/C.svg"
                },
                {
                    "name": "C++",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/CPP.svg"
                },
                {
                    "name": "JavaScript",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/JS.svg"
                }
            ],
            "Frameworks" : [
                {
                    "name": "ReactJS",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/React.svg"
                },
                {
                    "name": "Bootstrap",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/Bootstrap.svg"
                },
                {
                    "name": "ExpressJS",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/Express.svg"
                },
                {
                    "name": "JQuery",
                    "ImagePath": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/jquery/jquery.png"
                },
                {
                    "name": "OpenCV",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/OpenCV.svg"
                }
            ],
            "Database Languages": [
                {
                    "name": "MongoDB",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/MongoDB.svg"
                },
                {
                    "name": "MySQL",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/Mysql.svg"
                },
                {
                    "name": "PostgreSQL",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/PostgresSql.svg"
                }
            ],
            "Tools":
            [
                {
                    "name": "Git",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/Git.svg"
                },
                {
                    "name": "AWS",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/AWS.svg"
                },
                {
                    "name": "GCP",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/GCP.svg"
                },
                {
                    "name": "Figma",
                    "ImagePath": "https://gist.githubusercontent.com/SurajMondem/1288fd40a9f30f54eac68d9aa41958a8/raw/a33e71cf94598760634efb862a36925c589b91a3/Figma.svg"
                },
                {
                    "name": "Photoshop",
                    "ImagePath": photoshop 
                },
                {
                    "name": "Trello",
                    "ImagePath": trello
                }
            ]
        }
    }

class Skills extends Component {
    render(){
        //console.log(data.skills["Programming Languages"]);
        let Planguages = data.skills["Programming Languages"];
        let Dlanguages = data.skills["Database Languages"];
        let tools = data.skills.Tools;
        let frameworks = data.skills.Frameworks;

        return(
            <React.Fragment>
                <div className="section" style= {{marginBottom:"60px"}}>
                    <div className="header">
                        <h1 className="title">SKILLS</h1>
                        <hr className="section-header-dark" />
                    </div>
                    <div className="container">
                        <div className="cards-group">
                            <div className="cards-title">
                                <div className="card-head">
                                    <div className="card-info">
                                        <div className="card-content">
                                            <h4>
                                                Programming Languages
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cards-data">
                                {Planguages.map((data, index) => (
                                    <div className="cards" key = {index}>
                                        <div className="card-info">
                                            <img src={data.ImagePath} alt=""></img>
                                            <div className="card-content">
                                                <h4>
                                                    {data.name}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                )) }
                            </div>
                        </div>
                        <div className="cards-group">
                            <div className="cards-title">
                                <div className="card-head">
                                    <div className="card-info">
                                        <div className="card-content">
                                            <h4>
                                                Frameworks
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cards-data">
                                {frameworks.map((data, index) => (
                                    <div className="cards" key={index}>
                                        <div className="card-info">
                                            <img src={data.ImagePath} alt=""></img>
                                            <div className="card-content">
                                                <h4>
                                                    {data.name}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                )) }
                            </div>
                        </div>
                        <div className="cards-group">
                            <div className="cards-title">
                                <div className="card-head">
                                    <div className="card-info">
                                        <div className="card-content">
                                            <h4>
                                                Database Languages
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cards-data">
                                {Dlanguages.map((data, index) => (
                                    <div className="cards" key={index}>
                                        <div className="card-info">
                                            <img src={data.ImagePath} alt=""></img>
                                            <div className="card-content">
                                                <h4>
                                                    {data.name}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                )) }
                            </div>
                        </div>
                        <div className="cards-group">
                            <div className="cards-title">
                                <div className="card-head">
                                    <div className="card-info">
                                        <div className="card-content">
                                            <h4>
                                                Tools
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cards-data">
                                {tools.map((data, index) => (
                                    <div className="cards" key={index}>
                                        <div className="card-info">
                                            <img src={data.ImagePath} alt=""></img>
                                            <div className="card-content">
                                                <h4>
                                                    {data.name}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                )) }
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Skills;