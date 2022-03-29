import styled from 'styled-components'
import { Button } from './Button'
import { Icon } from './Icon'

type MessageTypeNames = "warning" | "danger";

// Adicionar botoes de opcoes dinamicamente via props

interface Props {
    title: string;
    text: string;
    messageType: MessageTypeNames;
}

const ModalCardWrapper = styled.div`
    box-sizing:border-box;
    display:inline-flex;
    border: 2px solid var(--black); 
    padding: 30px 67px;
    background-color: var(--white);
    box-shadow: 0 4px 4px 2px var(--black-30);
    width: 690px;
    height: 422px;


    &.warning{
        background: var(--brown-30) var(--white);
        .modalHeader i{
            color: var(--brown-50);
        }
        
    }
    &.danger{
        background: var(--red-30), var(--white);
        .modalHeader i{
            color: var(--red-50);
        }
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
        }
    }

    .infoButtons{
        display:flex;
        justify-content:center;
        gap:90px;
        margin: 0 86px;                
    }
`

const ModalCard = ({ messageType, title, text }: Props) => {
    return (
        <ModalCardWrapper className={messageType}>
            <div className='modalHeader'>
                <Icon name={messageType === "warning" ? "question" : "cancel"} size="109px" />
                <h2>{title}</h2>
            </div>
            {/* <p>{text}</p>
            <div className='infoButtons'>
                <Button>
                    <Icon name='confirm' />
                    Yes
                </Button>
                <Button>
                    <Icon name='cancel' />
                    No
                </Button>
            </div> */}
        </ModalCardWrapper>
    )
}

export default ModalCard