import React from "react";

export default function(props) {
  const cb =props.quandoClicar
  const gerarIdade = () => Math.floor(Math.random() * (50 - 20) + 20 )
  const gerarNerd = () => Math.random() > 0.5
  return (
    <div>
      <div>Filho</div>
      <button onClick={(_) => cb("João", gerarIdade(), gerarNerd())}>
        Fornecer Informaçôes
      </button>
    </div>
  );
}
