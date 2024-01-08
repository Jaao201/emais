import React from "react";
import { NavLink } from "react-router-dom";
import HamburguerMenu from "./hamburguerMenu";
import EmaisLogo from "../../images/logos/logo-emais-white.png";

const Menu1 = () => {
	return (
		<div className="divMenu1">
			<div className="divMenu1Left">
				{/* <HamburguerMenu /> */}
				<NavLink id="emaisBrand" to="/">
					<img src={EmaisLogo} alt="Logotipo do Sistema E-Mais" />
					<h1 alt="Sobre o sistema">Sistema E+</h1>
				</NavLink>
			</div>
			<div className="divMenu1Right">
				<NavLink to="/">
					<img src="../../images/icons/menu-notifications.png" alt="" />
				</NavLink>
				<NavLink to="/">
					<img src="../../images/icons/menu-search.png" alt="" />
				</NavLink>
				<NavLink to="/">
					<img src="../../images/icons/menu-user.png" alt="" />
				</NavLink>
			</div>
		</div>
	);
};

export default Menu1;
