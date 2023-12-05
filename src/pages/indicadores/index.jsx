import { List } from '../../components/listas';
import './styleIndicadores.css';
import { Link } from 'react-router-dom';

export function Indicadores(){


    return(
        <div className='container'>
                <div className='titulo'>
                <img src="/src/images/logo-indicadores.png" id='icone-pagina'/><h1>INDICADORES</h1>
                <Link to="/cadastro-negocios"><button><img src="/src/images/icones/icone-mais.png" id='icone-lista'/>CADASTRAR</button></Link>
            </div>
            <List/>
        </div>
    )
}