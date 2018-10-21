import React from 'react';

class ControlPanel extends React.PureComponent {
  render() {
    const { up, down, left, right, plus, minus, reset } = this.props;
    return (
      <div className="control-panel">
        <i className="fas fa-arrow-left" onClick={left} />
        <i className="fas fa-arrow-right" onClick={right} />
        <i className="fas fa-arrow-up" onClick={up} />
        <i className="fas fa-arrow-down" onClick={down} />
        <i className="fas fa-search-plus" onClick={plus} />
        <i className="fas fa-search-minus" onClick={minus} />
        <i className="fas fa-th" onClick={reset} />
      </div>
    );
  }
}

export default ControlPanel;
