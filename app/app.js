
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  render() {
    const { text } = this.props;

    return (
      <div>
        <h1>hello world {text}</h1>
      </div>
    );
  }
}
