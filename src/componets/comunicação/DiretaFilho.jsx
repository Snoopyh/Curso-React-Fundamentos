import React from "react";

export default function(props) {
  return (
    <div>
      <span> {props.nome} {props.sobrenome} </span>
      <span>idade: {props.idade} </span>
      <span>{props.nerd ? "Verdadeiro" : "Falso"}!</span>
    </div>
  );
}
