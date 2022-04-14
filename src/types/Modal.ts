/** @TODO DELETAR ARQUIVO */
import { DangerCardProps } from "./DangerCard";
import { WarningCardProps } from "./WarningCard";

export type ModalNames = "warning" | "danger";

export interface ModalProps {
    type: ModalNames;
    modalContent: WarningCardProps | DangerCardProps;
}