import React from 'react';
import ReactDOM from 'react-dom';
import GiftExpertApp from './componentes/GiftExpertApp';
import ContenedorPrincipal from './componentes/ContenedorPrincipal';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GiftImage from './componentes/GiftImage';

// PARA DESPLEGARLO EN PRODUCCION LO QUE TENEMOS QUE HACER ES CORRER EL COMNADO NOM RUN BUILD , LUEGO INSTALAR UN SERVER LOCAL NODE Y DENTRO DE LA CARPETA BUILD TIRAR EL COMANDO HTTP-SERVER -O
ReactDOM.render(

   <ContenedorPrincipal/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
