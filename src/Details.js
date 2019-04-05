import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      welcomeMessage: 'This is a WIP :)'
    };
  }

componentDidMount(){
  setTimeout(() => {
    this.setState({
    welcomeMessage: 'Better things are coming!'
    })
  }, 3000);
}

  render() {
    return (
      <div>
        <h1>{this.state.welcomeMessage}</h1>
        <Link to='/'><h3>Back to home page</h3></Link>
      </div>
    );
  }
}