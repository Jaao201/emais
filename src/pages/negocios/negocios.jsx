//NEGÓCIOS > LISTAGEM > PÁGINA

// import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { List } from '../../components/listas'
import './negocios.css'

export function Negocios() {


  return (
    <div className='container'>
      <div className='titulo'>
        <img src="/src/images/logo-negocios.png" id='icone-pagina'/><h1>NEGÓCIOS</h1>
        <Link to="/cadastro-negocios"><button><img src="/src/images/icones/icone-mais.png" id='icone-lista' alt="" />CADASTRAR</button></Link>
      </div>


      {/* <div className='lista-empreendedores'>
        <table>
          <thead>
            <th>Nome fantasia:</th>
            <th>CNPJ:</th>
            <th>CPF:</th>
            <th>SITUAÇÃO:</th>
          </thead>
          <tbody>
            <tr>
              <td>Empreenda Mais</td>
              <td>0000000000</td>
              <td>000.000.000-00</td>
              <td>Formal</td>
            </tr>
            <tr>
              <td>Empreenda Mais</td>
              <td>Não possui</td>
              <td>111.111.111-11</td>
              <td>Não formal</td>
            </tr>
            <tr>
              <td>Empreenda Mais</td>
              <td>0000000000</td>
              <td>000.000.000-00</td>
              <td>Formal</td>
            </tr>
            <tr>
              <td>Empreenda mais</td>
              <td>11111111111</td>
              <td>111.111.111-11</td>
              <td>Formal</td>
            </tr>
            <tr>
              <td>Empreenda mais</td>
              <td>0000000000</td>
              <td>000.000.000-00</td>
              <td>Formal</td>
            </tr>
            <tr>
              <td>Empreenda mais</td>
              <td>11111111111</td>
              <td>111.111.111-11</td>
              <td>Formal</td>
            </tr>


          </tbody>
        </table>
      </div> */}


      <List/>
    </div>
  )
}


