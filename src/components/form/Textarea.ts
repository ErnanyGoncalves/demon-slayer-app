import styled from "styled-components";

export const Textarea = styled.textarea`
        border: 2px solid var(--black); 
        box-sizing:border-box;
        padding: 14px;
        color: var(--black);
        font-size: 16px;
        background-color: var(--white);
        resize: none;
        font-weight: 400;
        font-family: "Open Sans", sans-serif;
        margin:2px;
        width:778px;
        height:192px;
        
        :focus{
            outline: 2px solid var(--red);
            transition: outline 0.1s linear;
        }        
`