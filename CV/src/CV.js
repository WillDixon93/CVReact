import './CSS/CV.css';
import React, { Component } from 'react';
import { NavLink, HashRouter } from 'react-router-dom';

class CV extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Will Dixon CV</h1>
          <ul className="header">
            <li><NavLink exact to="/CV/home">Home</NavLink></li>
            <li><NavLink to="/CV/workexperience">Work Experience</NavLink></li>
            <li><NavLink to="/CV/makers">Makers</NavLink></li>
            <li><NavLink to="/CV/education">Education</NavLink></li>
            <li><NavLink to="/CV/hobbies">Hobbies</NavLink></li>
          </ul>
        </div>
      </HashRouter>
    );
  }
}

export default CV;
