import React from "react";

export default function NumAleatorio(props) {
  const { max, min } = props;
  const NumAleatorio = parseInt(Math.random() * (max - min) + min);
  return (
    <>
      <p>
        Numero aleatorio entre {min} e {max} é :<strong> {NumAleatorio}</strong>
      </p>
    </>
  );
}
