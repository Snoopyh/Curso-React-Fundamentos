import React from "react";

export default function NumAleatorio(props) {
  const NumAleatorio = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );
  return (
    <>
      <h1>{props.titulo}</h1>
      <p>
        Numero aleatorio entre {props.min} e {props.max} é :
        <strong> {NumAleatorio}</strong>
      </p>
    </>
  );
}
