import React from 'react';
import Stack from './Stack.js';
import BlackMirrorCover from './images/Black_Mirror_cover.jpg';
import BreakingBadCover from './images/Breaking_Bad_cover.jpg';
import DeathNoteCover from './images/Death_Note_cover.jpg';
import GameOfThronesCover from './images/Game_Of_Thrones_cover.jpg';
import TheWireCover from './images/The_Wire_cover.jpg';
import WalkingDeadCover from './images/Walking_Dead_cover.jpg';

export default function Gallery() {
    return (
      <div>
        <div className="TVShowTitles">
          <Stack id="black-mirror" name="Black Mirror" logo={BlackMirrorCover} />
          <Stack id="breaking-bad" name="Breaking Bad" logo={BreakingBadCover} />
          <Stack id="death-note" name="Death Note" logo={DeathNoteCover} />
          <Stack id="game-of-thrones" name="Game Of Thrones" logo={GameOfThronesCover} />
          <Stack id="the-walking-dead" name="The Walking Dead" logo={WalkingDeadCover} />
          <Stack id="the-wire" name="The Wire" logo={TheWireCover} />
        </div>
      </div>
    );
  }