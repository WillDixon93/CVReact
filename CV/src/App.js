import { Route, HashRouter } from "react-router-dom"
import React, { Component } from 'react'; 
import CVhome from './CVComponents/CVhome.js';
import MenuContainer from './MenuContainer.js';
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
        <Route path="/cv" component={CV}/>
        <Route path="/cv/home" component={CVhome} />
        <Route path="/cv/workexperience" component={WorkExperience}/>
        <Route path="/cv/education" component={Education}/>
        <Route path="/cv/makers" component={Makers}/>
        <Route path="/cv/hobbies" component={Hobbies}/>
        <MenuContainer />
      </HashRouter>
    );
  }
}

export default App;