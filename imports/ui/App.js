/* jshint esversion: 6 */

import React, { Component } from 'react';
import 'hammerjs';
import 'materialize-css/dist/js/materialize.js';
import Navigation from './Navigation.js';

// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  render() {
    return (
      <div className="site">
        <header>
          <Navigation />
        </header>
      </div>
    );
  }
}
