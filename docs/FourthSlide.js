import React from 'react';
import PlaneContent from './PlaneContent';

class FourthSlide extends React.PureComponent {
  render() {
    return (
      <PlaneContent headline="OnClick" className="fourthSlide" onClick={this.props.onClick}>
        <p>
          You can set an
        </p>
        <ul>
          <li>onClick(x,y,event)</li>
        </ul>
        <p>
          handler to get a callback if you click on the slide. The callback
          will give you the x,y coordinates of the slide you clicked. As a third parameter the
          original event is passed.
        </p>
      </PlaneContent>
    );
  }
}

export default FourthSlide;
