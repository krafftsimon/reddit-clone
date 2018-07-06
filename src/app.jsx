import React, { Component } from 'react';

import './app.scss';
import Post from './components/post/post';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          title: "aasdfda sdf sdf asdf assd",
          createdAt: "monday",
          author: "john",
          commentsCount: "400",
        },
        {
          title: "asdasdfda sdf sdf asdf as",
          createdAt: "monday",
          author: "john",
          commentsCount: "400",
        },
        {
          title: "asdfda sdf sdf asdf as",
          createdAt: "monday",
          author: "john",
          commentsCount: "400",
        },
        {
          title: "asasdfda sdf sdf asdf asd",
          createdAt: "monday",
          author: "john",
          commentsCount: "400",
        },
      ],
    };
  }

  render() {
    console.log(APIURL);
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
