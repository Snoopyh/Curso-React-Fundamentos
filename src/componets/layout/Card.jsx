import React from "react";
import "./Card.css";

export default function(props) {
  const { titulo ,color } = props;
  const CardStyle ={
    backgroundColor: color || "#005b96",
    borderColor: color || "#005b96"
  }
  return (
    <div className="Card" style={CardStyle}>
      <div className="Title">{titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
}
