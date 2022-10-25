import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'


import ComParametro from './componets/basicos/ComParametro';
import Primeiro from './componets/basicos/Primeiro'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Primeiro/>
   <ComParametro titulo="Situação do Aluno"
   aluno="Gustavo Silva"
   nota={9.3}
   />
  </>
);

