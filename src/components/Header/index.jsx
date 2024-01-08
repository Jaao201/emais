import { NavLink } from "react-router-dom";
import "./index.css";
import "../_reset/reset.css";
import Menu2 from "./Menu2";
import Menu1 from "./Menu1";

export function Header() {
	return (
		<header>
			<nav className="navMenu">
				<Menu1 />
				<Menu2 />
			</nav>
		</header>
	);
}
