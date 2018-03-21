import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navdiv">
        <ul className="navList">
          <li className="navName"><a className="navlinks" href="">AA</a></li>
          <li className="navItem"><a className="navlinks" href="">About Me</a></li>
          <li className="navItem"><a className="navlinks" href="">Projects</a></li>
          <li className="navItem"><a className="navlinks" href="">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;