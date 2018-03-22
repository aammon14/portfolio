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
                <p>Lax Match is a full-stack web application that serves as a platform for connecting lacrosse coaches with lacrosse players for personal lessons.  Players can sign in and search for coaches that they would like to book lessons with.  Coaches can create profiles that the players can see in order to get lessons booked. <br /><em>Technologies used: </em> Ruby on Rails, React</p>
                <a href="http://public-hearing.surge.sh/">View Site</a>
                <a href="https://github.com/aammon14/laxmatch">View Code</a>
              </div>
              
            </div>

            <div className='project'>
              <div className='projectInfo'>
                <h3>Jack's Burgers</h3>
                <p>Jack's Burgers is a 'dine-in' restaurant ordering application. The purpose of the application is to allow restaurant-goers the ability to place orders directly from their phone, instead of off an 'old-fashioned' menu. Customer's orders get sent directly to the kitchen and placed in a queue.  Once completed, the orders will show up in the customer's previous orders.<br /><em>Technologies used: </em> Express, React</p>
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
                <p>Long Beach Eats was my first full-stack CRUD app. The app allows users to sign up and sign in to where they can view information on local Long Beach restaurants and add/remove restaurants to/from their favorites where they can update the restaurant rating. The restaurant information was pulled in from the Yelp API.<br /><em>Technologies used: </em> Express, HTML, CSS</p>
                <a href="https://pure-refuge-14583.herokuapp.com/">View Site</a>
                <a href="https://github.com/aammon14/LB_Eats">View Code</a>
              </div>
              
            </div>

            <div className='project'>
              <div className='projectInfo'>
                <h3>Connect Four</h3>
                <p>This is a classic remake of the board game 'Connect Four'. The game allows for two players to alternate turns dropping discs into the gameboard.  The first player to get four in a row either vertically, horizontally, or diagonally wins the game. The game checks for a winner after each turn and notifies the players when one of them gets four in a row.<br /><em>Technologies used: </em> HTML, CSS, Javascript</p>
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