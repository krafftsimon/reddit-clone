import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions';

class PostList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchPosts('top');
  }

  handleClick() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}> click </button>
        <h1> {this.props.match.params.sortCriterium} </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPosts,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);