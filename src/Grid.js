import React from 'react';
import { PropTypes } from 'prop-types';
import GridRow from './GridRow';
import Content from './Content';
import { generateKey, makeArray, setTransform } from './helpers';

class Grid extends React.PureComponent {
  renderChildren() {
    const {
      children,
      width,
      height,
      onClick
    } = this.props;
    const childrenX = makeArray(children);
    return childrenX.map((c, yIndex) => {
      const childrenY = makeArray(c.props.children);
      return (
        <GridRow key={generateKey(yIndex)}>
          {childrenY.map((e, xIndex) => (
            <Content
              onClick={onClick}
              key={generateKey(xIndex, yIndex)}
              x={xIndex}
              y={yIndex}
              width={width}
              height={height}
            >
              {e}
            </Content>
          ))}
        </GridRow>
      );
    });
  }


  render() {
    const {
      x,
      y,
      z,
      width,
      height
    } = this.props;
    return (
      <div
        className="grid-wrapper"
        style={{
          width,
          height,
          overflow: 'hidden'
        }}
      >
        <div
          className="grid"
          style={{
            width,
            height,
            transform: setTransform(-width * (x / z), -height * (y / z), 1 / z),
            transformOrigin: '0 0'
          }}
        >
          {this.renderChildren()}
        </div>
      </div>
    );
  }
}

Grid.defaultProps = {
  onClick: () => {}
};

Grid.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  z: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

export default Grid;
