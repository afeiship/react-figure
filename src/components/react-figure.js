import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    caption: PropTypes.any
  };

  static defaultProps = {
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
    };
  }

  render() {
    const { className, children, caption, ...props } = this.props;
    return (
      <figure {...props} className={classNames('react-figure', className)}>
        { children }
        { caption && <figcaption children={caption} /> }
      </figure>
    );
  }
}
