import React, { Component } from 'react';
import email from "../../images/icons/gmail.png";
import linkedIn from "../../images/icons/linkedin.png";
import github from "../../images/icons/github.png";
import './contact.css'

class Contact extends Component {
  render() {
    return(
      <div id="contact" className='contactDiv'>
        <h1>Contact Information:</h1>
        <div className='socialLinks'>
          <div className='icon'>
            <a href="mailto:andrewammon14@gmail.com">
              <img src={email} alt='gmail icon' />
              <figcaption>Email</figcaption>
            </a>
          </div>
          <div className='icon'>
            <a href='https://www.linkedin.com/in/andrewammon/'>
              <img src={linkedIn} alt='gmail icon' />
              <figcaption>LinkedIn</figcaption>
            </a>
          </div>
          <div className='icon'>
            <a href='https://github.com/aammon14'>
              <img src={github} alt='gmail icon' />
              <figcaption>Github</figcaption>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;