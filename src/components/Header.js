import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="Header" style={{ textAlign: "center" }}>
        <h1>This Week's Weather</h1>
      </div>
    );
  }
}

export default Header;
