import React, { Component } from 'react';
import martianlogo from './The_Martian_image.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={martianlogo} alt='The Martian Logo'/>
        <br /><br /><br />
        <div className = "TVShowTitles">
          <div className = "show"> Black Mirror</div>
          <div className = "show"> Breaking Bad</div>
          <div className = "show"> Death Note</div>
        </div>
        <br /><br />
        <div className = "TVShowTitles">
          <div className = "show"> Game of Thrones</div>
          <div className = "show"> The Walking Dead</div>
          <div className = "show"> The Wire</div>
        </div>
      </div>
    );
  }
}

export default App;
