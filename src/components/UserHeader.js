import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const user = this.props.user;

    if (!user) {
      return <div>Loading!!!</div>;
    }
    return <div className="header">{user.name} </div>;
  }
}

// mapStateToProps gets called by redux with the redux store and the a copy of props that are passed down to the component
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
