import React from "react";
import "./App.css";

import ListaAluno from "./componets/repetição/ListaAluno";
import Familia from "./componets/basicos/Familia";
import FamiliaMembro from "./componets/basicos/FamiliaMembro";
import NumAleatorio from "./componets/basicos/NumeroAleatorio";
import ComParametro from "./componets/basicos/ComParametro";
import Primeiro from "./componets/basicos/Primeiro";
import Card from "./componets/layout/Card";
import TabelaProdutos from "./componets/repetição/TabelaProdutos";
import ParOuImpar from "./componets/condicional/ParOuImpar";

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="cards">
        <Card titulo="#07 Renderização Condicional" >
          <ParOuImpar numero={[21,20,19,28,30,60,80,13,7,5]}/>
        </Card>
        <Card titulo="#05 Repetição" >
          <TabelaProdutos/>
        </Card>
        <Card titulo="#05 Repetição" >
          <ListaAluno/>
        </Card>
        <Card titulo="#04 Componente com filhos">
          <Familia>
            <FamiliaMembro nome="Gustavo" sobrenome="Ferreira" />
            <FamiliaMembro nome="Roberto" sobrenome="Ferreira" />
            <FamiliaMembro nome="Joana" sobrenome="Silva" />
          </Familia>
        </Card>
        <Card titulo="#03 Numero Aleatorio" color="#011f4b ">
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
