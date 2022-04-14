import styled from 'styled-components'
import { ButtonsBar } from '../../layout/ButtonsBar';
import { WarningCardProps } from '../../types/WarningCard';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon'


const WarningCardWrapper = styled.div`
    
    background: var(--brown-30);
    .modalHeader i{
        fill: var(--brown-50);
    }   
`

export const WarningCard = ({ title, text, setOpen, actionFunction }: WarningCardProps) => {
    return (
        <WarningCardWrapper className='modalStyle'>
            <div className='modalHeader'>
                <Icon name="question" size="109px" />
                <h2>{title}</h2>
            </div>
            <p>{text}</p>
            <ButtonsBar>
                <Button onClick={actionFunction}>
                    <Icon name='confirm' />
                    Yes
                </Button>
                <Button onClick={() => setOpen(false)}>
                    <Icon name='cancel' />
                    No
                </Button>
            </ButtonsBar>
        </WarningCardWrapper>
    )
}