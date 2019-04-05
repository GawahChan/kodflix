import React from 'react';
import Stack from './Stack.js';
import getGallery from './Gallery-get.js';

export default function Gallery() {
    return (
      <div>
        <div className="TVShowTitles">{
          getGallery().map(stack => (
            <Stack 
              key={Stack.id}
              id={stack.id}
              name={stack.name}
              logo={stack.logo}
            />))
            }
        </div>
      </div>
    );
  }

