import { Route, HashRouter } from "react-router-dom"
import React, { Component } from 'react'; 
import CVhome from './CVComponents/CVhome.js';
import Education from './CVComponents/Education.js';
import Hobbies from './CVComponents/Hobbies.js';
import Makers from './CVComponents/Makers.js';
import WorkExperience from './CVComponents/workExperience.js';
import Home from './Home.js';
import Portfolio from './Portfolio.js';
import aboutMe from './aboutMe.js';
import CV from "./CV.js";

class App extends Component { 
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/aboutme" component={aboutMe} />
        <Route exact path="/cv/home" component={CVhome} />
        <Route exact path="/cv/workexperience" component={WorkExperience}/>
        <Route exact path="/cv/education" component={Education}/>
        <Route exact path="/cv/makers" component={Makers}/>
        <Route exact path="/cv/hobbies" component={Hobbies}/>
        <Route exact path="/cv" component={CV}/>
      </HashRouter>
    );
  }
}

export default App;