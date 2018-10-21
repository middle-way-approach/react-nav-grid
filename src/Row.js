import React from 'react';
import { PropTypes } from 'prop-types';

export default class Row extends React.PureComponent {
  render() {
    return this.props.children;
  }
}

Row.defaultProps = {
  children: []
};

Row.propTypes = {
  children: PropTypes.node
};
