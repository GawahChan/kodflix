import React from 'react';
import Stack from './Stack.js';
import { Link } from 'react-router-dom';
import getGallery from './Gallery-get.js';

export default function Gallery() {
  return (
    <div className="HomePage">
      <div className="Header">
        <Link to= '/'><h1>KODFLIX</h1></Link>
      </div>
      <div className="TVShowTitles">{
        getGallery().map(stack => (
          <Stack
            key={stack.id}
            id={stack.id}
            name={stack.name}
            logo={stack.logo}
          />))
      }
      </div>
    </div>
  );
}

