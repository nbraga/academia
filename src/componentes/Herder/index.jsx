import React from 'react'
import {Link} from 'react-router-dom'

import {AreaHeader} from './styled'

export default function Header(){
    return(

        <AreaHeader>
        <div className="container">
            <div className= "logo">
                <img src="../../../icone.png" />
            </div>

                <nav>
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/config">Configurações</Link></li>
                        <li><Link to="/recovery">Recuperar Usuário</Link></li>
                        <li><Link to="/logout">Sair</Link></li>
                    </ul>
                </nav>

        </div>
        </AreaHeader>
    )
}