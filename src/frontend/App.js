import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { withRouter, Route, Switch} from 'react-router-dom';
import Details from './Components/Details/Details';
import Gallery from './Components/Gallery/Gallery';
import NotFound from './Not-Found.js';
import './App.css';

//constructor can be used to bind event handlers to the component, not just setting initial state
//withRouter gives the app component three props: history, location, match
//history.listen method is called each time a user changes URL
class App extends Component {
  constructor(props) {
    super(props);
    console.log('are these props?', props);
    ReactGA.initialize('UA-143339499-1');
    this.trackpageview(this.props.location);
    this.props.history.listen((location) => this.trackpageview(location));
  }

  trackpageview(location) {
    ReactGA.pageview(location.pathname + location.search + location.hash);
  }

  render() {
    return (
        <div>
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/NotFound' component={NotFound} />
            <Route exact path='/:showId' component={Details} />
          </Switch>
        </div>
    )
  }
}
export default withRouter(App);