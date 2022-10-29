import React from "react";
import DiretaFilho from "./DiretaFilho";

export default function(props) {
  return (
    <div>
      <DiretaFilho nome="Maria" sobrenome={props.sobrenome} idade={20} nerd={true}></DiretaFilho>
      <DiretaFilho nome="Fernanda" sobrenome={props.sobrenome} idade={27} nerd={true}></DiretaFilho>
      <DiretaFilho nome="Francisco" sobrenome={props.sobrenome} idade={30} nerd={false}></DiretaFilho>
    </div>
  );
}
