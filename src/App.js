import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Aboutme from "./Components/Aboutme";
import Projects from "./Components/Projects";
import Conclusion from "./Components/Conclusion";


function App() {

  return (
    <div className="App">
            <Navigation/>
            <div className={"big-picture"}>
                <img src='/DSC_0244-5.jpg' className={'bigpicture'} />
            </div>
            <Projects/>
            <Aboutme/>
            <Conclusion/>
    </div>
  )
}

export default App;
