import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavigationItem from './NavigationItem.js';

// Task component - represents a single todo item
export default class Navigation extends Component {

  getItems() {
    return [
      {
        _id: 1, label: 'Item 1', route: '/item1', icon: 'build',
        iconPosition: 'left', tooltip: 'Tooltip 1', tooltipPosition: 'left'
      },
      {
        _id: 2, label: 'Item 2', route: '/item2', icon: 'cake',
        iconPosition: 'left', tooltip: 'Tooltip 2'
      },
      {
        _id: 3, label: 'Item 3', route: '/item3', icon: 'beach_access',
      },
      {
        _id: 4, label: 'Item 4', route: '/item4'
      },
      {
        _id: 5, label: 'Item 5'
      },
      {
        _id: 6
      }
    ];
  }

  renderItems() {
    return this.getItems().map((item) => (
      <NavigationItem
        key={item._id}
        label={item.label}
        route={item.route}
        icon={item.icon}
        iconPosition={item.iconPosition}
        tooltip={item.tooltip}
      />
    ));
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/home" className="brand-logo center">Logo</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderItems()}
            </ul>
        </div>
      </nav>
    );
  }

  componentDidMount() {
    var $this = $(ReactDOM.findDOMNode(this));
    $this.find(".button-collapse").sideNav();
  }
}
