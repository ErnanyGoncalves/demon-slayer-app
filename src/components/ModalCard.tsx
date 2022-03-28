import styled from 'styled-components'
import { Button } from './Button'
import { Icon } from './Icon'

const ModalCardWrapper = styled.div`
    box-sizing:border-box;
    display:inline-flex;
    border: 2px solid var(--black); 
    padding: 30px 67px;
    background-color: var(--white);
    box-shadow: 0 4px 4px 2px var(--black-30);
    width: 690px;
    height: 422px;
`

const ModalCard = () => {
    return (
        <ModalCardWrapper>
            <div>
                <Icon />
                <h2></h2>
            </div>
            <p></p>
            <Button>
                <Icon />
                Back
            </Button>
        </ModalCardWrapper>
    )
}

export default ModalCard