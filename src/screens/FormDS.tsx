import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/common/Button";
import { Icon } from "../components/common/Icon";
import { FormGrid } from "../components/form/FormGrid";
import { PageHeader } from "../components/form/PageHeader";
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
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = () => {

  }
  const navigateToHome = () => navigate("/");

  const [dsInfo, setDSInfo] = useState<Info>({
    "id": 0,
    "name": "",
    "age": 0,
    "gender": "",
    "theme": "",
    "photo": "",
    "power": "",
    "emoji": "",
    "backstory": ""
  });

  useEffect(() => {
    if (location.pathname.search(/\/[0-9]+\/edit\/?/) != -1) {
      if (params.id != null) {
        axios.get(`http://localhost:3000/demon-slayers/${params.id}`)
          .then(({ data }: any) => {
            setDSInfo(data);
            console.log(dsInfo);
            setEditMode(true);
          })
          .catch((err: any) => navigate('/')); // Quando não encontra um id
      }
    }
  }, [location.pathname, params.id]);

  return (
    <form onSubmit={handleSubmit}>
      <FormDSWrapper>
        {editMode ? <PageHeader highlight="Edit" title={dsInfo.name + ":"} /> : <PageHeader highlight="New" title="Demon Slayer:" />}
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
      </FormDSWrapper>
    </form>
  )
}