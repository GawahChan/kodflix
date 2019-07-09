import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import '../Details/Details.css';
import Loading from '../../Common/Loading/Loading';
import Header from '../Header/Header';

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
      return <Redirect to='/not-found' />
    }
  }
}

function DetailsContent({ TvShow }) {
  return (
    <div className="DetailsPage-Container">
      <Header />
      <div className="DetailsPage-Body" style={{
        'backgroundImage': `url(${require(`../../Common/images/covers/${TvShow.id}.jpg`)})`
      }}>
        <div className="DetailsPage-Content">
          <h2>{TvShow.name}</h2>
          <p>{TvShow.details}</p>
          <p>{TvShow.awards}</p>
          <p>{TvShow.castDetails}</p>
          <p>{TvShow.Director}</p>
        </div>
      </div>
    </div>
  )
}


