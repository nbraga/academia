import React from "react";
import {ContainerPage, TitlePage} from '../../componentes/Main'
import {AreaRecovery} from './styled'

import TextField from '@material-ui/core/TextField/TextField'
import Button from '@material-ui/core/Button/Button'

const Page = () => {
    return (
        <AreaRecovery>
        
        <ContainerPage>
        <TitlePage>
            <div className="container">
                <div className= "logo">
                    <img src="../../../DANONE_LOGO 1.svg" />
                </div>

                <div className="EditarPerfil">

                
                    <div className= "Cacheada">
                        <img src="../../../Avatar.svg" />
                    </div>

                    <form noValidate autoComplete="off">
                    <TextField className="Campos" size="small" id="outlined-basic" label="Nome" variant="outlined" />
                    </form>
                    <form noValidate autoComplete="off">
                    <TextField className="Campos" size="small" id="outlined-basic" label="E-mail" variant="outlined" />
                    </form>
                    <form noValidate autoComplete="off">
                    <TextField className="Campos" size="small" id="outlined-basic" label="Unidade" variant="outlined" />
                    </form>
                    
                    <Button className="btEditar" size="large" variant="contained" color="primary">
                    Editar Perfil
                    </Button>
                
                </div>

            </div>

            <div className= "FundoAzul">
                <img src="../../../Mask Group.svg" />
            </div>
            </TitlePage>
        </ContainerPage>
        </AreaRecovery>
    )
}

export default Page;