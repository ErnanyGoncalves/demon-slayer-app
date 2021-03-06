import styled from "styled-components";
import { InputProps } from "../../types/Input";

export const Input = styled.input<InputProps>`       
        border: 2px solid var(--black); 
        box-sizing:border-box;        
        padding: 18px 14px;
        font-size: 16px;
        color:var(--black);
        background-color: var(--white);
        font-family: "Open Sans", sans-serif;
        width: 100%;
        height: 64px;
        margin:2px;

        ::placeholder{
            color: var(--black-50);
            font-style: italic;
        }

        & svg{
            width: 2rem;
            height: 2rem;
        }
         
        
        :focus{
            outline: 2px solid var(--red);
            transition: outline 0.1s linear;
        }
`