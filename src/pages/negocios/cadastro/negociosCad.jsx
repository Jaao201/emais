//NEGÓCIOS > CADASTRO > PÁGINA
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Input, Select } from 'antd'

import { Tabs } from 'antd';
import TabPane from 'rc-tabs/lib/TabPanelList/TabPane';

import '/src/components/formularios/formularios.css'

export function CadNegocios() {
	return (
		<div className='container'>
			<div className='titulo'>
				<img src="/src/images/logo-negocios.png" id='icone-pagina' /><h1>CADASTRAR NEGÓCIO</h1>
				<Link to="/negocios"><button><img src="/src/images/icones/icone-lista.png" id='icone-lista' />LISTAGEM</button></Link>
			</div>
			<div className='form'><form action="">
				<Tabs defaultActiveKey='1' id='tabs'>

				<TabPane className='abas' tab='Dados de Reconhecimento' key={1}>


				{/* <h2 id='tituloCadastro'>DADOS DE RECONHECIMENTO</h2> */}
				<div className='bloco1'>
					<section>

						<label htmlFor="razaoSocial">Razão social:</label>
						<Input type="text" name="" id="razaoSocial" required placeholder='Ex: Maria da Silva' />
					</section>

					<section >
						<label htmlFor="nomeFantasia">Nome fantasia:</label>
						<Input type="text" id='nomeFantasia' placeholder='Ex: Ateliê da Maria' />
					</section>

					<section >
						<label htmlFor="responsavel">Responsável:</label>
						<Input type="text" id='responsavel' required />
					</section>

					<section >
						<label htmlFor="segmento">Segmento:</label>
						<Input type="text" id='segmento' required placeholder='Ex: Artesanato' />
					</section>

					<section>
						<label htmlFor="atvPrincipal">Atividade principal:</label>
						<Input type="text" name="" id="atvPrincipal" required />
					</section>

					<section>
						<label htmlFor="atvSecundaria">Atividade secundária:</label>
						<Input type="text" name="" id="atvSecundaria" placeholder='Caso haja...' />
					</section>
				</div>
				</TabPane>
				<TabPane className='abas' tab='Dados Numéricos' key={2}>

				{/* <h2 id='tituloCadastro'>DADOS NUMÉRICOS</h2> */}
				<div className='bloco2'>
					<section>
						<label htmlFor="cnpj">CNPJ:</label>
						<Input type="number" name="" id="cnpj" placeholder='xx.xxx.xxx/xxxx-xx' />
					</section>

					<section>
						<label htmlFor="datacnpj">Inscrição no CNPJ:</label>
						<Input type="date" name="" id="datacpnj" />
					</section>

					<section>
						<label htmlFor="inscriEstadual">Inscrição Estadual:</label>
						<Input type="number" name="" id="inscriEstadual" />
					</section>

					<section>
						<label htmlFor="inscriMunicipal">Inscrição Municipal:</label>
						<Input type="number" name="" id="inscriMunicipal" />
					</section>

					<section>
						<label htmlFor="telefoneCom">Telefone comercial:</label>
						<Input type="text" id='telefoneCom' placeholder='(xx) 9 xxxx-xxxx' required />
					</section>

					<section>
						<label htmlFor="telefoneWhats">Telefone (Whatsapp):</label>
						<Input type="text" name="" id="telefoneWhats" placeholder='(xx) 9 xxxx-xxxx' />
					</section>
				</div>
				</TabPane>
				<TabPane className='abas' tab='Logradouro Comercial' key={3}>


				{/* <h2 id='tituloCadastro'>DADOS DO LOGRADOURO COMERCIAL</h2> */}
				<div className='bloco3'>
					<section>
						<label htmlFor="cep">CEP:</label>
						<Input type="text" name="" id="cep" placeholder="xxxxx-xxx" />
					</section>

					<section>
						<label htmlFor="rua">Rua/Avenida:</label>
						<Input type="text" name="" id="rua" required/>
					</section>

					<section>
						<label htmlFor="complemento">Complemento:</label>
						<Input type="text" name="" id="complemento" />
					</section>

					<section>
						<label htmlFor="n">Número:</label>
						<Input type="text" name="" id="n" />
					</section>

					<section>
						<label htmlFor="bairro">Bairro/Distrito:</label>
						
						<Select defaultValue="Selecione"
                    style={{width: 200}}
                    options={[
						{ value: 'canafistula', label: "Canafístula"},
                        { value: 'mel', label: "Mel"},
                        { value: 'montenegro', label: "Montenegro"},
                        { value: 'pocogrande', label: "Poço Grande"},
                        { value: 'sao pedro', label: "São Pedro do Norte"},
                        { value: 'alto da paz', label: "Sede: Alto da Paz"},
                        { value: 'alto do tó', label: "Sede: Alto do Tó"},
                        { value: 'centro', label: "Sede: Centro"},
                        { value: 'coco verde', label: "Sede: Coco Verde"},
                        { value: 'nossa senhora de fatima', label: "Sede: Nossa Senhora de Fátima"},
                        { value: 'padre manoel gomes', label: "Sede: Padre Manoel Lemos Braga"},
                        { value: 'planalto', label: "Sede: Planalto"},
                        { value: 'sagrada familia', label: "Sede: Sagrada Família"},
                        { value: 'sao jose', label: "Sede: São José"},
                        { value: 'sao mateus', label: "Sede: São Mateus"},
						
                    ]}/>
					</section>

					<section>
						<label htmlFor="cidade">Cidade:</label>
						<input type="text" name='' id="cidade" />
					</section>
				</div>
					</TabPane>
					</Tabs>
				<div className='btn-cadastrar'><button><img src="/src/images/icones/icone-cadastrar.png" />SALVAR CADASTRO</button></div>
			</form>
			</div>
		</div>
	)

}