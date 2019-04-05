import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      message: 'Hello, this will be the details page for each Movie & TV show :)'
    };
  }

componentDidMount(){
  setTimeout(() => {
    this.setState({
    message: 'Coming soon! :)'
    })
  }, 3000);
}

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <Link to='/'><h3>Back to home page</h3></Link>
      </div>
    );
  }
}