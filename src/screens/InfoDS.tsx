
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { InfoBackstory } from '../components/InfoBackstory'
import { InfoShort } from '../components/InfoShort'


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

export const InfoDS = () => {
    const [dsInfo, setDSInfo] = useState({
        "id": 0,
        "name": "",
        "age": 0,
        "gender": "",
        "backstory": "",
        "photo": "",
        "power": "",
        "emoji": ""
    });

    const params = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/demon-slayers/${params.id}`)
            .then(({ data }: any) => setDSInfo(data))
            .catch((err: any) => console.log(err));
    }, [params]);


    return (
        dsInfo && <InfoWrapper>
            <InfoShort name={dsInfo.name} age={dsInfo.age} power={dsInfo.power} emoji={dsInfo.emoji} photo={dsInfo.photo} gender={dsInfo.gender} />
            {dsInfo.backstory && <InfoBackstory backstory={dsInfo.backstory} />}
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