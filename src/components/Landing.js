import React, { Component } from "react";

class Landing extends Component {
  /* your code here */

  render() {
    return (
      <div>
        <div>Welcome ,{this.props.user}</div>
        <div>
          the hottest is: {this.props.store.find((i) => i.hottest).item}
        </div>
      </div>
    );
  }
}

export default Landing;
