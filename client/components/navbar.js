import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn, userId }) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          <div className="navbar">
            <div className="nav-home">
              <a href={`/`}>Home</a>
            </div>
            <nav>
              <ul className="nav-links">
                <li>
                  <a href={`/journal/${userId}`}>Journal</a>
                </li>
                <li>
                  <a href={`/journal/${userId}/new-entry`}>New Entry</a>
                </li>
                <li>
                  <a href={`/journal/${userId}/stats`}>Stats</a>
                </li>
                <li>
                  <a href="/" onClick={handleClick}>
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        <div>
          <div className="navbar">
            <div className="nav-home">
              <a href={`/`}>Home</a>
            </div>
            <nav>
              <ul className="nav-links">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    userId: state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
