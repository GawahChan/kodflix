import React from 'react';
import Cover from './Cover/Cover';
import { Link } from 'react-router-dom';
import './Gallery.css';
import Loading from "../../Common/Loading/Loading"

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      shows: []
    }
  }

  componentDidMount() {
    fetch('/rest/shows')
      .then(res => res.json())
      .then(shows => this.setState({ shows }));
  }

  render() {
    return (
      <div className="HomePage-container">
        <div className="Header">
          <Link to='/'><h1>KODFLIX</h1></Link>
        </div>
        <div className="TVShowTitles">{
          this.state.shows.length ?
            this.state.shows.map(show => {
              return (
                <Cover
                  key={show.id}
                  id={show.id}
                  name={show.name}
                />);
            }) :
            <Loading />
        }
        </div>
      </div>
    );
  }
}

export default Gallery;

