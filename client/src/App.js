import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Components
import Root from './components/Root';
import Menu from './components/Menu';
import Form from './components/Form/FormMain';
import FormMain from './components/Form/FormMain';
import Calculator from './components/calculator/Calculator';

class App extends Component {
  componentDidMount() {
    this.props.fetchMaterial()
  };
  render() {
    return (
      <Router>
        <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={Root} />
          <Route path="/form" component={FormMain} />
          <Route path="/calculator" component={Calculator} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(App);
