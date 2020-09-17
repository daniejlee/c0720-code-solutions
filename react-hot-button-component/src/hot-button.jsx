import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  getHeatLevel() {
    if (this.state.clickCount < 6) {
      return 1;
    } else if (this.state.clickCount < 9) {
      return 2;
    } else if (this.state.clickCount < 12) {
      return 3;
    } else if (this.state.clickCount < 15) {
      return 4;
    } else if (this.state.clickCount < 18) {
      return 5;
    } else if (this.state.clickCount >= 18) {
      return 6;
    }
  }

  render() {
    const level = this.getHeatLevel();
    return (<button
      className={`level-${level}`}
      onClick={this.handleClick}>
      {'Hot Button'}
    </button>);
  }
}
