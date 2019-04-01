import React, { Component } from 'react';
import martianlogo from './The_Martian_image.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={martianlogo} alt='The Martian Logo'/>
      </div>
    );
  }
}

export default App;
