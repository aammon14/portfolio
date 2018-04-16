import React, { Component } from 'react';
import './banner.css'

class Banner extends Component {
  render() {
    return(
      <div className='banner'>
        <h1 className='name'>
          <span class='heading-primary--main'>Andrew Ammon</span>
          <span class='heading-primary--sub'>Full Stack Web Developer</span>
        </h1>
      </div>
    )
  }
}

export default Banner;