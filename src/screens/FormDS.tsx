import { DangerCard } from "../components/modal/DangerCard";
import { WarningCard } from "../components/modal/WarningCard"

export const FormDS = () => {

  // Temporário
  const fields = ["Name",
    "Age",
    "Gender",
    "Theme",
    "Picture URL"
  ];

  return (
    <WarningCard title="Confirmation" text="Are you sure you want to do that?" />
    // <DangerCard title="Something is wrong" text="You forgot to fill the following required fields:" fields={fields}/>
  )
}