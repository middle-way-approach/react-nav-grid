import React from 'react';
import { PropTypes } from 'prop-types';

export default class Content extends React.PureComponent {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    const { x, y, onClick } = this.props;
    onClick(x, y, e);
  }

  render() {
    const { children, width, height } = this.props;
    return (
      <div
        role="grid"
        className="grid-content"
        onClick={this.onClick}
        style={{
          width,
          height,
          flexShrink: 0
        }}
      >
        {children}
      </div>
    );
  }
}

Content.defaultProps = {
  children: null
};

Content.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};
