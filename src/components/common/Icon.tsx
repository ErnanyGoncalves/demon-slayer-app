import styled from "styled-components";
import { IconNames, IconProps } from "../../types/Icon";
import { Add, Back, Cancel, Confirm, Edit, Link, Question, Search, Trash } from "../icons";


const icons = new Map<IconNames, any>()
    .set("add", <Add />)
    .set("back", <Back />)
    .set("cancel", <Cancel />)
    .set("confirm", <Confirm />)
    .set("edit", <Edit />)
    .set("link", <Link />)
    .set("question", <Question />)
    .set("search", <Search />)
    .set("trash", <Trash />);


const IconWrapper = styled.div<Omit<IconProps, "name">>`
    
    width: ${props => props.size ? props.size : "2rem"};
    height: ${props => props.size ? props.size : "2rem"};

    svg{
        fill: var(--${props => props.fill ? props.fill : "black"});
    }

`;

export const Icon = ({ name = "add" }: IconProps) => {
    return (
        <IconWrapper>
            {icons.get(name)}
        </IconWrapper>
    )
};