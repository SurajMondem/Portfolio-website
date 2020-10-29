import React, { Component } from "react";
import classnames from "classnames";
import './Navigation.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Backdrop from '../Backdrop/Backdrop'

const Resumeurl = 'SurajMondem_Resume.pdf';

class Navigation extends Component {
    constructor(){
        super()
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: false,
        }
    }
    
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };
    
    render(){
        return(
            <React.Fragment>
                <nav className={
                    classnames(
                        "nav-bar", 
                            {
                                "scroll": !this.state.visible
                            }
                        )
                }>
                <div className={"toolbar_toggle-button"}>
                    <DrawerToggleButton click={this.props.drawerClickHandler }/>
                </div>
                <header className={"navbar-logo"}>
                    <h3><a href="/">SURAJ MONDEM</a></h3>
                </header>
                <div className={"spacer"}></div>
                <div className={"navbar-items"}>
                    <ul>
                        <li>
                            <a href={"#aboutme"}>About Me</a>
                        </li>
                        <li>
                            <a href={Resumeurl} target={'_blank'}>Resume</a>
                        </li>
                        <li>
                            <a href={"#portfolio"}>Projects</a>
                        </li>
                        <li>
                            <a href={"/"}>Photography</a>
                        </li>
                        <li>
                            <a href={"#contact-me"}>Contact Me</a>
                        </li>
                    </ul>
                </div>
                </nav>
            </React.Fragment>
        )
    }
}

// const Navigations = props => (

//     // <header className={"toolbar"}>
//     //     <nav className={"toolbar_navigation"}>
//     //         
//     //         <div className={"toolbar_logo"}><a href="/">SURAJ MONDEM</a></div>
//     //         <div className={"spacer"}></div>
//     //         <div className={"toolbar_navigation_items"}>
//     //             <ul>
//     //                 <li>
//     //                     <a href={"#aboutme"}>About Me</a>
//     //                 </li>
//     //                 <li>
//     //                     <a href={Resumeurl} target={'_blank'}>Resume</a>
//     //                 </li>
//     //                 <li>
//     //                     <a href={"#portfolio"}>Projects</a>
//     //                 </li>
//     //                 <li>
//     //                     <a href={"/"}>Photography</a>
//     //                 </li>
//     //                 <li>
//     //                     <a href={"#contact-me"}>Contact Me</a>
//     //                 </li>
//     //             </ul>
//     //         </div>
//     //     </nav>
//     // </header>
// );

export default Navigation;
