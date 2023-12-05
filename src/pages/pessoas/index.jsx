/*PESSOAS > LISTAGEM > PÁGINA*/

// import { useState } from 'react'
// import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './pessoas.css'
import { List } from '../../components/listas'

export function Pessoas() {
	return (
		<div className='container'>
			<div className='titulo'>
				<img src="/src/images/logo-pessoas.png" id='icone-pagina' /><h1>Pessoas</h1>
				<Link to="/cadastro-pessoas"><button><img src="/src/images/icones/icone-mais.png" id='icone-lista' />CADASTRAR</button></Link>
			</div>

			<List 
				adesao="Sim" nome="José da Silva" telefone="(88) 90000-0000" cpf="000.000.000-01" porte="MEI"local="Sede"
			/>
		</div>
	)
}