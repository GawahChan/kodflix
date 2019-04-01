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
          </div>
          <div className="show">
            <img src={BreakingBadCover} alt='The Breaking Bad Cover' />
          </div>
          <div className="show">
            <img src={DeathNoteCover} alt='The Death note Cover' />
          </div>
        </div>
        <div className="TVShowTitles">
          <div className="show">
            <img src={GameOfThronesCover} alt='The Game of Thrones Cover' />
          </div>
          <div className="show">
            <img src={WalkingDeadCover} alt='The Walking Dead Cover' />
          </div>
          <div className="show">
            <img src={TheWireCover} alt='The Wire Cover' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
