import React, { Component } from "react";
import hockeyPic from "../../images/nailers.jpg";
import profilePic from "../../images/IMG_3200.jpg";
import './aboutme.css';

class AboutMe extends Component {
  render() {
    return (
      <div id="about" className="aboutComponent">
        <div className="aboutMe">
          <h1>About Me</h1>
          <p>
            Having recently finished up a three-year career in professional hockey, I am transitioning into a career in the field of web development. As an avid problem-solver with a great attention to detail and a passion for building things, web development came naturally to me and has become a great passion of mine. I apply the same work ethic, energy, and drive that led to my previous successes in hockey, into creating interactive, responsive, and useful full-stack web applications.
          </p>
          <br />
          <h1>Developer Skills</h1>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React.js</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>Postgresql</li>
            <li>Ruby</li>
            <li>Ruby On Rails</li>
            <li>Heroku</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="profPic">
          <img src={profilePic} alt={"profile"} />
          <img src={hockeyPic} alt={"hockey"} />
        </div>
      </div>
    );
  }
}

export default AboutMe;