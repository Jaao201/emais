//PROTOCOLO > IMPRESSÃO > PÁGINA

// import { useState } from 'react'
import { useState } from 'react'
import './protocoloImp.css'
import { render } from 'react-dom';

import { ProtocoloFolha } from '../../../components/protocolo-folha/protocoloFolha';

export function ImpProto() {
  
 

  return (
    <div className='container'>
      <ProtocoloFolha/>
    </div>
  )
}


