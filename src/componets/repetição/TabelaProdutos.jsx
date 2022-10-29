import React from "react";
import "./TabelaProdutos.css";
import produtos from "../../data/produtos";

export default function(props) {
  const ListaProduto = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 !== 0 ? "Par" : "Impar"}>
        <td>{produto.id} </td>
        <td className="Escuro"> {produto.nome}</td>
        <td className="Escuro"> {produto.preco.toFixed(2).toString()} R$</td>
      </tr>
    );
  });
  return (
    <div className="TabelaProdutos">
      <table border="1">
        <thead>
          <tr>
            <th>Codigo </th>
            <th> Nome do Produto</th>
            <th>Preço </th>
          </tr>
        </thead>
        <tbody>{ListaProduto}</tbody>
      </table>
    </div>
  );
}
