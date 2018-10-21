import React from 'react';
import PlaneContent from './PlaneContent';
import mark from './mark.png';

class SixthSlide extends React.PureComponent {
  render() {
    return (
      <PlaneContent headline="Contribute" className="sixthSlide" >
        <p>
          If you find bugs, request features or have questions please open issues.
        </p>
        <a href="/">
          <img src={mark} />
        </a>
      </PlaneContent>
    );
  }
}

export default SixthSlide;
