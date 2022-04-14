import styled from 'styled-components'

export const List = styled.select`             

        border: 2px solid var(--black); 
        box-sizing:border-box;        
        padding: 18px 14px;
        font-size: 16px;
        cursor: pointer;
        background-color: var(--white);
        font-family: "Open Sans", sans-serif;
        width: 100%;
        height: 64px;
        margin: 2px;
       
        
        :focus{
            outline: 2px solid var(--red);
            transition: outline 0.1s linear;
        }

`;