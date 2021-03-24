import React, { Component } from 'react';
import './Menu.css'

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
        <h2><a href="/">Home</a></h2>
        <h2><a href="/portfolio">Portfolio</a></h2>
        <h2><a href="/cv">CV</a></h2>
        <h2><a href="/aboutme">About Me</a></h2>
        </div>
    );
  }
}

export default Menu; 