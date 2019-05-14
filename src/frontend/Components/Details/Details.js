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
        <DetailsContent brexit={show} /> :
        <div />
    } else {
      return <Redirect to='/not-found' />
    }
  }
}

function DetailsContent({ brexit }) {
  return (
    <div className="DetailsPage">
      <div className="Header">
        <Link to='/'><h1>KODFLIX</h1></Link>
      </div>
      <div className="textheader">
        <h1>{brexit.name}</h1>
      </div>
      <div className="text">
        <p>{brexit.details}</p>
        <p>{brexit.awards}</p>
        <p>{brexit.castDetails}</p>
        <p>{brexit.Director}</p>
      </div>
      <img src={require(`../../images/${brexit.id}.jpg`)} alt={brexit.id} className="image" />
    </div>
  )
}


