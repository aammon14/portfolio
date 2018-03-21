import React, { Component } from "react";
import hockeyPic from "../../images/nailers.jpg";
import profilePic from "../../images/IMG_3200.jpg";
import './aboutme.css'

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutComponent">
      <h1>About Me</h1>
        <div className="aboutMe"> 
          <p>
            My experience with rigorous academics and demanding athletics has made
            me fit for any challenge. I love working in a team environment and
            competing to reach my goals. I believe these intangible skills provide
            me with a solid foundation to succeed in a web developer's
            environment.
          </p>
        </div>
        <div>
          <img src={hockeyPic} alt={"hockey"} />
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Express</li>
            <li>Node</li>
            <li>Ruby</li>
          </ul>
        </div>
        <div>
          <img src={profilePic} alt={"profile"} />
        </div>
      </div>
    );
  }
}

export default AboutMe;