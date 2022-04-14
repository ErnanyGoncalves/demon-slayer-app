import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ModalCardWrapper } from "./ModalCardWrapper";

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


const rootModal = document.createElement("div");

const ModalBody = ({ children }: any) => {
        useEffect(() => {
                document.getElementById("modalCardWrapper")?.appendChild(rootModal);
                rootModal.classList.add("rootModal");
        }, []);

        return createPortal(children, rootModal);
};

export const Modal = ({ open, children }: any) => {
        return open ?
                <ModalWrapper>
                        <ModalCardWrapper id="modalCardWrapper">
                                <ModalBody>{children}</ModalBody>
                        </ModalCardWrapper>
                </ModalWrapper>
                : <></>;
};