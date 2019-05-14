import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import '../Details/Details.css';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      show: {}
    };
  }

  componentDidMount() {
    fetch('/rest/shows')
      .then(res => res.json())
      .then(shows => {
        let showId = this.props.match.params.showId;
        let show = shows.find(show => show.id === showId);
        this.setState({ show });
      })
  }

  render() {
    let show = this.state.show;
    if (show) {
      return show.id ?
        <DetailsContent TvShow={show} /> :
        <div />
    } else {
      return <Redirect to='/not-found' />
    }
  }
}

function DetailsContent({ TvShow }) {
  return (
    <div className="DetailsPage">
      <div className="Header">
        <Link to='/'><h1>KODFLIX</h1></Link>
      </div>
      <div className="textheader">
        <h1>{TvShow.name}</h1>
      </div>
      <div className="text">
        <p>{TvShow.details}</p>
        <p>{TvShow.awards}</p>
        <p>{TvShow.castDetails}</p>
        <p>{TvShow.Director}</p>
      </div>
      <img src={require(`../../images/${TvShow.id}.jpg`)} alt={TvShow.id} className="image" />
    </div>
  )
}


