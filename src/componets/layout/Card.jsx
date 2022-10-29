import React from "react";
import "./Card.css";

export default function(props) {
  const { titulo ,color } = props;
  const CardStyle ={
    backgroundColor: color || "#011f4b ",
    borderColor: color || "#011f4b "
  }
  return (
    <div className="Card" style={CardStyle}>
      <div className="Title">{titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
}
