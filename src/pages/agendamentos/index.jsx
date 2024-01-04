/* AGENDAMENTOS */

import { Link, NavLink } from "react-router-dom";
import "./index.css";
import { List } from "../../components/listas";
import TabPane from "antd/es/tabs/TabPane";
import { Button, Input, Select, Tabs } from "antd";

export function Agendamentos() {
	return (
		<div className="container">
			<form className="form" action="" method="POST">
				<Tabs defaultActiveKey="1" id="tabs" type="line">
					<TabPane className="abas" tab="Cadastrar" key={1}>
						<div className="bloco1">
							<section>
								<label htmlFor="motivoAgendamento">Agendar:</label>
								<Select
									defaultValue={"Selecione"}
									required
									style={{ width: 250 }}
									options={[
										{ value: "Sim", label: "Atendimento com contador (a)" },
										{ value: "Não", label: "Visita de acompanhamento" },
									]}
								/>
							</section>

							<section>
								<label htmlFor="dataAgendamento">Para:</label>
								<Input
									type="date"
									name=""
									id="dataAgendamento"
									placeholder="Se houver..."
								/>
							</section>

							<section>
								<label htmlFor="cpf">CPF: *</label>
								<Input
									type="text"
									id="cpf"
									maxLength={14}
									placeholder="xxx.xxx.xxx-xx"
									required
								/>
							</section>
							<section>
								<label htmlFor="rg">RG:</label>
								<Input
									type="number"
									id="rg"
									placeholder="Registro Geral"
									required
								/>
							</section>
							<section>
								<label htmlFor="email">Email:</label>
								<Input
									type="email"
									name=""
									id="email"
									placeholder="exemplo@exemplo.com"
								/>
							</section>
							<section>
								<label htmlFor="telefone">Telefone pessoal:</label>
								<Input
									type="number"
									placeholder="(xx) x xxxx-xxxx"
									id="telefone"
								/>
							</section>
						</div>
					</TabPane>
				</Tabs>
			</form>
		</div>
	);
}
