import React, { Component } from "react";
import "./navbar.css";
import Scrollchor from 'react-scrollchor';

class Navbar extends Component {
  render() {
    return (
      <div className="navdiv" id="navigation">
        <ul className="navList">
          <li className="navName"><Scrollchor to='#navigation' className="navlinks">AA</Scrollchor></li>
          <li className="navItem"><Scrollchor to="#contact" className="navlinks">Contact</Scrollchor></li>
          <li className="navItem"><Scrollchor to="#projects" className="navlinks">Projects</Scrollchor></li>
          <li className="navItem"><Scrollchor to="#about" className="navlinks">About Me</Scrollchor></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;