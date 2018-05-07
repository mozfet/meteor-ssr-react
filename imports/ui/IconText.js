import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Task component - represents a single todo item
export default class IconText extends Component {

  render() {
    if (this.props.icon && !this.props.iconPosition) {
      return (<i className="material-icons">{this.props.icon}</i>);
    }
    else if (this.props.icon && this.props.iconPosition) {
      return (
        <i className={"material-icons "+this.props.iconPosition}>
          {this.props.icon}
        </i>
      );
    }
    else {
      return null;
    }
  }

  componentDidMount() {
    var $this = $(ReactDOM.findDOMNode(this));
    $this.find(".button-collapse").sideNav();
  }
}
