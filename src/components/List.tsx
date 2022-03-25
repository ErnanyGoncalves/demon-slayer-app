
import styled from 'styled-components'

interface Props {
    width: string;
    options: string[];
}

const ListWrapper = styled.select<Omit<Props, "options">>`             

        border: 2px solid var(--black); 
        box-sizing:border-box;        
        padding: 18px 14px;
        font-size: 16px;
        cursor: pointer;
        background-color: var(--white);
        font-family: "Open Sans", sans-serif;
        width: ${props => props.width};
        height: 64px;
        margin: 2px;
       
        
        :focus{
            outline: 2px solid var(--red);
            transition: outline 0.1s linear;
        }

`

export const List = ({ width,options }: Props) => {
    return (
        <ListWrapper width={width}>
            <option value="---">----------------</option>
            {options.map((option) => <option key={option} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>)}
        </ListWrapper>
    )
}
