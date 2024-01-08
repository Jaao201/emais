//MENU 2 (with mouse drag function).

import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Menu2 = () => {
	const sliderRef = useRef(null);
	const [isDown, setIsDown] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	useEffect(() => {
		const slider = sliderRef.current;

		const handleMouseDown = (e) => {
			setIsDown(true);
			slider.classList.add("active");
			setStartX(e.pageX - slider.offsetLeft);
			setScrollLeft(slider.scrollLeft);
		};

		const handleMouseLeave = () => {
			setIsDown(false);
			slider.classList.remove("active");
		};

		const handleMouseUp = () => {
			setIsDown(false);
			slider.classList.remove("active");
		};

		const handleMouseMove = (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - slider.offsetLeft;
			const walk = (x - startX) * 3; //scroll-fast
			slider.scrollLeft = scrollLeft - walk;
			console.log(walk);
		};

		slider.addEventListener("mousedown", handleMouseDown);
		slider.addEventListener("mouseleave", handleMouseLeave);
		slider.addEventListener("mouseup", handleMouseUp);
		slider.addEventListener("mousemove", handleMouseMove);

		return () => {
			slider.removeEventListener("mousedown", handleMouseDown);
			slider.removeEventListener("mouseleave", handleMouseLeave);
			slider.removeEventListener("mouseup", handleMouseUp);
			slider.removeEventListener("mousemove", handleMouseMove);
		};
	}, [isDown, startX, scrollLeft]);

	return (
		<div className="divMenu2" ref={sliderRef}>
			<NavLink to="/agendamentos">
				<img src="/src/images/icons/menu-pessoas.png" alt="" />
				Agendamentos
			</NavLink>
			<NavLink to="/cadastro-pessoas">
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
				<img src="/src/images/icons/menu-contabilidade.png" alt="" />
				Indicadores
			</NavLink>
		</div>
	);
};

export default Menu2;
