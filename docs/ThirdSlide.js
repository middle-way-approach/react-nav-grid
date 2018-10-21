import React from 'react';
import PlaneContent from './PlaneContent';

class ThirdSlide extends React.PureComponent {
  render() {
    return (
      <PlaneContent headline="Position" className="thirdSlide" onClick={this.props.onClick}>
        <p>
          You can set the position of the view via the following props
        </p>
        <ul>
          <li>x</li>
          <li>y</li>
          <li>z</li>
        </ul>
        <p>
          You can use the arrow buttons to change x and y and the lense to change the z. You can use
          the grid button to fully reset the view. The keyboard keys are binded to the arrows, plus,
          minus and escape.
        </p>
      </PlaneContent>
    );
  }
}

export default ThirdSlide;
