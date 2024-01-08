/* AGENDAMENTOS */

import "./index.css";
import TabPane from "antd/es/tabs/TabPane";
import { Input, Select, Tabs } from "antd";
import { FileAddFilled } from "@ant-design/icons";

export function Agendamentos() {
	return (
		<div className="container">
			<h1>AGENDAMENTOS</h1>
			<form className="form" action="" method="POST">
				<Tabs defaultActiveKey="1" id="tabs" type="line">
					<TabPane className="abas" tab="Cadastrar agendamento" key={1}>
						<section>
							<label htmlFor="motivoAgendamento">Motivo:</label>
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
							<label htmlFor="dataAgendamento">Data:</label>
							<Input type="date" id="dataAgendamento" />
						</section>
						<section>
							<label htmlFor="horarioAgendamento">Horário:</label>
							<Input type="time" id="horarioAgendamento" required />
						</section>
					</TabPane>
					<TabPane className="abas" tab="Registros cadastrados" key={2}>
						<p>Agendamentos cadastrados aparecerão aqui.</p>
					</TabPane>
				</Tabs>
			</form>
		</div>
	);
}
