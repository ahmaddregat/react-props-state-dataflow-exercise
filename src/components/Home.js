import React, { Component } from "react";
import Item from "./Item";

class Home extends Component {
  render() {
    const store = this.props.store;
    return store.map((i) => (
      <Item key={i.item} price={i.price} name={i.item} />
    ));
  }
}

export default Home;
