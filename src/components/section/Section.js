import React from "react";
import Card from "../card/Card.js";
function Section({ items, showned }) {
  return items
    ?.slice(0, showned)
    .map((element, id) => <Card key={id} item={element} />);
}

export default Section;
