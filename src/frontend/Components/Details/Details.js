import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
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

  render() {
    let show = this.state.show;
    if (show) {
      return show.id ?
        <DetailsContent TvShow={show} /> :
        <Loading />
    } else {
      return <Redirect to='/NotFound' />
    }
  }
}

function DetailsContent({ TvShow }) {
  return (
    <div className="DetailsPage-Container">
      <div className="DetailsPage-Body" style={{
        'backgroundImage': `url(${require(`../../Common/images/wallpaper/${TvShow.id}.jpg`)})`
      }}>
        <div className="DetailsPage-Content">
          <h1>{TvShow.name}</h1>
          <p>{TvShow.details}</p>
          <p>{TvShow.awards}</p>
          <p>{TvShow.castDetails}</p>
          <p>{TvShow.Director}</p>
          <Link to={`/${TvShow.id}/play`}>
            <button className="DetailsPage-Video"></button>
          </Link>
        </div>
      </div>
    </div>
  )
}


