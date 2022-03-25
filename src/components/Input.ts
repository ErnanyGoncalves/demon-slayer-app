import styled from "styled-components";

interface Props{
    width: string;
}

/** Achar uma forma de colocar icone no input (não obrigatório)  */
export const Input = styled.input<Props>`       
        border: 2px solid var(--black); 
        box-sizing:border-box;        
        padding: 18px 14px;
        font-size: 16px;
        background-color: var(--white);
        font-family: "Open Sans", sans-serif;
        width: ${props => props.width};
        height: 64px;
        margin:2px;

        ::placeholder{
            color: var(--black-50);
            font-style: italic;
        }
         
        
        :focus{
            outline: 2px solid var(--red);
            transition: outline 0.1s linear;
        }
`