import React, { Component } from "react";

export class Dropdown extends Component {
  handleChange = e => {
    // console.log(e.target.value);
    this.props.handleChange(e.target.value);
  };

  render() {
    return (
      <div className="Dropdown" style={{ textAlign: "center" }}>
        <select onChange={this.handleChange}>
          <option value="Rochester">Rochester</option>
          <option value="Albany">Albany</option>
          <option value="Buffalo">Buffalo</option>
          <option value="Syracuse">Syracuse</option>
          <option value="NYC">New York City</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
