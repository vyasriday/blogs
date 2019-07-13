import React, { Component } from 'react';
import { fetchPostsAndUsers } from '../actions';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';

export class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.props.posts.map(post => (
          <div className="item" key={post.id}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHeader userId={post.userId} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapstateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapstateToProps,
  { fetchPostsAndUsers }
)(PostList);
