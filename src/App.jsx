import React from "react";
import "./App.css";

import Familia from "./componets/basicos/Familia";
import FamiliaMembro from "./componets/basicos/FamiliaMembro";
import NumAleatorio from "./componets/basicos/NumeroAleatorio";
import ComParametro from "./componets/basicos/ComParametro";
import Primeiro from "./componets/basicos/Primeiro";
import Card from "./componets/layout/Card";

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="cards">
        <Card titulo="#04 Componente com filhos">
          <Familia>
            <FamiliaMembro nome="Gustavo" sobrenome="Ferreira" />
            <FamiliaMembro nome="Roberto" sobrenome="Ferreira" />
            <FamiliaMembro nome="Joana" sobrenome="Silva" />
          </Familia>
        </Card>
        <Card titulo="#03 Numero Aleatorio" color="#005b96">
          <NumAleatorio min={1} max={60} />
          <NumAleatorio min={1} max={60} />
          <NumAleatorio min={1} max={60} />
          <NumAleatorio min={1} max={60} />
          <NumAleatorio min={1} max={60} />
          <NumAleatorio min={1} max={60} />
        </Card>
        <Card titulo="#02 Situação Do Aluno">
          <ComParametro aluno="Gustavo Silva" nota={9.3} />
        </Card>

        <Card titulo="#01 Primeiro Componente mais novo">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}
