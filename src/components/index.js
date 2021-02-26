import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
          'wsui-frame-wrapper',
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
