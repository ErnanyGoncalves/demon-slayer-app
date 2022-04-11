import styled from "styled-components";

export const ModalCardWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--white);
    width: 690px;
    height: 422px;
    .modalStyle{
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        box-sizing:border-box;
        border: 2px solid var(--black); 
        padding: 30px 67px;
        box-shadow: 0 4px 4px 2px var(--black-30);
        
        height: 100%;

        p{
            font-family: "Open Sans", sans-serif;
            text-align: center;
        }


        .modalHeader{
            display:flex;
            align-items: center;
            gap: 50px;
            height: 109px;

            h2{
                font-weight: 500;
                margin: 0;            
                width: 234px;
                height: 98px;
                color: var(--black);
                text-align:center;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`