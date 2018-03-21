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
            From professional hockey player to fullstack web developer, I am a very driven individual.
            My experience with rigorous academics and demanding athletics has made
            me fit for any challenge. I love working in a team environment and
            competing to reach my goals. I believe these intangible skills provide
            me with a solid foundation to succeed in a web developer's
            environment.
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