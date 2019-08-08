import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import { changeSiteName } from './actions/sitesActions';

// import { logoutAction } from './actions/usersActions';

import Home from './containers/Home';
import Login from './containers/Login';
import Users from './containers/Users';
import User from './containers/User';
// import PrivateRoute from './containers/PrivateRoute';

class App extends Component {
  render(){
    return (
      <Router>
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light mb-3">
          <Link className="nav-item nav-link" to="/">{this.props.siteName}</Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user">User</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login} />
          <Route path="/users/:pageNumber?" exact component={Users} />
          <Route path="/user/:userId?" exact component={User} />
        </div>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    siteName: state.siteName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSiteName(newSiteName) {
      dispatch({
        type:'CHANGE_SITE_NAME',
        payload: newSiteName
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
