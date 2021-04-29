import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect, Router } from 'react-router-dom';
import AllEntries from './components/AllEntries';
import { Login, Signup } from './components/AuthForm';
import Home from './components/home';
import { me } from './store/redux/auth';
import history from './history';
import SingleEntry from './components/SingleEntry';
import EditEntry from './components/EditEntry';
import CreateEntry from './components/CreateEntry';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <Router history={history}>
        <div>
          {isLoggedIn ? (
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                {/* <Redirect to="/" /> */}
                <Route exact path="/journal/:userId" component={AllEntries} />
                <Route
                  exact
                  path="/journal/:userId/new-entry"
                  component={CreateEntry}
                />
                <Route
                  exact
                  path="/journal/:userId/:entryId"
                  component={SingleEntry}
                />
              </Switch>
            </main>
          ) : (
            <main>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
              </Switch>
            </main>
          )}
        </div>
      </Router>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
