import React from 'react';
import PlaneContent from './PlaneContent';

class FirstSlide extends React.PureComponent {
  render() {
    return (
      <PlaneContent
        headline="React Zoomable Plane"
        className="firstSlide"
        onClick={this.props.onClick}
      >
        <p>
          This is a react component which renders a zoomable and navigable grid which you can
          use to build presentations, portfolios or other fancy stuff. The controls are not included
          and are just for demonstration purposes.
        </p>
        <p>
          These slides give a little interactive overview over the props of the component and
          showcase a use case. For full documentation check the <a href="/">readme</a>.
        </p>
      </PlaneContent>
    );
  }
}

export default FirstSlide;
