import React ,{ useState } from "react";
import './Mega.css'

export default function(props){
  

  function gerarNumeroNaoContido(min , max ,array){
    const numAleatorio = parseInt(Math.random() * (max + 1 - min) + min)
    return array.includes(numAleatorio) ? gerarNumeroNaoContido(min , max , array) 
    : numAleatorio
  }
  
  function gerarNumeros(qtde){
    const numeros = Array(qtde)
    .fill(0)
    .reduce((nums) => {
      const novoNumero = gerarNumeroNaoContido(1, 60 , nums)
      return [...nums , novoNumero]
    },[])
    .sort((n1 , n2) => n1 - n2)
    return numeros
  } 

  const [ quantidade , setQuantidade ] = useState(props.quantidade || 6);
  const numerosIniciais = gerarNumeros(quantidade)
  const [ numerosMega, setNumerosMega ] = useState(numerosIniciais);
  

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numerosMega.join(', ')}</h3>
      <div>
        <label> Qtde de Números</label>
        <input
        min="6"
        max="15"
        type="number" 
        value={quantidade} 
        onChange={e => {
          setQuantidade(+e.target.value)
          setNumerosMega(gerarNumeros(quantidade))
        }}
        />
      </div>
      <button onClick={_ => setNumerosMega(gerarNumeros(quantidade))}>
        Gerar Números
        </button>
    </div>
  )
}