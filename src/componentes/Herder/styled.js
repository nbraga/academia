import styled from "styled-components";

export const AreaHeader = styled.div`
height: 80x; 
color: #fff;

.container{
    padding: 5px 20px; //Preenchimento
    display: flex; 
    align-items: center; //Alinhar itens 
    background-color: #F4D03F;
    border-radius: 40px;
}

    .logo{
        flex: 1; //isolar item para cada lado
        img{
            width: 80px; //Tamanho
        }
    }

    nav{
        ul{
            display: flex; //Ficar lado a lado
        }

            li{
                list-style: none; //Remover os indicadores
                margin-left: 20px; //Margem para esquerda

                a{

                    text-decoration: none; //Remover hiperlinks
                    color: white;

                    &:hover{
                        color: #F5BB00; //Passar o mouse por cima e criar um efeito
                    }

                }
            }

    }  
`;

