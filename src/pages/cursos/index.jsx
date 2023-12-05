import { Link, NavLink } from 'react-router-dom'
import { List } from '../../components/listas'
import './styleCursos.css'


export function Cursos() {


    return (
        <div className='container'>
            <div className='titulo'>
                <img src="/src/images/logo-cursos.png" id='icone-pagina'/><h1>CURSOS</h1>
                <Link to="/cadastro-negocios"><button><img src="/src/images/icones/icone-mais.png" id='icone-lista'/>CADASTRAR</button></Link>
            </div>
            <List />
        </div>
    )
}