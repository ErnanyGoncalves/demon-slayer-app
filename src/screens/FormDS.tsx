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
    setIsOpen(true);
  }
  const navigateToHome = () => navigate("/");

  const [dsInfo, setDSInfo] = useState<Info>({
    "id": 1000,
    "name": "AAAA",
    "age": 60,
    "gender": "Male",
    "theme": "Fire",
    "photo": "https://www.seekpng.com/png/detail/27-270295_kirby-super-star-ultra-fuego-fire-kirby-super.png",
    "power": "Fire",
    "emoji": "🎈",
    "backstory": "Poi"
  });

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
          <Modal type="warning" modalContent={{ title: "Confirmation", text: `Are you sure you want to delete ${dsInfo.name}?`, setIsOpen: setIsOpen, actionFunction: ()=>{console.log("Oi")} }} />
        }
        { isOpen && !editMode &&
          <Modal type="danger" modalContent={{ title: "Something is wrong", text: `You forgot to fill the following required fields:`, fields: ["Nome", "Idade", "Sexo"], setIsOpen: setIsOpen }} />
        }
        {/**@TODO Preparar lista de campos zuados do form pra passar em fields */}
      </form>
    </FormDSWrapper>
  )
}