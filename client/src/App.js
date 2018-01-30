import React, { Component } from 'react';
import Root from './components/Root';
import { connect } from 'react-redux';
import * as actions from './actions/material';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchMaterial()
  };
  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <Root />
      </div>
    );
  }
}

export default connect(null, actions)(App);
