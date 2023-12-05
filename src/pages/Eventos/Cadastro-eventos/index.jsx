import '/src/components/formularios/formularios.css'
import { Link } from 'react-router-dom'
import { Input, Select } from 'antd'
import { Tabs } from 'antd';
import TabPane from 'rc-tabs/lib/TabPanelList/TabPane';

export function CadastroEvento() {
	return (
		<div className='container'>
			<div className='titulo'>
				<img src="/src/images/logo-eventos.png" id='icone-pagina' /><h1>CADASTRO DE EVENTO OU CURSO</h1>
				<Link to="/eventos"><button><img src="/src/images/icones/icone-lista.png" id='icone-lista' />LISTAGEM</button></Link>
			</div>

			<div className='form'>
				<form action="">
					<Tabs>

					<TabPane className='abas' tab='DADOS BÁSICOS' key={1}>

					{/* <h2>DADOS BÁSICOS</h2> */}
					<div className='bloco1'>
						<section>
							<label htmlFor="tipo">Tipo:</label>
							<Select defaultValue="Selecione"
                    style={{width: 150}}
                    options={[
						{ value: 'Curso', label: "Curso"},
                        { value: 'Evento', label: "Evento"},
					
                    ]}/>
						</section>
						<section>
							<label htmlFor="name">Nome do evento ou curso:</label>
							<Input type="text" id='name' required style={{width: 250}}/>
						</section>

						<section>
							<label htmlFor="tipo">Público-alvo:</label>
							<Select defaultValue="Selecione"
                    style={{width: 200}}
                    options={[
						{ value: 'Público geral', label: "Público geral"},
                        { value: 'Participantes do E+', label: "Participantes do E+"},
					
                    ]}/>
						</section>

						<section>
							<label htmlFor="eveEntidade">Entidade:</label>
							
							<Select defaultValue="Selecione"
                    style={{width: 200}}
                    options={[
						{ value: 'Prefeitura de Jucás', label: "Prefeitura de Jucás"},
                        { value: 'SEBRAE', label: "SEBRAE"},
                        { value: 'SENAC', label: "SENAC"},
					
                    ]}/>
						</section>

						<section>
							<label htmlFor="eveFacilitador">Facilitador/Instrutor:</label>
							<Input type="text" placeholder='Nome completo' />
						</section>

						<section>
							<label htmlFor="eveModalidade">Modalidade:</label>
						
							<Select defaultValue="Selecione"
                    style={{width: 150}}
                    options={[
						{ value: 'Presencial', label: "Presencial"},
                        { value: 'Online', label: "Online"},
					
                    ]}/>
						</section>

					</div>
					</TabPane>
					<TabPane className='abas' tab='DADOS TEMPORAIS' key={2}>

					

					<div className='bloco1'>
						<section>
							<label htmlFor="eveInicio">Data de início:</label>
							<Input type="date" />
						</section>

						<section>
							<label htmlFor="eveTermino">Data de término:</label>
							<Input type="date" />
						</section>

						<section>
							<label htmlFor="eveCarga">Carga horária:</label>
							<Input type="text" />
						</section>

						<section>
							<label htmlFor="eveTurnos">Turno(s):</label>
							
							<Select defaultValue="Selecione"
                    style={{width: 200}}
                    options={[
						{ value: 'Manhã', label: "Manhã"},
                        { value: 'Tarde', label: "Tarde"},
                        { value: 'Noite', label: "Noite"},
                        { value: 'Manhã e tarde', label: "Manhã e tarde"},
                        { value: 'Manhã e noite', label: "Manhã e noite"},
                        { value: 'Tarde e noite', label: "Tarde e noite"},
					
                    ]}/>
						</section>
					</div>
					</TabPane>
					<TabPane className='abas' tab='DADOS ADICIONAIS' key={3}>


				
					<div className='bloco1'>
						<section>
							<label htmlFor="eveCategoria">Categoria do evento:</label>
							<Select defaultValue="Selecione"
                    style={{width: 250}}
                    options={[
						{ value: 'Empreendedorismo', label: "Empreendedorismo"},
                        { value: 'Finanças', label: "Finanças"},
                        { value: 'Gestão de Custos', label: "Gestão de Custos"},
                        { value: 'Gestão Financeira', label: "Gestão Financeira"},
                        { value: 'Plano de Negócios', label: "Plano de Negócios"},
                        { value: 'Precificação', label: "Precificação"},
                        { value: 'Qualidade Profissional', label: "Qualidade Profissional"},
					
                    ]}/>
						</section>

						<section>
							<label htmlFor="categoria">Valor de investimento:</label>
							<input type="text" placeholder='R$' />
						</section>
					</div>
					</TabPane>

					<section className='btn-cadastrar'>
						<button><img src="/src/images/icones/icone-cadastrar.png"/> SALVAR CADASTRO</button>
					</section>
					</Tabs>
				</form>
			</div>

		</div>
	)

}