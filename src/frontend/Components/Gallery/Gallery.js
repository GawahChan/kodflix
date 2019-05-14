import React from 'react';
import Cover from './Cover/Cover';
import { Link } from 'react-router-dom';
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
      .then(shows => this.setState ({ shows }));
  }

  render() {
    return (
      <div className="HomePage">
        <div className="Header">
          <Link to='/'><h1>KODFLIX</h1></Link>
        </div>
        <div className="TVShowTitles">{
          this.state.shows.map(stack => (
            <Cover
              key={stack.id}
              id={stack.id}
              name={stack.name}
            />))
        }
        </div>
      </div>
    );
  }
}

export default Gallery;

