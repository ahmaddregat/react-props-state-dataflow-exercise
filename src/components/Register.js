import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div id="register">
        <h4>You cannot reserve during these times:</h4>
        {this.props.reservations.map((r) => (
          <div key={r.name}>
            {r.name} has a reservation on {r.day} @ {r.time}
          </div>
        ))}
      </div>
    );
  }
}

export default Register;
