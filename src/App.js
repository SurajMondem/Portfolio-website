import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Aboutme from "./Components/Aboutme";
import Projects from "./Components/Projects";
import Conclusion from "./Components/Conclusion";


function App() {
  const picturestyle = "width: 100%;"


  return (
    <div className="App">
            <Navigation/>
            <div className={"big-picture"}>
                <img src='Components/DSC_0244-5.jpg' style={{picturestyle}} width={600} height={400}/>
            </div>
            <Projects/>
            <Aboutme/>
            <Conclusion/>
    </div>
  )
}

export default App;
