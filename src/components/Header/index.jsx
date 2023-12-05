import { Link, NavLink } from 'react-router-dom'
import './header.css'
import logoEM from '../../images/logo-em-branco.png'



export function Header() {
    return (
        <header>
            <nav className='menu'>
                <ul>
                    <NavLink to="/">
                        <li title='Página inicial'><img id='logoEM' src={logoEM} /></li>
                    </NavLink>
                    <Link to="/pessoas">
                        <li title='Lista de pessoas'><img src="/src/images/icones/icone-pessoas.png" alt="" />Pessoas</li>
                    </Link>
                    <Link to="/negocios">
                        <li title='Lista de negócios (empreendimentos)'><img src="/src/images/icones/icone-negocios.png" alt="" />Negócios</li>
                    </Link>
                    <Link to="/eventos">
                        <li title='Lista de eventos'><img src="/src/images/icones/icone-eventos.png" alt="" />Eventos/Cursos</li>
                    </Link>
                    {/* <Link to="/cursos">
                        <li title='Lista de cursos'><img src="/src/images/icones/icone-cursos.png" alt="" />Cursos</li>
                    </Link> */}
                    <Link to="/mentorias">
                        <li title=''><img src="/src/images/icones/icone-mentorias.png" alt="" />Mentorias</li>
                    </Link>
                    <Link to="/protocolos">
                        <li title='Protocolos com registros de atendimento'><img src="/src/images/icones/icone-protocolos.png" alt="" />Registros</li>
                    </Link>
                    <Link to="/contabilidade">
                        <li title='Serviços e tutoriais sobre contabilidade'><img src="/src/images/icones/icone-contabilidade.png" alt="" />Contabilidade</li>
                    </Link>
                    <Link to="/indicadores">
                        <li title='Lista de indicadores'><img src="/src/images/icones/icone-indicadores.png" alt="" />Indicadores</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}