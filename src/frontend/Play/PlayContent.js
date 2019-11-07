import React from 'react';
import ReactPlayer from 'react-player';

function PlayContent({ show }) {
  return (
    <div className="play">
      <ReactPlayer
        url={`https://www.youtube.com/embed/${show.videoId}?autoplay=1&controls=1`}
        width="100%"
        height="100%"
        controls
        playing
      />
    </div>
  );
}

export default PlayContent;
