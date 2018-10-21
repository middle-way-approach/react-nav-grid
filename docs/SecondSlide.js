import React from 'react';
import PlaneContent from './PlaneContent';

class SecondSlide extends React.PureComponent {
  render() {
    return (
      <PlaneContent headline="Dimensions" className="secondSlide" onClick={this.props.onClick}>
        <p>
          You can set the dimension of the plane with the following props
        </p>
        <ul>
          <li>width</li>
          <li>height</li>
        </ul>
        <p>
          You can change their values with the sliders to see how the plane reacts to dimension
          changes.
        </p>
      </PlaneContent>
    );
  }
}

export default SecondSlide;
