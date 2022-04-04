import { Fragment } from 'react';
import styled from 'styled-components'
import { Button } from '../Button';
import { Icon } from '../Icon'
import { ModalCardWrapper } from './ModalCardWrapper'


const WarningCardWrapper = styled.div`
    
    background: var(--brown-30);
    .modalHeader i{
        color: var(--brown-50);
    }   
`

interface Props {
    title: string;
    text: string;
}

export const WarningCard = ({ title, text }: Props) => {
    return (
        <ModalCardWrapper>
            <WarningCardWrapper className='modalStyle'>
                <div className='modalHeader'>
                    <Icon name="question" size="109px" />
                    <h2>{title}</h2>
                </div>
                <p>{text}</p>
                <div className='infoButtons'>
                    <Button>
                        <Icon name='confirm' />
                        Yes
                    </Button>
                    <Button>
                        <Icon name='cancel' />
                        No
                    </Button>
                </div>
            </WarningCardWrapper>
        </ModalCardWrapper>
    )
}