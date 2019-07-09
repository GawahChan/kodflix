import React from 'react';
import Cover from './Cover/Cover';
import Header from '../Header/Header';
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

