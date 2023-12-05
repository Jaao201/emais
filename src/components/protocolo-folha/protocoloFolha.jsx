import './protocoloFolha.css'
import { GlobalVariables } from '../../global'
import { useState } from 'react'


export function ProtocoloFolha(){
    
  const [proto, setProto] = useState(GlobalVariables.pessoa)

      function show(){
        setProto(GlobalVariables.pessoa)
      }

  

    return(
        <>
         <h1 id='ptAtendimento'>PROTOCOLO DE ATENDIMENTO</h1>
  
  <div className='center'>
  <div className='container2'>
        <div className='dadosProtocolo'>
            <form action="">
              <section>
              <label htmlFor="">Nome da pessoa: <span>{proto.nome}</span> </label>

              </section>
              <section>
                <label htmlFor="">Nome da empresa: <span>{proto.NomedaEmpresa}</span> </label>
              </section>
              <section>
                <label htmlFor="">Data do atendimento: <span>{proto.data}</span> </label>
              </section>
              <section>
                <label htmlFor="">Refere-se a: <span>{proto.refere}</span></label>
              </section>
              <section>
                <label htmlFor="">Observações: <span>{proto.obs}</span></label>
              </section>
            </form>

        </div>
        <div className='dadosProtocolo2'>
              <form action="">
                <section>
                  <label htmlFor="">Numero do protocolo: <span>{proto.protocolo}</span></label>
                </section>
                <section>
                  <label htmlFor="">Recebido em: <span>{proto.data}</span></label>
                </section>
              </form>
        </div>
      
  </div>
  </div>
        
        <div className='assinatura'>
          <section>
              <label htmlFor="">Assinatura: ___________________________________________</label>
            </section> 
          </div>

          
              <h1 id='viaCliente'>VIA DO CLIENTE</h1>
         
         <div className='center'>
         <div className='DoCliente'>
            <section>

            </section>

              <section>
                <label htmlFor="">Nº______________</label>
              </section>
              <section>
                <label htmlFor="">Assinatura: ________________________________________________________</label>
              </section>

              <section>
                <label htmlFor="">Data___/___/____</label>
              </section>

          </div>
          <div>
            
          </div>
         </div>
       
        </>

    )
}