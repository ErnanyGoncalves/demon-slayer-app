import styled from "styled-components";
import addIcon from "../assets/icons/add.svg";
import backIcon from "../assets/icons/back.svg";
import cancelIcon from "../assets/icons/cancel.svg";
import confirmIcon from "../assets/icons/confirm.svg";
import editIcon from "../assets/icons/edit.svg";
import linkIcon from "../assets/icons/link.svg";
import questionIcon from "../assets/icons/question.svg";
import searchIcon from "../assets/icons/search.svg";
import trashIcon from "../assets/icons/trash.svg";

type IconNames = "add" | "back" | "cancel" | "confirm" | "edit" | "link" | "question" | "search" | "trash";

interface Props {
    size?: string;
    name?: IconNames;
}

const icons = new Map<IconNames, any>()
    .set("add", addIcon)
    .set("back", backIcon)
    .set("cancel", cancelIcon)
    .set("confirm", confirmIcon)
    .set("edit", editIcon)
    .set("link", linkIcon)
    .set("question", questionIcon)
    .set("search", searchIcon)
    .set("trash", trashIcon);


const IconWrapper = styled.i<Omit<Props, "name">>`
    &, img{
        height: ${props => props.size};
        width: ${props => props.size};
    }
    img{   
        background-repeat:no-repeat;
        background-size: 100% 100%;
    }
`

export const Icon = ({ size = "2rem", name = "add" }: Props) => {
    return (
        <IconWrapper size={size}>
            <img src={icons.get(name)} alt={name} />
        </IconWrapper>
    )
};