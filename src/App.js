import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Details from './Details.js';
import Gallery from './Gallery.js';
import NotFound from './Not-Found.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/NotFound' component={NotFound} />
            <Route exact path='/:showId' component={Details} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;