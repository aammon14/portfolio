import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
