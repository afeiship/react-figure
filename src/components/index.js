import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-figure';

export default class ReactFigure extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default image caption.
     */
    caption: PropTypes.any
  };

  render() {
    const { className, caption, children, ...props } = this.props;
    return (
      <figure
        data-component={CLASS_NAME}
        className={classNames(
          'webkit-sassui-frame-wrapper',
          CLASS_NAME,
          className
        )}
        {...props}>
        {children}
        {caption && <figcaption children={caption} />}
      </figure>
    );
  }
}
