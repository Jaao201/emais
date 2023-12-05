import './atendimento.css'
import { Link } from 'react-router-dom'
import { List } from '../../components/listas'

export function Atendimento() {


    return (
        <div className='container'>
            <div className='titulo'>
                <img src="/src/images/logo-atendimentos.png" id='icone-pagina' /><h1>ATENDIMENTOS</h1>
                <Link to="/cadastro-negocios"><button><img src="/src/images/icones/icone-mais.png" id='icone-lista'/>CADASTRAR</button></Link>
            </div>
            <List />

        </div>
    )
}