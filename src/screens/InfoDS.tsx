import axios from 'axios'
import { is } from 'immer/dist/internal'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../components/common/Button'
import { Icon } from '../components/common/Icon'
import { InfoBackstory } from '../components/info/InfoBackstory'
import { InfoShort } from '../components/info/InfoShort'
import { Modal } from '../components/modal/Modal'
import { ButtonsBar } from '../layout/ButtonsBar'
import { Info } from '../types/Info'

const InfoWrapper = styled.div`
    margin: 60px 0px 58px 0;
    width:100%;
    .blank{
        height: 458px;
        margin-top: 48px;
        margin-bottom: 48px;
    }
    
`

export const InfoDS = () => {
    const [dsInfo, setDSInfo] = useState<Info>({
        "id": 0,
        "name": "",
        "age": 0,
        "gender": "",
        "photo": "",
        "power": "",
        "emoji": ""
    });

    //Estados: idle, loading, error, done
    const [isLoaded, setIsLoaded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const params = useParams();
    const navigate = useNavigate();
    const navigateToHome = () => navigate("/");
    const navigateToForm = (id: any) => navigate(`/${id}}/edit`);

    useEffect(() => {
        // axios.get(`http://localhost:3000/demon-slayers/999`)
        axios.get(`http://localhost:3000/demon-slayers/${params.id}`)
            .then(({ data }: any) => {
                setIsLoaded(true);
                setDSInfo(data)
            })
            .catch((err: any) => navigate('/')); // Quando não encontra um id
    }, [params.id]);

    const deleteCharacter = (id: any) => {
        axios.delete(`http://localhost:3000/demon-slayers/${id}`)
            .then(() => navigate('/'))
            .catch((err: any) => console.log(err));
    }


    return (
        isLoaded && dsInfo && <InfoWrapper>
            <InfoShort name={dsInfo.name} age={dsInfo.age} power={dsInfo.power} emoji={dsInfo.emoji} photo={dsInfo.photo} gender={dsInfo.gender} />
            {dsInfo.backstory ? <InfoBackstory backstory={dsInfo.backstory} /> : <div className='blank' />}
            <ButtonsBar>
                <Button onClick={() => navigateToForm(params.id)}>
                    <Icon name='edit' />
                    Edit
                </Button>
                <Button onClick={() => setIsOpen(true)}>
                    <Icon name='trash' />
                    Delete
                </Button>
                <Button onClick={navigateToHome}>
                    <Icon name='back' />
                    Back
                </Button>
            </ButtonsBar>
            {
                isOpen &&
                <Modal type="warning" modalContent={{ title: "Confirmation", text: `Are you sure you want to delete ${dsInfo.name}?`, setIsOpen: setIsOpen, actionFunction: deleteCharacter(params.id) }} />

                /* Modal de danger vai pra FORM!!! */
                // <Modal type="danger" modalContent={{ title: "Something is wrong", text: `You forgot to fill the following required fields:`, fields: ["Nome", "Idade", "Sexo"], setIsOpen: setIsOpen }} />
            }
        </InfoWrapper>
    )
}