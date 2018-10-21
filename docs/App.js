import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Grid, Row } from '../src';
import ControlPanel from './ControlPanel';
import FirstSlide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';
import FourthSlide from './FourthSlide';
import FifthSlide from './FifthSlide';
import SixthSlide from './SixthSlide';
import LoremIpsumSlide from './LoremIpsumSlide';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      z: 3,
      width: 320,
      height: 400
    };
    this.onClick = this.onClick.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
    this.reset = this.reset.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.secondRow = this.secondRow.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown);
  }

  onKeydown(e) {
    if (e.key === 'Escape') {
      this.reset();
    }
    if (e.key === 'ArrowLeft') {
      this.left();
    }
    if (e.key === 'ArrowRight') {
      this.right();
    }
    if (e.key === 'ArrowUp') {
      this.up();
    }
    if (e.key === 'ArrowDown') {
      this.down();
    }
    if (e.key === '+') {
      this.zoomIn(e);
    }
    if (e.key === '-') {
      this.zoomOut(e);
    }
  }

  onClick(x, y, e) {
    e.stopPropagation();
    this.setState({
      x,
      y,
      z: 1
    });
  }

  zoomOut(e) {
    e.stopPropagation();
    this.setState({ z: this.state.z + 1 });
  }

  zoomIn(e) {
    e.stopPropagation();
    if (this.state.z > 1) {
      this.setState({ z: this.state.z - 1 });
    }
  }

  left() {
    this.setState({ x: this.state.x - 1 });
  }

  right() {
    this.setState({ x: this.state.x + 1 });
  }

  up() {
    this.setState({ y: this.state.y - 1 });
  }

  down() {
    this.setState({ y: this.state.y + 1 });
  }

  secondRow() {
    this.setState({
      y: 1,
      x: 0,
      z: 1
    });
  }

  reset() {
    this.setState({ x: 0, y: 0, z: 3 });
  }

  handleWidthChange(value) {
    this.setState({ width: value });
  }

  handleHeightChange(value) {
    this.setState({ height: value });
  }

  render() {
    const {
      x,
      y,
      z,
      width,
      height
    } = this.state;
    return (
      <div className="app" >
        <ControlPanel
          plus={this.zoomIn}
          minus={this.zoomOut}
          left={this.left}
          right={this.right}
          up={this.up}
          down={this.down}
          reset={this.reset}
        />
        <Slider value={width} min={50} max={1024} onChange={this.handleWidthChange} />
        <Slider value={height} min={50} max={1024} onChange={this.handleHeightChange} />
        <Grid
          x={x}
          y={y}
          z={z}
          onClick={this.onClick}
          height={Number(height)}
          width={Number(width)}
        >
          <Row>
            <FirstSlide onClick={this.right} />
            <SecondSlide onClick={this.right} />
            <ThirdSlide onClick={this.secondRow} />
          </Row>
          <Row>
            <FourthSlide onClick={this.right} />
            <FifthSlide onClick={this.right} />
            <SixthSlide />
          </Row>
          <Row>
            <LoremIpsumSlide />
            <LoremIpsumSlide />
            <LoremIpsumSlide />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
