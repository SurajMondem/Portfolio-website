import React, { Component } from "react";
import "./Skills.css";
import trello from "../../Assets/Images/trello.png";
import photoshop from "../../Assets/Images/Photoshop.png"

var data = {
        skills : {
            "Programming Languages" : [
                {
                    "name": "Java",
                    "ImagePath": "https://camo.githubusercontent.com/2371fc4408ce813db5e1b6e153e3bb4f211702a6/68747470733a2f2f64657669636f6e732e6769746875622e696f2f64657669636f6e2f64657669636f6e2e6769742f69636f6e732f6a6176612f6a6176612d6f726967696e616c2d776f72646d61726b2e737667"
                },
                {
                    "name": "Python",
                    "ImagePath": "https://camo.githubusercontent.com/188581baa4eb9016e00bf07260f1fe6f12222b0a/68747470733a2f2f64657669636f6e732e6769746875622e696f2f64657669636f6e2f64657669636f6e2e6769742f69636f6e732f707974686f6e2f707974686f6e2d6f726967696e616c2e737667"
                },
                {
                    "name": "C",
                    "ImagePath": "https://camo.githubusercontent.com/3e29f3845124e238ad9853de49c2b637140e8370/68747470733a2f2f64657669636f6e732e6769746875622e696f2f64657669636f6e2f64657669636f6e2e6769742f69636f6e732f632f632d6f726967696e616c2e737667"
                },
                {
                    "name": "C++",
                    "ImagePath": "https://camo.githubusercontent.com/b523c27bbf0caeb3820f3612030b75503cfce9af/68747470733a2f2f64657669636f6e732e6769746875622e696f2f64657669636f6e2f64657669636f6e2e6769742f69636f6e732f63706c7573706c75732f63706c7573706c75732d6f726967696e616c2e737667"
                },
                {
                    "name": "JavaScript",
                    "ImagePath": "https://camo.githubusercontent.com/14758df13e2b9c312a5b911d3bb8b7418f7a8c3c/68747470733a2f2f64657669636f6e732e6769746875622e696f2f64657669636f6e2f64657669636f6e2e6769742f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667"
                }
            ],
            "Frameworks" : [
                {
                    "name": "ReactJS",
                    "ImagePath": "https://camo.githubusercontent.com/4683d18a4a9f845dd7de377a6915dcfc9739a661/68747470733a2f2f64657669636f6e732e6769746875622e696f2f64657669636f6e2f64657669636f6e2e6769742f69636f6e732f72656163742f72656163742d6f726967696e616c2d776f72646d61726b2e737667"
                },
                {
                    "name": "Bootstrap",
                    "ImagePath": "https://camo.githubusercontent.com/036c55e67f83746d724458d93cac87cb031d7459/68747470733a2f2f64657669636f6e732e6769746875622e696f2f64657669636f6e2f64657669636f6e2e6769742f69636f6e732f626f6f7473747261702f626f6f7473747261702d706c61696e2e737667"
                },
                {
                    "name": "ExpressJS",
                    "ImagePath": "https://camo.githubusercontent.com/2227fc3556850d51046d47d57545db9623b9c615/68747470733a2f2f64657669636f6e732e6769746875622e696f2f64657669636f6e2f64657669636f6e2e6769742f69636f6e732f657870726573732f657870726573732d6f726967696e616c2d776f72646d61726b2e737667"
                },
                {
                    "name": "JQuery",
                    "ImagePath": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/jquery/jquery.png"
                }
            ],
            "Database Languages": [
                {
                    "name": "MongoDB",
                    "ImagePath": "https://camo.githubusercontent.com/eaac62a970d1d8e326a6137b99515071b698ee38/68747470733a2f2f64657669636f6e732e6769746875622e696f2f64657669636f6e2f64657669636f6e2e6769742f69636f6e732f6d6f6e676f64622f6d6f6e676f64622d6f726967696e616c2d776f72646d61726b2e737667"
                },
                {
                    "name": "MySQL",
                    "ImagePath": "https://camo.githubusercontent.com/912b3c635b0c0c198c68114f038ecc28a17728e7/68747470733a2f2f64657669636f6e732e6769746875622e696f2f64657669636f6e2f64657669636f6e2e6769742f69636f6e732f6d7973716c2f6d7973716c2d6f726967696e616c2d776f72646d61726b2e737667"
                },
                {
                    "name": "PostgreSQL",
                    "ImagePath": "https://camo.githubusercontent.com/18b40ef4ee8221e5823e7402a224e1e72fc31971/68747470733a2f2f64657669636f6e732e6769746875622e696f2f64657669636f6e2f64657669636f6e2e6769742f69636f6e732f706f737467726573716c2f706f737467726573716c2d6f726967696e616c2d776f72646d61726b2e737667"
                }
            ],
            "Tools":
            [
                {
                    "name": "Git",
                    "ImagePath": "https://camo.githubusercontent.com/855436203f025325f663ef9b9c63a389dd9bbd98/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667"
                },
                {
                    "name": "AWS",
                    "ImagePath": "https://camo.githubusercontent.com/8a3b291f03f6a44f1231bc094833809eaf59fc68/68747470733a2f2f64657669636f6e732e6769746875622e696f2f64657669636f6e2f64657669636f6e2e6769742f69636f6e732f616d617a6f6e77656273657276696365732f616d617a6f6e77656273657276696365732d6f726967696e616c2d776f72646d61726b2e737667"
                },
                {
                    "name": "GCP",
                    "ImagePath": "https://camo.githubusercontent.com/cfdbcaa9abd0103840c2b3befdc02f8d8e842f75/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676f6f676c655f636c6f75642f676f6f676c655f636c6f75642d69636f6e2e737667"
                },
                {
                    "name": "Figma",
                    "ImagePath": "https://camo.githubusercontent.com/812b910fbdc5becadcae6c884ff1bb1712583914/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667"
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