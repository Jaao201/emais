//PÁGINA PRINCIPAL

//Importando elementos
import React from "react"; //react.
import "./index.css"; //estilo desta página.
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes/index.jsx";

import { Header } from "./components/header/index.jsx";
import { Footer } from "./components/footer/index.jsx";
import "./components/header/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<main>
				<AppRoutes />
			</main>
			{/* <Footer/> */}
		</BrowserRouter>
	</React.StrictMode>,
);
