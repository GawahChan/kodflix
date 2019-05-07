import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../Gallery/Gallery-get.js';
import '../Details/Details.css';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      show: {}
    };
  }

  componentDidMount() {
    let showId = this.props.match.params.showId;
    let show = getGallery()
      .find((show) => show.id === showId);
    this.setState({ show });
  }

  render() {
    if (this.state.show === undefined) {
      return <Redirect to='/NotFound' />
    } else {
      return (
        <div className="DetailsPage">
          <div className="Header">
            <Link to='/'><h1>KODFLIX</h1></Link>
          </div>
          <div className="textheader">
            <h1>{this.state.show.name}</h1>
          </div>
          <div className="text">
            <p>{this.state.show.details}</p>
            <br />
            <p>{this.state.show.awards}</p>
            <br /><br />
            <div>{this.state.show.castDetails}</div>
            <div>{this.state.show.Director}</div>
          </div>
          <img src={this.state.show.logo} alt={this.state.show.name} className="image" />
        </div>
      )
    }
  }
}