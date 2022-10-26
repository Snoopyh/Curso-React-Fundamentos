import React from "react";
import ComParametro from "./componets/basicos/ComParametro";
import Primeiro from "./componets/basicos/Primeiro";
import NumAleatorio from "./componets/basicos/NumeroAleatorio";

export default function App(props) {
  return (
    <>
      <h1>Fundamentos React</h1>
      <NumAleatorio
      titulo="Numero Aleatorio"
      min={10}
      max={200}/>
      <ComParametro
        titulo="Situação do Aluno"
        aluno="Gustavo Silva"
        nota={9.3}
      />
      <Primeiro />
    </>
  );
}
