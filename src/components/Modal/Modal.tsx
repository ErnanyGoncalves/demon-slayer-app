import styled from "styled-components";
import { ModalProps } from "../../types/Modal";
import { DangerCard } from "./DangerCard";
import { ModalCardWrapper } from "./ModalCardWrapper";
import { WarningCard } from "./WarningCard";

const ModalWrapper = styled.div`
        display: block;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;        
        background-color: var(--black-30);
`;


export const Modal = ({type,modalContent} : ModalProps) => {
  return (
    <ModalWrapper>
            <ModalCardWrapper>
                    {type === "warning" && <WarningCard title={modalContent.title} text={modalContent.text} />}
                    {type === "danger" && <DangerCard title={modalContent.title} text={modalContent.text} fields={modalContent.fields} />}
            </ModalCardWrapper>
    </ModalWrapper>
  )
}