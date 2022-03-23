
import styled from 'styled-components'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { InfoBackstory } from '../components/InfoBackstory'
import { InfoShort } from '../components/InfoShort'

const InfoWrapper = styled.div`
    margin: 60px 0px;
    position: relative;
    .infoButtons{
        display:flex;
        justify-content:space-between;
        gap:94px;
        margin: 0 88px;        
        position: absolute;
        bottom: 0;
    }
    
`

export const Info = () => {
    return (
        <InfoWrapper>
            <InfoShort />
            <InfoBackstory />
            <div className='infoButtons'>
                <Button>
                    <Icon name='edit' />
                    Edit
                </Button>
                <Button>
                    <Icon name='trash' />
                    Delete
                </Button>
                <Button>
                    <Icon name='back' />
                    Back
                </Button>
            </div>
        </InfoWrapper>
    )
}