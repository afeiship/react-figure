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

  render() {
    const { className, children, caption, ...props } = this.props;
    return (
      <figure className={classNames('webkit-sassui-frame-wrapper react-figure', className)} {...props}>
        { children }
        { caption && <figcaption children={caption} /> }
      </figure>
    );
  }
}
