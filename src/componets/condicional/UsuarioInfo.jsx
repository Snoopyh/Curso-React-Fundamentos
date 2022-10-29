import React from "react";
import If, { Else } from "./if";

export default function(props) {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja Bem-Vindo !{" "}
        <strong>
          {usuario.nome} <br />
        </strong>
        <Else>
          Seja Bem-Vindo ! <strong>Amigão</strong>
        </Else>
      </If>
    </div>
  );
}
