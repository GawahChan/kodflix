import React, { Component } from 'react';
import Stack from './Stack.js';
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
          <Stack name="Black Mirror" logo={BlackMirrorCover}/>
          <Stack name="Breaking Bad" logo={BreakingBadCover}/>
          <Stack name="Death Note" logo={DeathNoteCover}/>
        </div>
        <div className="TVShowTitles">
          <Stack name="Game Of Thrones" logo={GameOfThronesCover}/>
          <Stack name="The Walking Dead" logo={WalkingDeadCover}/>
          <Stack name="The Wire" logo={TheWireCover}/>
        </div>
      </div>
    );
  }
}
export default App;
