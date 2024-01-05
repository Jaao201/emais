import { Link, NavLink } from "react-router-dom";
import { List } from "../../components/listas";
import TabPane from "antd/es/tabs/TabPane";
import { Button, Input, Select, Tabs } from "antd";

export function Contabilidade() {
	return (
		<div className="container">
			<form className="form" action="" method="POST">
				<Tabs defaultActiveKey="1" id="tabs" type="line">
					<TabPane className="abas" tab="Cadastrar" key={1}>
						<div className="bloco1">
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
						</div>
					</TabPane>
				</Tabs>
			</form>
		</div>
	);
}
