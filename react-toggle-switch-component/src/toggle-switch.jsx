import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { power: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.power === 1) {
      this.setState({ power: 0 });
    } else if (this.state.power === 0) {
      this.setState({ power: 1 });
    }
  }

  render() {
    const powerStatus = this.state.power ? 'on' : 'off';
    return (
      <div className="group">
        <div className={`switch switch-${powerStatus}`} onClick={this.handleClick}>
          <div className={`slider slider-${powerStatus}`}>
          </div>
        </div>
        <span className="power-text">{powerStatus}</span>
      </div>
    );
  }
}
