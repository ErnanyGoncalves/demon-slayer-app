import styled from "styled-components";

export const Button = styled.button`
        display:inline-flex;
        justify-content:space-between;
        align-items:center;
        border: 2px solid #010000; 
        box-sizing:border-box;
        gap: 1rem;
        padding: 14px;
        font-size: 1.5rem;
        background-color: #FFFFFF;
        font-weight: 500;
        font-family: "Alegreya SC", serif;
        margin:2px;

        cursor: pointer;    
        
        :hover,:focus{
            outline: 2px solid #EE1C25;
            transition: outline 0.1s ease-in;
        }        
`