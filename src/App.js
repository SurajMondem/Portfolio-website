import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Aboutme from "./Components/Aboutme";
import Projects from "./Components/Projects";
import Conclusion from "./Components/Conclusion";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";


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

        if(this.state.sideDrawerOpen) {
             backdrop = <Backdrop click={this.backdropClickHandler}/>
        }

        return (
            <div className="App" style={{height: '100%'}}>
                <Navigation drawerClickHandler = {this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <main style={{marginTop: '64px'}}>
                    <div className={"big-picture"}>
                        <img src='DSC_0244-5.jpg' className={'bigpicture'}/>
                    </div>
                    <Projects/>
                    <Aboutme/>
                    <Conclusion/>
                </main>
            </div>
        );
    }
}

export default App;
