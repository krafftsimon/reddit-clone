import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './app.scss';
import PostList from './containers/post-list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to="/top">top</Link>
            <Link to="/new">new</Link>
          </header>
          <Switch>
            <Route path="/:sortCriterium(top|new)" component={PostList} />  
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
