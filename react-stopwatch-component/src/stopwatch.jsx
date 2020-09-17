import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: 0, time: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    if (this.state.isPlaying === 1) {
      this.setState({ isPlaying: 0 });
      this.pauseTimer();
    } else if (this.state.isPlaying === 0) {
      this.setState({ isPlaying: 1 });
      this.startTimer();
    }
  }

  startTimer() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  pauseTimer() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ time: this.state.time + 1 });
  }

  reset() {
    if (!this.state.isPlaying) {
      this.setState({ time: 0 });
    }
  }

  render() {
    const timeIcon = this.state.isPlaying ? 'pause' : 'play';
    return (
      <div className="group">
        <div className="watch" onClick={this.reset}>
          <div className="time">{this.state.time}
          </div>
        </div>
        <div>
          <i className={`icon fas fa-${timeIcon}`} onClick={this.handleClick}></i>
        </div>
      </div>
    );
  }
}
