import './App.css';
import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home.js';
import Education from './Education.js';
import WorkExperience from './workExperience';
import Makers from './Makers.js';
import Hobbies from './Hobbies.js'; 

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Will Dixon CV</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/workexperience">Work Experience</NavLink></li>
            <li><NavLink to="/makers">Makers</NavLink></li>
            <li><NavLink to="/education">Education</NavLink></li>
            <li><NavLink to="/hobbies">Hobbies</NavLink></li>
          </ul>
          <div className="content"> 
            <Route exact path="/" component={Home}/>
            <Route path="/workexperience" component={WorkExperience}/>
            <Route path="/education" component={Education}/>
            <Route path="/makers" component={Makers}/>
            <Route path="/hobbies" component={Hobbies}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
