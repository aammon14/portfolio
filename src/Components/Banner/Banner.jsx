import React, { Component } from 'react';
import './banner.css'

class Banner extends Component {
  render() {
    return(
      <div className='banner'>
        <h1 className='name'>Andrew Ammon</h1>
        <h3 className='title'>Full Stack Web Developer</h3>
      </div>
    )
  }
}

export default Banner;