import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <li><Link to="/">Shmee</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/cv">CV</Link></li>
        <li><Link to="/aboutme">About Me</Link></li>
        </div>

    );
  }
}

export default Menu; 