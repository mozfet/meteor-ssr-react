import React, { Component } from 'react';
import IconText from './IconText.js';

// Task component - represents a single todo item
export default class IconTextTooltip extends Component {

  renderTooltip() {
    const tooltipPosition = this.props.tooltipPosition?this.props.tooltipPosition:'bottom';
    if (this.props.tooltip) {
      return (
        <span
          className="tooltipped"
          data-position={tooltipPosition}
          data-delay="50"
          data-tooltip={this.props.tooltip}>
          {this.renderIconLabel()}
        </span>
      );
    }
    else {
      return this.renderIconLabel();
    }
  }

  renderIconLabel() {
    const iconPosition = this.props.iconPosition?this.props.iconPosition:'left';
    if (this.props.icon) {
      return (
        <>
          <IconText icon={this.props.icon} iconPosition={iconPosition} />
          {this.renderLabel()}
        </>
      );
    }
    else {
      return this.renderLabel();
    }
  }

  renderLabel() {
    if (this.props.label) {
      return (
        <>{this.props.label}</>
      );
    }
    else {
      return null;
    }
  }

  render() {
    console.log('props', this.props);
    return this.renderTooltip();
  }
}
