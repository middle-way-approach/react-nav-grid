import React from 'react';
import { PropTypes } from 'prop-types';

class PlaneContent extends React.PureComponent {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log('THHE');
    this.props.onClick();
    e.stopPropagation();
  }

  render() {
    const {
      headline,
      children,
      className,
      onClick
    } = this.props;
    return (
      <section className={`plane-content-component ${className}`}>
        <div>
          <h2>{headline}</h2>
          {children}
        </div>
        {onClick && <button onClick={this.onClick}>Next</button>}
      </section>
    );
  }
}

PlaneContent.propTypes = {
  headline: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default PlaneContent;
