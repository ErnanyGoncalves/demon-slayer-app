import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/common/Button";
import { Icon } from "../components/common/Icon";
import { FormGrid, PageHeader } from '../components/form/_index'
import { Modal } from "../components/modal/Modal";
import { ButtonsBar } from "../layout/ButtonsBar";
import { Info } from "../types/Info";

export const FormDS = () => {

  const FormDSWrapper = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    gap: 32px;
  `;

  const [editMode, setEditMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (ev:any) => {
    ev.preventDefault();
    if(editMode) setIsOpen(true);
    else newCharacter();
  }
  const navigateToHome = () => navigate("/");

  const [dsInfo, setDSInfo] = useState<Info>({
    "id": 1000,
    "name": "AAAA",
    "age": 60,
    "gender": "Male",
    "theme": "fire",
    "photo": "https://www.seekpng.com/png/detail/27-270295_kirby-super-star-ultra-fuego-fire-kirby-super.png",
    "power": "Fire",
    "emoji": "🎈",
    "backstory": "Poi"
  });

  // Temporário!
  const dsInfo2 = {
    "id": 1000,
    "name": "Kirby",
    "age": 15,
    "gender": "Male",
    "theme": "water",
    "photo": "https://i.pinimg.com/originals/70/b3/84/70b38471d9a9376782cb8d594e3d3c0f.jpg",
    "power": "Water",
    "emoji": "💧",
    "backstory": "Poio"
  }

  const newCharacter = () => {
    axios.post(`http://localhost:3000/demon-slayers`,dsInfo)
        .then(() => navigate('/'))
        .catch((err: any) => console.log(err));
  }

  const editCharacter = (id: any) => {
    axios.put(`http://localhost:3000/demon-slayers/${id}`,dsInfo2)
        .then(() => navigate('/'))
        .catch((err: any) => console.log(err));
  }

  useEffect(() => {
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
        <FormGrid info={dsInfo} />
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
          isOpen && editMode &&
          <Modal type="warning" modalContent={{ title: "Confirmation", text: `Are you sure you want to edit the information of ${dsInfo.name}?`, setIsOpen: setIsOpen, actionFunction: editCharacter(params.id) }} />
        }
        { isOpen && !editMode &&
          <Modal type="danger" modalContent={{ title: "Something is wrong", text: `You forgot to fill the following required fields:`, fields: ["Nome", "Idade", "Sexo"], setIsOpen: setIsOpen }} />
        }
        {/**@TODO Preparar lista de campos zuados do form pra passar em fields */}
      </form>
    </FormDSWrapper>
  )
}