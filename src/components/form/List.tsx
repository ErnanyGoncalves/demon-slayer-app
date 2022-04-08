import styled from 'styled-components'
import { ListProps } from '../../types/List'


const ListWrapper = styled.select<Omit<ListProps, "options">>`             

        border: 2px solid var(--black); 
        box-sizing:border-box;        
        padding: 18px 14px;
        font-size: 16px;
        cursor: pointer;
        background-color: var(--white);
        font-family: "Open Sans", sans-serif;
        width: 100%;
        height: 64px;
        margin: 2px;
       
        
        :focus{
            outline: 2px solid var(--red);
            transition: outline 0.1s linear;
        }

`

export const List = ({ options, selected }: ListProps) => {
    return (
        <ListWrapper required>
            <option value="---">----------------</option>
            {options.map((option) => <option selected={option == selected?.toLowerCase()} key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>)}
        </ListWrapper>
    )
}
