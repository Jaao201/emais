import './styleList.css'

export function List({adesao, nome, telefone, cpf, porte, local}) {
	return (
		<>
			<section className='pessoa-bloco1'>

				<button className='btn-filtrar'><img src='/src/images/icones/icone-filtrar.png' />FILTRAR POR</button>
				<input className='barra-pesquisa' type="text" placeholder='Pesquise um nome...' />

				<button className='btn-pesquisar'><img src='/src/images/icones/icone-pesquisa.png' />PESQUISAR</button>
				<section className='opcoes-filtro'>
					{/* <div><input name="agente" type="checkbox" />Agente responsável</div>
                        <div><input name="adesao" type="checkbox" />Adesão</div>
                        <div><input name="codigo" type="checkbox" />Código</div>
                        <div><input name="nome" type="checkbox" />Nome completo</div>
                        <div><input name="cpf" type="checkbox" />CPF</div>
                        <div><input name="rg" type="checkbox" />RG</div>
                        <div><input name="telefone" type="checkbox" />Telefone</div>
                        <div><input name="email" type="checkbox" />Email</div>
                        <div><input name="endereco-res" type="checkbox" />Endereço residencial</div> */}
				</section>
			</section>

			<section>
				<table>
					<thead>
						<th>ADESÃO</th>
						<th>NOME</th>
						<th>TELEFONE</th>
						<th>CPF</th>
						<th>PORTE</th>
						<th>BAIRRO/DISTRITO</th>
					</thead>
					<tbody>
						<tr>
							<td>{adesao}</td>
							<td>{nome}</td>
							<td>{telefone}</td>
							<td>{cpf}</td>
							<td>{porte}</td>
							<td>{local}</td>
						</tr>
					</tbody>
				</table>
			</section>
		</>
	)
}