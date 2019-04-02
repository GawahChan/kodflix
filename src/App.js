import React, { Component } from 'react';
import BlackMirrorCover from './images/Black_Mirror_cover.jpg';
import BreakingBadCover from './images/Breaking_Bad_cover.jpg';
import DeathNoteCover from './images/Death_Note_cover.jpg';
import GameOfThronesCover from './images/Game_Of_Thrones_cover.jpg';
import TheWireCover from './images/The_Wire_cover.jpg';
import WalkingDeadCover from './images/Walking_Dead_cover.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TVShowTitles">
          <div className="show">
            <img src={BlackMirrorCover} alt='The Black Mirror Cover' />
            <div className="Overlay">
              <h1>BlackMirror</h1>
            </div>
          </div>
          <div className="show">
            <img src={BreakingBadCover} alt='The Breaking Bad Cover' />
            <div className="Overlay">
              <h1>BreakingBad</h1>
            </div>
          </div>
          <div className="show">
            <img src={DeathNoteCover} alt='The Death note Cover' />
            <div className="Overlay">
              <h1>Death Note</h1>
            </div>
          </div>
        </div>
        <div className="TVShowTitles">
          <div className="show">
            <img src={GameOfThronesCover} alt='The Game of Thrones Cover' />
            <div className="Overlay">
              <h1>Game of Thrones</h1>
            </div>
          </div>
          <div className="show">
            <img src={WalkingDeadCover} alt='The Walking Dead Cover' />
            <div className="Overlay">
              <h1>The Walking Dead</h1>
            </div>
          </div>
          <div className="show">
            <img src={TheWireCover} alt='The Wire Cover' />
            <div className="Overlay">
              <h1>The Wire</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
