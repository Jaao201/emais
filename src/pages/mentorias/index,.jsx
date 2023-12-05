import { Link, NavLink } from 'react-router-dom'
import { List } from '../../components/listas'
import './styleMentorias.css'


export function Mentorias() {


    return (
        <div className='container'>
            <div className='titulo'>
                <img src="/src/images/logo-mentorias.png" id='icone-pagina' /><h1>MENTORIAS</h1>
                <Link to="/cadastroMentorias"><button><img src="/src/images/icones/icone-mais.png" id='icone-lista' />CADASTRAR</button></Link>
            </div>
            
            <List />
        </div>
    )
}