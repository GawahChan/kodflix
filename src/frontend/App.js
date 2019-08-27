import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { withRouter, Route, Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import Menu from './Common/Menu/Menu';
import Details from './Components/Details/Details';
import Gallery from './Components/Gallery/Gallery';
import Play from './Play/Play';
import NotFound from './Not-Found.js';
import './App.css';

class App extends Component {
  constructor({ location, history }) {
    super();
    console.log('props passed', location, history);
    ReactGA.initialize('UA-143339499-1');
    this.trackPageView(location);
    history.listen((location) => this.trackPageView(location));
  }

  trackPageView(location) {
    ReactGA.pageview(location.pathname + location.search + location.hash);
  }

  render() {
    return (
        <div className="App">
          <Menu />
          <Header />
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/NotFound' component={NotFound} />
            <Route exact path='/:showId/play' component={Play} />
            <Route exact path='/:showId' component={Details} />
          </Switch>
        </div>
    )
  }
}
export default withRouter(App);