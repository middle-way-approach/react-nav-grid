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
        <a target="_blank" href="https://middle-way-approach.github.io/react-nav-grid/">
          <img alt="Github logo" src={mark} />
        </a>
      </PlaneContent>
    );
  }
}

export default SixthSlide;
