import React from "react";

export default function(props) {
  const MapearImpaPar = props.numero.map(numero => numero % 2 === 0 ?
     <li>{numero}: Par</li> :
     <li>{numero}: Impar</li>);
  return (<div style={{listStyle:"none"}}>
        {MapearImpaPar}
    </div>
    );
}
