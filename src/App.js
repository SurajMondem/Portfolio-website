import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Aboutme from "./Components/AboutMe/Aboutme";
import Projects from "./Components/Projects/Projects";
import Conclusion from "./Components/Conclusion/Conclusion";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import Skills from "./Components/Skills/Skills";
import LandingSection from "./Components/LandingSection/LandingSection"
import "bootstrap/dist/css/bootstrap.min.css";


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

        // const sectionStyle = {
        //     backgroundImage: "url(" + {Background} + ")"
        // };

        if(this.state.sideDrawerOpen) {
             backdrop = <Backdrop click={this.backdropClickHandler}/>
        }

        return (
            <div className="App" style={{height: '100%'}}>
                <Navigation drawerClickHandler = {this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <LandingSection/>
                <Skills/>
                <Projects/>
                <Aboutme/>
                <Conclusion/>
            </div>
        );
    }
}

export default App;
