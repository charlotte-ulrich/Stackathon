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
import Stats from './components/Stats';

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
                <Route exact path="/journal/:userId" component={AllEntries} />
                <Route exact path="/journal/:userId/stats" component={Stats} />
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

export default withRouter(connect(mapState, mapDispatch)(Routes));
