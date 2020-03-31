import React, {Component} from "react";
import './Aboutme.css';
import PortfolioPic from "../../Assets/Images/Portfolio_pic.jpg";
import Typical from 'react-typical';

export default class Aboutme extends Component {
    render() {
        return(
        <div>
            <div className={"about-header"} id={"aboutme"}>
                <h1 className={"title"}>About me</h1>
                <hr className="section-header-dark" />
            </div>
            <div className={"content-wrapper"}>
                <div className={"profile-picture"}>
                    <img src={PortfolioPic} className={'prof-picture'} height={400} width={600} alt={""} />
                </div>
                <div className={"Description-container"}>
                    <h3 className={"text-header"}>Hi, I'm Suraj Mondem</h3>
                    <p className={"text-typing"}>
                        I'm a{' '}
                        <Typical
                              loop={Infinity}
                              wrapper={"b"}
                              steps={[
                                  'Full-Stack Developer ',
                                  1000,
                                  'Photographer ',
                                  1000,
                                  'Chess Player ',
                                  1000,
                                  'Travel Enthusiast ',
                                  1000,
                              ]}
                        />
                    </p>
                    <p className={"text-content"}>
                        Welcome to my portfolio website! I am Suraj, a 22-year-old Software Developer that loves to build interactive
                        products with careful user research, design, planning, and strong engineering principles. I'm currently proficient
                        as a Full-stack developer and pursuing my Undergraduate degree in Computer Science from San Francisco State University.

                        <br/><br/>

                        I believe the universe is made up of stories that I just try to capture into my camera. I am also a self-taught photographer
                        who enjoys traveling around to new places and take pictures. I specialize in landscape photography and love to edit pictures
                        with the most eye-appealing color combinations using professional software like Photoshop and Lightroom. Photography for me
                        is an art-form that gives me peace and a way to convey the stories to everyone.
                    </p>
                </div>
            </div>
        </div>
        )
    }
}