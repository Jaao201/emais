/* AGENDAMENTOS () */

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
					<TabPane className="abas" tab="" key={1}>
						<div className="bloco1">
							<section>
								<label htmlFor="date">Data de cadastro:</label>
								<Input type="date" name="date" id="date" />
							</section>

							<section>
								<label htmlFor="date">Agente responsável:</label>
								<Select
									defaultValue="Selecione"
									required
									style={{ width: 270 }}
									options={[
										{
											value: "fundamental-incompleto",
											label: "Luana Ferreira",
										},
										{ value: "fundamental-completo", label: "Jorge Alysson" },
									]}
								/>
							</section>
							<section>
								<label htmlFor="date">
									Essa pessoa faz parte do Empreenda Mais?
								</label>
								<Select
									defaultValue="Selecione"
									required
									style={{ width: 270 }}
									options={[
										{ value: "Sim", label: "Sim" },
										{ value: "Não", label: "Não" },
									]}
								/>
							</section>
						</div>
						<div className="btn-cadastrar">
							<Button shape="round">Salvar cadastro</Button>
						</div>
					</TabPane>
					<TabPane className="abas" tab="Dados pessoais" key={2}>
						<div className="bloco2">
							<section>
								<label htmlFor="nome">Nome completo: *</label>
								<Input
									type="text"
									name=""
									id="nome"
									placeholder="Nome completo..."
									required
								/>
							</section>

							<section>
								<label htmlFor="nomeSocial">Nome social:</label>
								<Input
									type="text"
									name=""
									id="nomeSocial"
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
