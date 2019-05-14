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
    let showId = this.props.match.params.showId;
    fetch('/rest/shows')
      .then(res => res.json())
      .then(shows => {
        return shows
          .find(show => {
            return show.id === showId
          })
      })
      .then(show => {
        const {name, details, awards, castDetails, Director} = show;
        this.setState({
        name: name,
        details: details,
        awards: awards,
        castDetails: castDetails,
        Director: Director
      })})
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
            <h1>{this.state.name}</h1>
          </div>
          <div className="text">
            <p>{this.state.details}</p>
            <p>{this.state.awards}</p>
            <p>{this.state.castDetails}</p>
            <p>{this.state.Director}</p>
          </div>
          <img src={require(`./../../images/${this.props.match.params.showId}.jpg`)} alt={this.props.match.params.showId} className="image" />
        </div>
      )
    }
  }
}