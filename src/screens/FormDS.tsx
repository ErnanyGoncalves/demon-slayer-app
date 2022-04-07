import styled from "styled-components";
import { Button } from "../components/common/Button";
import { Icon } from "../components/common/Icon";
import { FormGrid } from "../components/form/FormGrid";
import { PageHeader } from "../components/form/PageHeader";
import { DangerCard } from "../components/modal/DangerCard";
import { WarningCard } from "../components/modal/WarningCard"
import { ButtonsBar } from "../layout/ButtonsBar";

export const FormDS = () => {

  // Temporário
  const fields = ["Name",
    "Age",
    "Gender",
    "Theme",
    "Picture URL"
  ];

  const FormDSWrapper = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    gap: 32px;
  `;

  return (
    // <WarningCard title="Confirmation" text="Are you sure you want to do that?" />
    // <DangerCard title="Something is wrong" text="You forgot to fill the following required fields:" fields={fields}/>
    <FormDSWrapper>
      <PageHeader highlight="New" title="Demon Slayer" />
      <FormGrid />
      <ButtonsBar>
        <Button>
          <Icon name='confirm' />
          Confirm
        </Button>
        <Button>
          <Icon name='back' />
          Cancel
        </Button>
      </ButtonsBar>
    </FormDSWrapper>
  )
}