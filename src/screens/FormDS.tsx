import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Loading } from "../components/common";
import { Button } from "../components/common/Button";
import { Icon } from "../components/common/Icon";
import { FormGrid, PageHeader } from '../components/form/index'
import { DangerCard } from "../components/modal/DangerCard";
import { Modal } from "../components/modal/Modal";
import { WarningCard } from "../components/modal/WarningCard";
import { useFetchCharacter } from "../hooks";
import { ButtonsBar } from "../layout/ButtonsBar";

const FormDSWrapper = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    gap: 32px;
  `;


export const FormDS = () => {
  const [dsNameEditMode, setDSNameEditMode] = useState("");

  const [editMode, setEditMode] = useState(false);
  const [open, setOpen] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { dsInfo, setDSInfo, loading, error } = useFetchCharacter(params.id);
  console.log(dsInfo, error, "--------")
  const handleSubmit = (ev: any) => {
    setErrInfo([]);
    ev.preventDefault();

    let errors = [];
    if (dsInfo.name === "") errors.push("Name is required");
    if (dsInfo.age === "") errors.push("A valid age is required");
    if (dsInfo.age !== "" && Number(dsInfo.age) < 1 || Number(dsInfo) > 1000000) errors.push("Age must be between 1 and 1000000");
    if (dsInfo.gender === "" || dsInfo.gender === "---") errors.push("Gender is required");
    if (dsInfo.theme === "" || dsInfo.theme === "---") errors.push("Theme is required");
    if (dsInfo.photo === "") errors.push("Photo is required");

    if (errors.length > 0 || editMode) {
      setErrInfo(errors);
      setOpen(true);
    }
    else newCharacter();
  }
  const navigateToHome = () => navigate("/");

  const [errInfo, setErrInfo] = useState<string[]>([]);
  const newCharacter = () => {
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
      setDSNameEditMode(dsInfo.name);
      setEditMode(true);
    }
  }, [loading, location.pathname, params.id]);

  return (
    <>
      {!loading && <FormDSWrapper>
        {editMode ? <PageHeader highlight="Edit" title={dsNameEditMode + ":"} /> : <PageHeader highlight="New" title="Demon Slayer:" />}
        <form noValidate onSubmit={handleSubmit}>
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
            editMode && errInfo.length === 0 &&
            <Modal open={open}>
              <WarningCard title="Confirmation" text={`Are you sure you want to edit the information of ${dsNameEditMode}?`} setOpen={setOpen} actionFunction={() => editCharacter(params.id)} />
            </Modal>
          }
          {errInfo.length > 0 &&
            <Modal open={open}>
              <DangerCard title="Something is wrong" text={`Some of the following fields weren't filled correctly:`} fields={errInfo} setOpen={setOpen} />
            </Modal>
          }
        </form>
      </FormDSWrapper>}
      {loading && <Loading>Loading...</Loading>}
    </>
  )
}