import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/common/Button";
import { Icon } from "../components/common/Icon";
import { FormGrid, PageHeader } from '../components/form/index'
import { DangerCard } from "../components/modal/DangerCard";
import { Modal } from "../components/modal/Modal";
import { WarningCard } from "../components/modal/WarningCard";
import { ButtonsBar } from "../layout/ButtonsBar";
import { Info } from "../types/Info";


const FormDSWrapper = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    gap: 32px;
  `;


export const FormDS = () => {

  const [editMode, setEditMode] = useState(false);
  const [open, setOpen] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    if (editMode) setOpen(true);
    else newCharacter();
  }
  const navigateToHome = () => navigate("/");

  const [dsInfo, setDSInfo] = useState<Info>({
    "id": 0,
    "name": "",
    "age": "",
    "gender": "",
    "theme": "",
    "photo": "",
    "power": "",
    "emoji": "",
    "backstory": ""
  });


  const newCharacter = () => {
    
    console.log("DSINFO",dsInfo);
    axios.post(`http://localhost:3000/demon-slayers`, dsInfo)
      .then(() => navigate('/'))
      .catch((err: any) => console.log(err));
  }

  const editCharacter = (id: any) => {
    axios.put(`http://localhost:3000/demon-slayers/${id}`, dsInfo)
      .then(() => navigate('/'))
      .catch((err: any) => console.log(err));
  }

  useEffect(() => {
    setDSInfo({ ...dsInfo, ["id"]: Date.now() });
    if (location.pathname.search(/\/[0-9]+\/edit\/?/) != -1) {
      if (params.id != null) {
        axios.get(`http://localhost:3000/demon-slayers/${params.id}`)
          .then(({ data }: any) => {
            setDSInfo(data);
            setEditMode(true);
          })
          .catch((err: any) => navigate('/')); // Quando não encontra um id
      }
    }
  }, [location.pathname, params.id]);

  return (
    <FormDSWrapper>
      {editMode ? <PageHeader highlight="Edit" title={dsInfo.name + ":"} /> : <PageHeader highlight="New" title="Demon Slayer:" />}
      <form onSubmit={handleSubmit}>
        <FormGrid setDSInfo={setDSInfo} dsInfo={dsInfo} />
        <ButtonsBar>
          <Button type="submit">
            <Icon name='confirm' />
            Confirm
          </Button>
          <Button onClick={navigateToHome}>
            <Icon name='back' />
            Cancel
          </Button>
        </ButtonsBar>

        {
          editMode &&
          <Modal open={open}>
                <WarningCard title="Confirmation" text={`Are you sure you want to edit the information of ${dsInfo.name}?`} setOpen={setOpen} actionFunction={() => editCharacter(params.id)} />
          </Modal>
        }
        {!editMode &&          
          <Modal open={open}>
                {/**@TODO Preparar lista de campos zuados do form pra passar em fields */}
                <DangerCard title="Something is wrong" text={`You forgot to fill the following required fields:`} fields={["Nome", "Idade", "Sexo"]} setOpen={setOpen} />
          </Modal>
        }
        
      </form>
    </FormDSWrapper>
  )
}