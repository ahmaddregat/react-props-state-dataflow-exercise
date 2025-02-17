import React, { Component } from "react";

class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
        <h1>Calendar:</h1>
        {this.props.reservations.map((r) => (
          <div key={r.name}>
            {r.name} has a reservation on {r.day} @ {r.time}
          </div>
        ))}
      </div>
    );
  }
}

export default Calendar;
