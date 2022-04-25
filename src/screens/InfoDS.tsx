import axios from 'axios'
import {  useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Loading } from '../components/common'
import { Button } from '../components/common/Button'
import { Icon } from '../components/common/Icon'
import { InfoBackstory, InfoShort } from '../components/info/index'
import { Modal } from '../components/modal/Modal'
import { WarningCard } from '../components/modal/WarningCard'
import { useFetchCharacter } from '../hooks'
import { ButtonsBar } from '../layout/ButtonsBar'

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

    const [open, setOpen] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    const { dsInfo, loading, error } = useFetchCharacter(params.id);

    const navigateToHome = () => navigate("/");
    const navigateToForm = (id: number) => navigate(`/${id}/edit`);

    const deleteCharacter = (id: any) => {
        axios.delete(`http://localhost:3000/demon-slayers/${id}`)
            .then(() => navigate('/'))
            .catch((err: any) => console.log(err));
    }

    return (
        <>
            {!loading && dsInfo && <InfoWrapper>
                <InfoShort name={dsInfo.name} age={dsInfo.age} power={dsInfo.power} emoji={dsInfo.emoji} photo={dsInfo.photo} gender={dsInfo.gender} />
                {dsInfo.backstory ? <InfoBackstory backstory={dsInfo.backstory} /> : <div className='blank' />}
                <ButtonsBar>
                    <Button onClick={() => navigateToForm(Number(params.id))}>
                        <Icon name='edit' />
                        Edit
                    </Button>
                    <Button onClick={() => setOpen(true)}>
                        <Icon name='trash' />
                        Delete
                    </Button>
                    <Button onClick={navigateToHome}>
                        <Icon name='back' />
                        Back
                    </Button>
                </ButtonsBar>
                <Modal open={open}>
                    <WarningCard title="Confirmation" text={`Are you sure you want to delete ${dsInfo.name}?`} setOpen={setOpen} actionFunction={() => deleteCharacter(params.id)} />
                </Modal>
            </InfoWrapper>}
            {loading && <Loading>Loading...</Loading>}
        </>
    )
}