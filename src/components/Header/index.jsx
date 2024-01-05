import { NavLink } from "react-router-dom";
import "./index.css";
import "../_reset/reset.css";
import EmaisLogo from "../../images/logos/logo-emais-white.png";
import HamburguerMenu from "./hamburguerMenu";

export function Header() {
	return (
		<header>
			<nav className="navMenu">
				<div class="divMenu1">
					<div class="divMenu1Left">
						<HamburguerMenu />
						<NavLink id="emaisBrand" to="/">
							<img src={EmaisLogo} alt="Logotipo do Sistema E-Mais" />
							<h1 alt="Sobre o sistema">Sistema E+</h1>
						</NavLink>
					</div>
					<div className="divMenu1Right">
						<NavLink to="/">
							<img src={"../../images/icons/menu-notifications.png"} alt="" />
						</NavLink>
						<NavLink to="/">
							<img src={"../../images/icons/menu-search.png"} alt="" />
						</NavLink>
						<NavLink to="/">
							<img src={"../../images/icons/menu-user.png"} alt="" />
						</NavLink>
					</div>
				</div>
			</nav>
		</header>
	);
}
