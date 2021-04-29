import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AllEntries from './AllEntries';
import { Login, Signup } from './AuthForm';

/**
 * COMPONENT
 */
export const Home = ({ isLoggedIn, username }) => {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h3>Welcome, {username}</h3>
        </div>
      ) : (
        <div>
          <Login />
          <Link to="/signup" component={Signup}>
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
