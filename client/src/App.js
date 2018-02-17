import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/fetchData';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Components
import Root from './components/Root';
import Menu from './components/Menu';
import Form from './components/Form/FormMain';
import FormMain from './components/Form/FormMain';
import Branches from './components/branch/Branches';
import SingleBranch from './components/branch/SingleBranch';
import Register from './components/auth/register';

import BranchFormMain from './components/BranchForm/BranchFormMain';

class App extends Component {
  componentDidMount() {
    this.props.fetchData()
  };
  render() {
    return (
      <Router>
        <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={Root} />
          <Route path="/form" component={FormMain} />
          <Route path="/branch-form" component={BranchFormMain} />
          <Route path="/branches" component={Branches}/>
          <Route path="/branch/:id" component={SingleBranch}/>
          <Route path="/register" component={Register}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(App);
