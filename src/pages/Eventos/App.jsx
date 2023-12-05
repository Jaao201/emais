// import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { List } from '../../components/listas'
import './App.css'

export function Eventos() {


  return (
    <div className='container'>
      <div className='titulo'>
        <img src="/src/images/logo-eventos.png" id='icone-pagina' /><h1>EVENTOS E CURSOS</h1>
        <Link to="/cadastro-eventos"><button><img src="/src/images/icones/icone-mais.png" id='icone-lista' alt="" />CADASTRAR</button></Link>
      </div>

      <List />
    </div>
  )
}


