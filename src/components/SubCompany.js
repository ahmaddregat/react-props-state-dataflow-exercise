import React, { Component } from "react";

class SubCompany extends Component {
  render() {
    return (
      <h4>
        {this.props.name}
        <p>{this.props.revenue}</p>
      </h4>
    );
  }
}

export default SubCompany;
