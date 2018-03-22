import React, { Component } from 'react';
import './projects.css';
import laxmatchImg from "../../images/LaxMatch.png";
import jacksburgersImg from "../../images/JacksBurgers.png";
import lbeatsImg from "../../images/LBeats.png";
import connectfourImg from "../../images/ConnectFour.png";

class Projects extends Component {
  render() {
    return(
      <div id='projects' className='projectDiv'>
        <h1>Projects</h1>
        
            <div className='project'>
              <div className='projectImage'>
                <img src={laxmatchImg} alt='LaxMatch Homescreen' />
              </div>
              <div className='projectInfo'>
                <h3>LaxMatch</h3>
                <p>A full stack web app built using a Ruby on Rails backend with a React front-end. The app serves as a platform for connecting lacrosse coaches with lacrosse players for personal lessons.</p>
                <a href="http://public-hearing.surge.sh/">View Site</a>
                <a href="https://github.com/aammon14/laxmatch">View Code</a>
              </div>
              
            </div>

            <div className='project'>
              <div className='projectInfo'>
                <h3>Jack's Burgers</h3>
                <p>A 'dine-in' restaurant ordering app using a React front-end and an Express backend</p>
                <a href="https://jacks-app.herokuapp.com/">View Site</a>
                <a href="https://github.com/aammon14/Jacks_Burgers">View Code</a>
              </div>
              <div className='projectImage'>
                <img src={jacksburgersImg} alt='Jacks Burgers Homescreen' />
              </div>
            </div>

            <div className='project'>
              <div className='projectImage'>
                <img src={lbeatsImg} alt='Long Beach Eats Homescreen' />
              </div>
              <div className='projectInfo'>
                <h3>Long Beach Eats</h3>
                <p>My first full-stack CRUD app. Sign in and find local Long Beach restaurants, add to favorites, update ratings, and delete from favorites.</p>
                <a href="https://pure-refuge-14583.herokuapp.com/">View Site</a>
                <a href="https://github.com/aammon14/LB_Eats">View Code</a>
              </div>
              
            </div>

            <div className='project'>
              <div className='projectInfo'>
                <h3>Connect Four</h3>
                <p>Classic Connect 4 game using HTML, CSS, and JavaScript. Two-player mode with check-for-win logic.</p>
                <a href='https://aammon14.github.io/Connect_Four/'>View Site</a>
                <a href='https://github.com/aammon14/Connect_Four'>View Code</a>
              </div>
              <div className='projectImage'>
                <img src={connectfourImg} alt='Connect Four Homescreen' />
              </div>
            </div>
        
      </div>
    )
  }
}

export default Projects;