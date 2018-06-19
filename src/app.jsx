import React, { Component } from 'react';

import './app.scss';
import Post from './components/post/post';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          title: "asd",
          createdAt: "monday",
          author: "john",
          commentsCount: "400",
        },
        {
          title: "asd",
          createdAt: "monday",
          author: "john",
          commentsCount: "400",
        },
        {
          title: "asd",
          createdAt: "monday",
          author: "john",
          commentsCount: "400",
        },
        {
          title: "asd",
          createdAt: "monday",
          author: "john",
          commentsCount: "400",
        },
      ],
    };
  }

  render() {
    return (
      <div className="global-page">
        {this.state.posts.map(post => (
          <Post post={post} />
        ))}
      </div>
    );
  }
}

export default App;
