import './CSS/CV.css';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MenuContainer from './MenuContainer.js';

class CV extends Component {
  render() {
    return (
        <div>
          <MenuContainer />
          <h1>Will Dixon CV</h1>
          <ul className="header">
            <li><NavLink to="/CV/home">Home</NavLink></li>
            <li><NavLink to="/CV/workexperience">Work Experience</NavLink></li>
            <li><NavLink to="/CV/makers">Makers</NavLink></li>
            <li><NavLink to="/CV/education">Education</NavLink></li>
            <li><NavLink to="/CV/hobbies">Hobbies</NavLink></li>
          </ul>
        </div>
    );
  }
}

export default CV;
