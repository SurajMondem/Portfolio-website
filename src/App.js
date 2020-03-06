import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Aboutme from "./Components/AboutMe/Aboutme";
import Projects from "./Components/Projects/Projects";
import Conclusion from "./Components/Conclusion/Conclusion";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import Skills from "./Components/Skills/Skills";
import Background from "./Zion-park.jpg"


class App extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
      this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
    };

    backdropClickHandler = () => {
      this.setState({sideDrawerOpen: false});
    };


    render() {

        let backdrop;

        const sectionStyle = {
            backgroundImage: "url(" + {Background} + ")"
        }

        if(this.state.sideDrawerOpen) {
             backdrop = <Backdrop click={this.backdropClickHandler}/>
        }

        return (
            <div className="App" style={{height: '100%'}}>
                <Navigation drawerClickHandler = {this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <main style={{marginTop: '62px'}}>
                    <div style={sectionStyle} className={"big-picture"}>
                        <svg className={"canvas"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,192L720,320L1440,160L1440,320L720,320L0,320Z"></path>
                        </svg>
                    </div>
                    <Skills/>
                    <Projects/>
                    <Aboutme/>
                    <Conclusion/>
                </main>
            </div>
        );
    }
}

export default App;
