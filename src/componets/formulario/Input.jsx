import React,{ useState } from "react";


export default function (){

  const[valor, setValor] = useState('Digite o Nome')
  function quandoMudar(e){
    setValor(e.target.value)
  }
  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div style={{
        display:'flex',
        flexDirection: 'column'
      }}>
      <input value={valor} onChange={quandoMudar}/>
      <input value={valor} readOnly/>

      </div>
    </div>
  )
}