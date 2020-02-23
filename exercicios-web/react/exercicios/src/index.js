import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="David" sobrenome="Bastos">
            <Filho nome="Jonas" />
            <Filho nome="David" />
            <Filho nome="Bacelar" />
            
        </Pai>
    </div>
, document.getElementById('root'))

