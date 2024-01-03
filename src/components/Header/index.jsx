import { NavLink } from "react-router-dom";
import "./index.css";
import "../_reset/reset.css";
import EmaisLogo from "../../images/logos/logo-emais-white.png";

export function Header() {
	return (
		<header>
			<nav className="navMenu">
				<div class="divMenu1">
					<div class="divMenu1Logo">
						<NavLink onclick="hamburguerMenu()" to="/">
							<img src={EmaisLogo} alt="Logotipo do Sistema E-Mais" />
						</NavLink>
						<NavLink to="/">
							<h1 alt="Sobre o sistema">Sistema E+</h1>
						</NavLink>
					</div>
					<div className="divMenu1Login">
						<NavLink to="/">
							<img src="../images/bell-64.png" alt="" />
						</NavLink>
						<NavLink to="/">
							<img src="./images/search-64.png" alt="" />
						</NavLink>
						<NavLink to="/">
							<img src="./images/user-64.png" alt="" />
						</NavLink>
					</div>
				</div>
				{/* <a onClick={showHideMenu()}>Menu</a> */}
				<div className="divMenu2">
					<NavLink to="/agendamentos">
						Agendamentos
						<img src="/src/images/icons/menu/icon-pessoas.png" alt="" />
					</NavLink>
					<NavLink to="/pessoas">
						Pessoas
						<img src="/src/images/icons/menu/icon-pessoas.png" alt="" />
					</NavLink>
					<NavLink to="/negocios" id="divMenu2Negocios">
						Negócios
						<img src="/src/images/icons/menu/icon-negocios.png" alt="" />
					</NavLink>
					<NavLink to="/eventos">
						Eventos
						<img src="/src/images/icons/menu/icon-eventos.png" alt="" />
					</NavLink>
					<NavLink to="/cursos">
						Cursos
						<img src="/src/images/icons/menu/icon-cursos.png" alt="" />
					</NavLink>
					<NavLink to="/consultorias">
						Consultorias
						<img src="/src/images/icons/menu/icon-consultorias.png" alt="" />
					</NavLink>
					<NavLink to="/protocolos">
						Protocolos
						<img src="/src/images/icons/menu/icon-protocolos.png" alt="" />
					</NavLink>
					<NavLink to="/contabilidade">
						Contabilidade
						<img src="/src/images/icons/menu/icon-contabilidade.png" alt="" />
					</NavLink>
					<NavLink to="/indicadores">
						Indicadores
						<img src="/src/images/icons/menu/icon-indicadores.png" alt="" />
					</NavLink>
				</div>
			</nav>
		</header>
	);
}
