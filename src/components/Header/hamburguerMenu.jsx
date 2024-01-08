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
					
				</div>
			)}
		</div>
	);
};

export default HamburguerMenu;
