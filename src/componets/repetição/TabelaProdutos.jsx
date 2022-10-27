import React from "react";
import produtos from "../../data/produtos";


export default function(props){
  const ListaProduto = produtos.map(produto => {
    return <tr key={produto.id}>
      <td>{produto.id} </td>
      <td> {produto.nome}</td>
      <td> {produto.preco.toFixed(2).toString()} R$</td>
    </tr>
  })
  return (
    <div>
      <table border="1" style={{margin: "auto"}}>
        <tr>
          <td> Codigo </td>
          <td>| Nome do Produto</td>
          <td>|  Preço </td>
        </tr>
        {ListaProduto}
      </table>
    </div>
  )
}