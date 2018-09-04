import React, { Component } from 'react';
import logo from './smarkets-logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import EventList from './containers/EventList';
import EventDetail from './containers/EventDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          {this.props.title}
        </p>
        <Route exact path="/" component={EventList} />
        <Route path="/event/:id" component={EventDetail} />
      </div>
    );
  }
}

export default App;
