//PROTOCOLO > CADASTRO > PÁGINA
import { useState } from 'react'
import './protocoloCad.css'
import { Link } from 'react-router-dom';
import { DatePicker, Tabs, TimePicker } from 'antd';
import { TabPane } from 'rc-tabs/lib/TabPanelList/TabPane';
import { GlobalVariables } from '../../global';
import { Input, Select, Button } from 'antd';
import { Form } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import { ColumnWidthOutlined } from '@ant-design/icons';


export function CadProtocolo() {

	const [formProto, setFormProto] = useState({})



	async function handleSubmit(event) {
		event.preventDefault();

		const { nome, data, nomeEmpre, atendimento, refere, obs } = event.target;

		const ProtoUser = {
			nome: nome.value,
			data: data.value,
			NomedaEmpresa: nomeEmpre.value,
			atendimento: atendimento.value,
			protocolo: data.value + atendimento.value,
			refere: refere.value,
			obs: obs.value,

		}

		setFormProto(ProtoUser)
		GlobalVariables.pessoa = ProtoUser;


		console.log(ProtoUser);
	}


	return (
		<div className='container'>
			<h1>Registros</h1>
			<Tabs defaultActiveKey='1' id='tabs' type='line'>
				<TabPane key={1} tab='Protocolos' className='abas'>
					<Form action='' onSubmit={handleSubmit}>
						<div className='block'>
							<section>
								<label htmlFor="interacao">Tipo de interação:</label>
								<Select defaultValue="Selecione" required listItemHeight={1} listHeight={300}
									style={{ width: 300 }}
									options={[
										{
											label: 'Visitas (cód. 150)',
											options: [
												{ value: '150', label: "Acompanhamento" },
												{ value: '150', label: "Mobilização" },
												{ value: '150', label: "Ações diversas" },
											],
										},
                    				{
											label: 'Serviços (cód. 250)',
											options: [
												{ value: '250', label: "Orientações gerais" },
												{ value: '250', label: "Abertura de empresa" },
												{ value: '250', label: "Alteração cadastral" },
												{ value: '250', label: "Baixa de empresa" },
												{ value: '250', label: "CCMEI/Cartão CNPJ" },
												{ value: '250', label: "Conta GOV.BR" },
												{ value: '250', label: "DAS: Emissão/atualização" },
												{ value: '250', label: "DAS: Parcelamento/parcelas" },
												{ value: '250', label: "DASN: Declaração Anual do MEI" },		
												{ value: '250', label: "Desburocratização" },
												{ value: '250', label: "Orientação ao crédito"},
											],
										},
										{
											label: 'Documentos (cód. 350)',
											options: [
												{ value: '350', label: "Adesão em ambiente interno" },
											],
										},
										{
											label: 'Gerência (cód. 450)',
											options: [
												{ value: '450', label: "Consultorias e mentorias" },
											],
										},
										{
											label: 'Parcerias (cód. 550)',
											options: [
												{ value: '550', label: "Acompanhamento de especialistas" },
											],
										},
										{
											label: 'Eventos (cód. 650)',
											options: [
												{ value: '650', label: "Oficinas, palestras e outros" },
											],
										},
									]}
								/>
							</section>

							<section>
								<label htmlFor="nome">Pessoa:</label>
								<Input type='text' name='nome' id='nome' placeholder='Nome completo'/>
							</section>

							<section>
								<label htmlFor="nomeEmpresa">Empresa:</label>
								<Input type='text' name='nomeEmpre' id='nomeEmpre' placeholder='Nome fantasia'/>
							</section>

							<section>
								<label htmlFor="data">Data/hora do atendimento:</label>
								<DatePicker picker='date' name='data' id='data' placeholder='Selecione'/>
							</section>
							
						</div>
						<div className='block3'>
							<section>
								<label htmlFor="refere">Refere-se a:</label>
								<TextArea name="refere" id="refere" cols="50" rows="10" required/>
							</section>
							<section>
								<label htmlFor="obs">Observações:</label>
								<TextArea name="obs" id="obs" cols="50" rows="10"></TextArea>
							</section>
						</div>
						<div className='block4'>
						<section>
						<Button shape='round' id='btn-cadastrar'>Cadastrar</Button>
						</section>
						</div>
					</Form>
					{console.log(formProto)}
				</TabPane>
			</Tabs>
		</div>
	)
}


