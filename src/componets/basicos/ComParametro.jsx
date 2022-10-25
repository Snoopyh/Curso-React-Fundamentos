import React from 'react'

export default function ComParametro(props){
  const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
  return (
  <div>
     <h1>{props.titulo}</h1>
     <p>
      <strong>{props.aluno} </strong>
       tem nota  
       <strong> {props.nota} e foi </strong>
       <strong>{status} </strong>
       </p>
  </div>
  )
}