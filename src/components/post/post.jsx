import React from 'react';

import './post.scss';
import placeholder from '../../assets/logo-wow.png';
import TiArrowDownThick from 'react-icons/lib/ti/arrow-down-thick';
import TiArrowUpThick from 'react-icons/lib/ti/arrow-up-thick';

const Post = props => (
  <div className="post">
    <div className="post__votes-container">
      <div className="post__upvote">
        <TiArrowUpThick size={35} />
      </div>
      <div className="post__score">
        9999
      </div>
      <div className="post__downvote">
        <TiArrowDownThick size={35}/>
      </div>
    </div>
    <div className="post__thumbnail">
      <img src={placeholder} />
    </div>
    <div className="post__details">
      <h3>{props.post.title}</h3>
      <div className="post__submission-details">Submitted <span>{props.post.createdAt}</span> by <span>{props.post.author}</span>.</div>
      <div className="post__links">
        <span>{props.post.commentsCount} comments</span>
        <span>share</span>
        <span>save</span>
        <span>hide</span>
      </div>
    </div>
  </div>
);

export default Post;