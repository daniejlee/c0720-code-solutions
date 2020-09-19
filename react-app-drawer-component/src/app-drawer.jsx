import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSidebar: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.className !== 'side-bar') {
      if (this.state.showSidebar) {
        this.setState({ showSidebar: false });
      } else {
        this.setState({ showSidebar: true });
      }
    }
  }

  render() {
    return (this.state.showSidebar
      ? (
        <div className="container">
          <div className="overlay" onClick={this.handleClick} style={{ zIndex: '1' }}>
            <div className="side-bar" style={{ zIndex: '2' }} >
              <ul>
                <li className="nav-item nav-item-menu" >Menu</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Get Started</li>
                <li className="nav-item">Sign In</li>
              </ul>
            </div>
          </div>
        </div>
      )
      : (
        <div>
          <i className="fas fa-bars" onClick={this.handleClick}></i>
        </div>
      )
    );
  }
}
