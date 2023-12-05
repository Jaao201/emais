//INÍCIO > PÁGINA
import { List } from '../../components/listas'
import { Tabs } from 'antd';
import TabPane from 'rc-tabs/lib/TabPanelList/TabPane';

export function Home() {
	return (
		<div className='container'>
			<Tabs defaultActiveKey='1' centered type='card'>
				
				<TabPane className='abas' tab='Pesquisar'  key={1}>
					<List/>
				</TabPane>
				
				<TabPane className='abas' tab='Estatísticas' key={2}>
				<div className="abasConteudo" id="Estatisticas" >
					
				</div>
				</TabPane>

				<TabPane className='abas' tab='Imprimir' key={3}>
				</TabPane>
			</Tabs>
		</div>
	)
}


