import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfiniteCalendar, { withRange, Calendar, EVENT_TYPE } from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <InfiniteCalendar
          Component={withRange(Calendar)}
          selected={{
            start: new Date(2017, 8, 6),
            end: new Date(2017, 8, 21)
          }}
        />
      </div>
    );
  }
}

export default App;
