import styled from 'styled-components'
import { ButtonsBar } from '../../layout';
import { DangerCardProps } from '../../types';
import { Button, Icon } from '../common';

const DangerCardWrapper = styled.div`
    background: var(--red-30);
    
    .missingFields{
        height:158px;
        ul{
            width: 335px;
            margin: 16px auto;
            li{
                font-family: "Open sans", sans-serif;
            }
        }
    }
`

export const DangerCard = ({ title, text, fields, setOpen }: DangerCardProps) => {
    return (
        <DangerCardWrapper className='modalStyle'>
            <div className='modalHeader'>
            <Icon name="cancel" size="109px" fill="red-50" />
                <h2>{title}</h2>
            </div>
            <div className='missingFields'>
                <p>{text}</p>
                <ul>
                    {fields.map((field) => <li>{field}</li>)}
                </ul>
            </div>
            <ButtonsBar>
                <Button onClick={() => setOpen(false)}>
                    <Icon name='back' />
                    Back
                </Button>                
            </ButtonsBar>
        </DangerCardWrapper>
    )
}