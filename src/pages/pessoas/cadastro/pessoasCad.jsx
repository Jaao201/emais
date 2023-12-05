//PESSOAS > CADASTRO > PÁGINA
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Divider, Input } from 'antd'
import './pessoasCad.css'
import { Select, Button} from 'antd'
import { Tabs } from 'antd';
import { TabPane } from 'rc-tabs/lib/TabPanelList/TabPane';




export function CadPessoas() {
	// const handleChange = (value: string) => {
	//     console.log(`selected ${value}`);
	//   };
	return (
		<div className='container'>
			<div className='titulo'>
				<img src="/src/images/logo-pessoas.png" id='icone-pagina'/><h1>Cadastrar Pessoa</h1>
				<Link to="/pessoas"><Button shape='round'>Listagem</Button></Link></div>

			<form className='form' action="" method='POST'>
				<Tabs defaultActiveKey='1' id='tabs' type='line'>
					<TabPane className='abas' tab='Dados de cadastro' key={1}>
						<div className='bloco1'>
							<section>
								<label htmlFor="date">Data de cadastro:</label>
								<Input type='date' name='date' id='date' />
							</section>

							<section>
								<label htmlFor="date">Agente responsável:</label>
								<Select defaultValue="Selecione" required
									style={{ width: 270 }}
									options={[
										{ value: 'fundamental-incompleto', label: "Luana Ferreira" },
										{ value: 'fundamental-completo', label: "Jorge Alysson" },
									]} />
							</section>
							<section>
								<label htmlFor="date">Essa pessoa faz parte do Empreenda Mais?</label>
								<Select defaultValue="Selecione" required
									style={{ width: 270 }}
									options={[
										{ value: 'Sim', label: "Sim" },
										{ value: 'Não', label: "Não" },
									
									]} />
							</section>


						</div>
						<div className='btn-cadastrar'>
							<Button shape='round'>Salvar cadastro</Button>
						</div>
					</TabPane>
					<TabPane className='abas' tab='Dados pessoais' key={2}>

						<div className='bloco2'>
							<section>
								<label htmlFor="nome">Nome completo: *</label>
								<Input type="text" name="" id="nome" placeholder='Nome completo...' required />
							</section>

							<section>
								<label htmlFor="nomeSocial">Nome social:</label>
								<Input type="text" name="" id="nomeSocial" placeholder='Se houver...' />
							</section>

							<section>
								<label htmlFor="cpf">CPF: *</label>
								<Input type="text" id="cpf" maxLength={14} placeholder="xxx.xxx.xxx-xx" required />

							</section>
							<section>
								<label htmlFor="rg">RG:</label>
								<Input type="number" id="rg" placeholder='Registro Geral' required />

							</section>
							<section>
								<label htmlFor="email">Email:</label>
								<Input type="email" name="" id="email" placeholder='exemplo@exemplo.com'/>

							</section>
							<section>
								<label htmlFor="telefone">Telefone pessoal:</label>
								<Input type="number" placeholder='(xx) x xxxx-xxxx' id='telefone' />
							</section>



						</div>


						<div className='bloco2'>
							<section>
								<label htmlFor="situacao">Situação:</label>

								<Select defaultValue="Selecione"
									style={{ width: 250 }}
									options={[
										{ value: 'formal', label: "Empreendedor(a) formal" },
										{ value: 'informal', label: "Empreendedor(a) informal" },
										{ value: 'empregado', label: "Empregado(a)" },
										{ value: 'desempregado', label: "Desempregado(a)" },
										{ value: 'aposentado', label: "Aposentado(a)" },
										{ value: 'agricultor', label: "agricultor(a)" },


									]} />
							</section>
							<section>
								<label htmlFor="escola">Escolaridade</label>
								<Select defaultValue="Selecione"
									style={{ width: 220 }}
									options={[
										{ value: 'fundamental-incompleto', label: "Fundamental incompleto" },
										{ value: 'fundamental-completo', label: "Fundamental completo" },
										{ value: 'medio-imcompleto', label: "Médio imcompleto" },
										{ value: 'medio-completo', label: "Médio completo" },
										{ value: 'superior-incompleto', label: "Superior incompleto" },
										{ value: 'superior-completo', label: "Superior completo" },

									]} />
							</section>
							<section>
								<label htmlFor="renda">Renda familiar</label>
								<Select defaultValue="Selecione a renda"
									style={{ width: 250 }}
									options={[
										{ value: 'Menos que R$ 1.000,00', label: "Menos que R$ 1.000,00" },
										{ value: 'Entre R$1.001,00 - R$2.500,00', label: "Entre R$1.001,00 - R$2.500,00" },
										{ value: 'Entre R$2.501,00 - R$5.000,00', label: "Entre R$2.501,00 - R$5.000,00" },
										{ value: 'Mais que R$5.000,00', label: "Mais que R$5.000,00" },

									]} />
							</section>
							<section>
								<label htmlFor="">Deficiência:</label>
								<Select defaultValue="Selecione"
									style={{ width: 200 }}
									options={[
										{ value: 'nenhuma', label: "Nenhuma" },
										{ value: 'mental', label: "Mental" },
										{ value: 'auditiva', label: "Auditiva" },
										{ value: 'visual', label: "Visual" },
										{ value: 'motora', label: "Motora" },
										{ value: 'multiplas', label: "Múltiplas" },
										{ value: 'nao declarada', label: "Não declarada" },

									]} />
							</section>
							<section>
								<label htmlFor="">Recomenda o programa?</label>
								<Select defaultValue="Selecione"
									style={{ width: 200 }}
									options={[
										{ value: 'sim', label: "Sim, recomendo" },
										{ value: 'nao', label: "Não" },
										{ value: 'talvez', label: "Talvez" },

									]} />
							</section>
						</div>
						<div className='btn-cadastrar'>
						<Button shape='round'>Salvar cadastro</Button>
						</div>
					</TabPane>
					<TabPane className='abas' tab='Logradouro residencial' key={3}>
						<div className='bloco3'>
							<section>
								<label htmlFor="cep">CEP:</label>
								<Input placeholder='00000-000' id='cep' />
							</section>
							<section>
								<label htmlFor="rua">Rua/Avenida:</label>
								<Input id='rua' required />
							</section>
							<section>
								<label htmlFor="complemento">Complemento:</label>
								<Input id='complemento' placeholder='Apartamento, prédio, casa...' />
							</section>
							<section>
								<label htmlFor="n">Número:</label>
								<Input type='number' id='n' required />
							</section>
							<section>
								<label htmlFor="">Bairro/Distrito:</label>
								<Select defaultValue="Selecione" required
									style={{ width: 300 }}
									options={[
										{ value: 'mel', label: "Mel" },
										{ value: 'sao pedro', label: "São Pedro do Norte" },
										{ value: 'alto da paz', label: "Sede: Alto da Paz" },
										{ value: 'alto do to', label: "Sede: Alto do Tó" },
										{ value: 'centro', label: "Sede: Centro" },
										{ value: 'coco verde', label: "Sede: Coco Verde" },
										{ value: 'ns de fatima', label: "Sede: Nossa Senhora de Fátima" },
										{ value: 'sagrada familia', label: "Sede: Sagrada Família" },
										{ value: 'sao jose', label: "Sede: São José" },
										{ value: 'sao mateus', label: "Sede: São Mateus" },
										{ value: 'pm lemos braga', label: "Sede: Padre Manoel Lemos Braga" },

									]} />
							</section>

						</div>
						<div className='bloco3'>
							<section>
								<label htmlFor="cidade">Cidade:</label>
								<Input id='cidade' />
							</section>
							<section>
								<label htmlFor="estado">Estado:</label>
								<Input id='estado' />
							</section>
						</div>
						<div className='btn-cadastrar'>
						<Button shape='round'>Salvar cadastro</Button>
							</div>
					</TabPane>
				</Tabs>
			</form>
		</div>
	)
}