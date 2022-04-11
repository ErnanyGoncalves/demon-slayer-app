import styled from 'styled-components'
import { ButtonsBar } from '../../layout/ButtonsBar';
import { DangerCardProps } from '../../types/DangerCard';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon'


const DangerCardWrapper = styled.div`
    background: var(--red-30);
    

    .modalHeader i{
        color: var(--red-50);
    } 
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

export const DangerCard = ({ title, text, fields }: DangerCardProps) => {
    return (
        <DangerCardWrapper className='modalStyle'>
            <div className='modalHeader'>
                <Icon name="cancel" size="109px" />
                <h2>{title}</h2>
            </div>
            <div className='missingFields'>
                <p>{text}</p>
                <ul>
                    {fields.map((field) => <li>{field}</li>)}
                </ul>
            </div>
            <ButtonsBar>
                <Button>
                    <Icon name='back' />
                    Back
                </Button>
            </ButtonsBar>
        </DangerCardWrapper>
    )
}