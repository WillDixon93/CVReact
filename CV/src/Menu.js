import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './CSS/Menu.css'

class Menu extends Component {
  render () { 
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu"
          onMouseDown={this.props.handleMouseDown}
          className={visibility}>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink exact to="/cv">CV</NavLink></li>
        <li><NavLink exact to="/aboutme">About Me</NavLink></li>
        </div>
    );
  }
}

export default Menu; 