import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Aboutme from "./Components/Aboutme";

function App() {
  const picturestyle = "width: 100%;"


  return (
    <div className="App">
            <Navigation/>
            <div className={"big-picture"}>
                <img src='DSC_0244-5.jpg'  style={{picturestyle}} width={600} height={400}/>
            </div>
            <Aboutme/>
    </div>
  )
}

export default App;
