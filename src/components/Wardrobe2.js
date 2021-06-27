import Article from "./Article";
import React, { Component } from "react";

class Wardrobe2 extends Component {
  render() {
    let wardrobe = [
      { type: "shirt", color: "red", size: "Medium" },
      { type: "shirt", color: "blue", size: "Medium" },
      { type: "pants", color: "blue", size: "Medium" },
      { type: "accessory", color: "sapphire", size: "" },
      { type: "accessory", color: "lilac", size: "" },
    ];

    return wardrobe
      .filter((x) => x.color === "blue")
      .map((c) => (
        <Article
          key={wardrobe.filter((x) => x.color === "blue").indexOf(c.type)}
          info={c}
        />
      ));
  }
}

export default Wardrobe2;
