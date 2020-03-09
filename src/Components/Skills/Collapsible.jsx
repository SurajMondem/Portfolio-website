import React, {Component} from 'react';
import "./Skills.css";

class Collapsible extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(){
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div>
                <div className='collasible-header'>
                    <button className="btn-3" id={"button"} onClick={this.togglePanel}>
                        <span className={"span-1"}>  click to see scale  </span>
                    </button>
                </div>
                {this.state.open ?
                    (
                        <div className='content-skills'>
                            <div className={"skill-group rating"}>
                                <div className={"skill-group-title"}>
                                    Scale ( 0 - 10 )
                                </div>
                                <div className={"skill"}>
                                    <div className={"skill-title"}>I'm the <b>master </b>
                                        of the universe</div>
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
                                        <div className="skill-circle"></div>
                                    </div>
                                </div>
                                <div className={"skill"}>
                                    <div className={"skill-title"}><b>High</b>,
                                        I'm pretty good.</div>
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
                                    <div className={"skill-title"}><b>Medium</b>, I'm trying
                                        to improve.</div>
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
                                <div className={"skill"}>
                                    <div className={"skill-title"}><b>Basic</b>, you can't
                                        always win...</div>
                                    <div className={"skill-proficiency"}>
                                        <div className="skill-circle"></div>
                                        <div className="skill-circle"></div>
                                        <div className="skill-circle"></div>
                                        <div className="skill-circle"></div>
                                        <div className="skill-circle-o"></div>
                                        <div className="skill-circle-o"></div>
                                        <div className="skill-circle-o"></div>
                                        <div className="skill-circle-o"></div>
                                        <div className="skill-circle-o"></div>
                                        <div className="skill-circle-o"></div>
                                    </div>
                                </div>
                                <div className={"skill"}>
                                    <div className={"skill-title"}><b>Uh? </b>
                                        Next question?</div>
                                    <div className={"skill-proficiency"}>
                                        <div className="skill-circle"></div>
                                        <div className="skill-circle"></div>
                                        <div className="skill-circle-o"></div>
                                        <div className="skill-circle-o"></div>
                                        <div className="skill-circle-o"></div>
                                        <div className="skill-circle-o"></div>
                                        <div className="skill-circle-o"></div>
                                        <div className="skill-circle-o"></div>
                                        <div className="skill-circle-o"></div>
                                        <div className="skill-circle-o"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
            </div>);
    }
}

export default Collapsible;