import React, { Component } from 'react';
import IconTextTooltip from './IconTextTooltip.js';

// Task component - represents a single todo item
export default class NavigationItem extends Component {

  render() {
    const route = this.props.route?this.props.route:'#';
    return (
      <li>
        <a href={route}>
          <IconTextTooltip
            label={this.props.label}
            icon={this.props.icon}
            iconPosition={this.props.iconPosition}
            tooltip={this.props.tooltip}
            tooltipPosition={this.props.tooltipPosition}
          />
        </a>
      </li>
    );
  }
}
