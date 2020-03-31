import React from "react";
import "./Skills.css";
import Collapsible from "./Collapsible";

const skills = () => (
    <div className={"section-container"}>
        <div className={"section-title"}>SKILLS</div>
        <hr className="section-header-dark" />
        <div className={"skill-container"}>
            <div className={"skill-group"}>
                <div className={"skill-group-title"}>Frontend</div>
                <div className={"skill"}>
                    <div className={"skill-title"}>HTML5, CSS3</div>
                    <div className={"skill-proficiency"}>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle-o"></div>
                    </div>
                </div>
                <div className={"skill"}>
                    <div className={"skill-title"}>JavaScript</div>
                    <div className={"skill-proficiency"}>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle-o"></div>
                        <div className="skill-circle-o"></div>
                    </div>
                </div>
                <div className={"skill"}>
                    <div className={"skill-title"}>JQuery, Bootstrap</div>
                    <div className={"skill-proficiency"}>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle-o"></div>
                        <div className="skill-circle-o"></div>
                        <div className="skill-circle-o"></div>
                    </div>
                </div>
                <div className={"skill"}>
                    <div className={"skill-title"}>React + Redux</div>
                    <div className={"skill-proficiency"}>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle-o"></div>
                        <div className="skill-circle-o"></div>
                    </div>
                </div>
            </div>
            <div className={"skill-group"}>
                <div className={"skill-group-title"}>Backend</div>
                <div className={"skill"}>
                    <div className={"skill-title"}>Nodejs + ExpressJs</div>
                    <div className={"skill-proficiency"}>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle-o"></div>
                        <div className="skill-circle-o"></div>
                        <div className="skill-circle-o"></div>
                    </div>
                </div>
                <div className={"skill"}>
                    <div className={"skill-title"}>Mysql(sql), PostgreSql, MongoDB</div>
                    <div className={"skill-proficiency"}>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle-o"></div>
                    </div>
                </div>
                <div className={"skill"}>
                    <div className={"skill-title"}>Java</div>
                    <div className={"skill-proficiency"}>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle-o"></div>
                        <div className="skill-circle-o"></div>
                    </div>
                </div>
                <div className={"skill"}>
                    <div className={"skill-title"}>C/C++</div>
                    <div className={"skill-proficiency"}>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle"></div>
                        <div className="skill-circle-o"></div>
                        <div className="skill-circle-o"></div>
                        <div className="skill-circle-o"></div>
                        <div className="skill-circle-o"></div>
                    </div>
                </div>
            </div>
            <div className={"skill-group"}>
                <div className={"skill-group-title"}>Tools</div>
                <div className={"skill"}>
                    <div className={"skill-details"}>
                        <div className={"skill-title"}>Git, Slack, Trello</div>
                    </div>
                </div>
                <div className={"skill"}>
                    <div className={"skill-details"}>
                    <div className={"skill-title"}>GCP, AWS, HEROKU</div>
                    </div>
                </div>
                <div className={"skill"}>
                    <div className={"skill-details"}>
                    <div className={"skill-title"}>Jetbrain, VSCode, Eclipse</div>
                    </div>
                </div>
                <div className={"skill"}>
                    <div className={"skill-details"}>
                    <div className={"skill-title"}>Adobe Photoshop, Adobe Lightroom</div>
                    </div>
                </div>
            </div>
        </div>
        <div className={"skill-container scale"}>
            <Collapsible></Collapsible>
        </div>
    </div>
);

export default skills;