import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import '../Details/Details.css';
import Loading from '../../Common/Loading/Loading';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      show: {}
    };
  }

  componentDidMount() {
    let showId = this.props.match.params.showId;
    fetch(`/rest/shows/${showId}`)
      .then(res => res.json())
      .then(show => this.setState({ show }));

  }

  // componentDidMount() {
  //   fetch('/rest/shows')
  //     .then(res => res.json())
  //     .then(shows => {
  //       let showId = this.props.match.params.showId;
  //       let show = shows.find(show => show.id === showId);
  //       this.setState({ show });
  //     })
  // }

  render() {
    let show = this.state.show;
    if (show) {
      return show.id ?
        <DetailsContent TvShow={show} /> :
        <Loading />
    } else {
      return <Redirect to='/not-found' />
    }
  }
}

function DetailsContent({ TvShow }) {
  return (
    <div className="DetailsPage-Container">
      <div className="DetailsPage-Header">
        <Link to='/'><h1>KODFLIX</h1></Link>
      </div>
      <h2>{TvShow.name}</h2>
      <div className="DetailsPage-Body">
        <div className="Show-Description">
          <p>{TvShow.details}</p>
          <p>{TvShow.awards}</p>
          <p>{TvShow.castDetails}</p>
          <p>{TvShow.Director}</p>
        </div>
        <div className="Show-Image">
          <img src={require(`../../Common/images/${TvShow.id}.jpg`)} alt={TvShow.id} className="image" />
        </div>
      </div>
    </div>
  )
}


