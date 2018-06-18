import React, { Component } from 'react';

import './app.scss';
import react from './assets/react.svg';
import redux from './assets/redux.svg';
import webpack from './assets/webpack.svg';
import babel from './assets/babel.svg';

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="container">
          <h1>Welcome to React / Redux Boilerplate App.</h1>
          <div className="logos-container">
            <img alt="react" src={react} />
            <img alt="redux" src={redux} />
            <img alt="webpack" src={webpack} />
            <img alt="babel" src={babel} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
