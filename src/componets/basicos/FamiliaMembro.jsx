import React from "react";

export default function(props) {
  const { nome, sobrenome } = props;
  return (
    <div>
      {nome} <strong>{sobrenome}</strong>
    </div>
  );
}
