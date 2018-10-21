import React from 'react';
import PlaneContent from './PlaneContent';

class FifthSlide extends React.PureComponent {
  render() {
    return (
      <PlaneContent headline="Children" className="fifthSlide" onClick={this.props.onClick}>
        <p>
          To add the children you should use the Row component. You can render as many rows as you
          like.
        </p>
        <p>
          As a child of a row you can render as many children of any type you like. They are wrapped
          in a container to have the same width and height.
        </p>
      </PlaneContent>
    );
  }
}

export default FifthSlide;
