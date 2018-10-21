import React from 'react';
import { PropTypes } from 'prop-types';

export default class GridRow extends React.PureComponent {
  render() {
    return (
      <div className="grid-row" style={{ display: 'flex', flexDirection: 'row' }}>
        {this.props.children}
      </div>
    );
  }
}

GridRow.defaultProps = {
  children: []
};

GridRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};
