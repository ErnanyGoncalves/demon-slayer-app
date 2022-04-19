import styled from "styled-components";

interface Props {
    size?: string;
    fill?: string;
}

/** @todo Criar talvez um prop pra esse wrapper (verificar se não tem um parecido, como o do icon); 
 * talvez passar esse wrapper para o componente de icon e no icon ter um switch q a partir de uma props é carregado o componente de icon desejado */

export const TesteWrapper = styled.div<Props>`
    display:flex;
    justify-content:center;
    align-items:center;
    width: ${props => props.size ? props.size : "2rem"};
    height: ${props => props.size ? props.size : "2rem"};

    svg{
        fill: var(--${props => props.fill ? props.fill : "black"});
        width:100%;
    }

`;