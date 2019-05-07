import React from 'react';
import Stack from '../../Components/Stack';
import { Link } from 'react-router-dom';
import getGallery from '../../Components/Gallery/Gallery-get';
import './Gallery.css';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state= {
      shows: []
    }
  }

  componentDidMount() {
    fetch('/rest/shows')
      .then(res => res.json())
      .then(shows => this.setState ({ shows }, () => console.log('shows fetched...', shows)));
  }

  render() {
    return (
      <div className="HomePage">
        <div className="Header">
          <Link to='/'><h1>KODFLIX</h1></Link>
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
}

export default Gallery;

