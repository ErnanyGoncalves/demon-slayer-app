
import styled from 'styled-components'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { InfoBackstory } from '../components/InfoBackstory'
import { InfoShort } from '../components/InfoShort'


const infoMock = {
    "name": "Kyojuro Rengoku",
    "age": 20,
    "gender": "Male",
    "backstory": "Kyojuro was greatly enthusiastic in regard to his duties as a Hashira, and often came across as cheerfully eccentric. He was amiable, pure of heart, and boasted extraordinary technique and swordsmanship stemming from strict practice and discipline. He was an honorable warrior who adhered to his code of morals and principles that was instilled into him by his mother at a young age—the most significant being his belief that those who were born strong have a duty to protect the weak.",
    "photo": "https://nerdhits.com.br/wp-content/uploads/2021/10/Kyojuro-Rengoku-Hashira-Demon-Slayer.jpg",
    "power": "Fire",
    "theme": "fire",
    "emoji": "🔥"
};

const InfoWrapper = styled.div`
    margin: 60px 0px 58px 0;
    position: relative;
    width:100%;
    .infoButtons{
        display:flex;
        justify-content:center;
        gap:90px;
        margin: 0 86px;        
        position: absolute;
        bottom: 0;
    }
    
`

export const Info = () => {
    return (
        <InfoWrapper>
            <InfoShort name={infoMock.name} age={infoMock.age} power={infoMock.power} emoji={infoMock.emoji} photo={infoMock.photo} gender={infoMock.gender} />
            {infoMock.backstory && <InfoBackstory backstory={infoMock.backstory} />}
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