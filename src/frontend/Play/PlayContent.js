import React from 'react';

function PlayContent({ show }) {
    return (
        <div className='play'>
            <iframe width='100%' height='100%' title={show.id} 
                src={`https://www.youtube.com/embed/${show.videoId}?autoplay=1&controls=1`}
                frameborder='0'
                allowfullscreen
            />
        </div>
    );
}

export default PlayContent;