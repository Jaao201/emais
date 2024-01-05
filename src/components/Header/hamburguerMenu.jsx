import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HamburguerMenu = () => {
	const [isMenuVisible, setMenuVisible] = useState(false);

	const hamburguerMenu = () => {
		setMenuVisible(!isMenuVisible);
	};

	return (
		<div>
			<NavLink onClick={hamburguerMenu}>
				<img src="../../images/icons/menu-hamburguer.png" alt="Menu" />
			</NavLink>
			{isMenuVisible && (
				<div>
					<div className="divHamburguerMenu">
						<NavLink to="/agendamentos">
							<img src="/src/images/icons/menu-pessoas.png" alt="" />
							Agendamentos
						</NavLink>
						<NavLink to="/pessoas">
							<img src="/src/images/icons/menu-pessoas.png" alt="" />
							Pessoas
						</NavLink>
						<NavLink to="/negocios" id="divMenu2Negocios">
							<img src="/src/images/icons/menu-negocios.png" alt="" />
							Negócios
						</NavLink>
						<NavLink to="/eventos">
							<img src="/src/images/icons/menu-eventos.png" alt="" />
							Eventos
						</NavLink>
						<NavLink to="/cursos">
							<img src="/src/images/icons/menu-cursos.png" alt="" />
							Cursos
						</NavLink>
						<NavLink to="/consultorias">
							<img src="/src/images/icons/menu-consultorias.png" alt="" />
							Consultorias
						</NavLink>
						<NavLink to="/protocolos">
							<img src="/src/images/icons/menu-protocolos.png" alt="" />
							Protocolos
						</NavLink>
						<NavLink to="/contabilidade">
							<img src="/src/images/icons/menu-contabilidade.png" alt="" />
							Contabilidade
						</NavLink>
						<NavLink to="/indicadores">
							<img src="/src/images/icons/menu-indicadores.png" alt="" />
							Indicadores
						</NavLink>
					</div>
				</div>
			)}
		</div>
	);
};

export default HamburguerMenu;
