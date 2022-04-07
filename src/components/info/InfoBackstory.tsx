import styled from "styled-components"
import { InfoBackstoryProps } from "../../types/InfoBackstory"


const InfoBackstoryWrapper = styled.div`
    height: 458px;
    margin-bottom: 48px;
    .hr{
        width: 68px;
        height: 2px;
        background-color: var(--black);
        margin: 48px auto;
    }

    label{
        font-size: 24px;
        font-family: "Open Sans", sans-serif;
        margin: 0 0 16px 0;
        display:inline-block;        
    }

    p{
        font-size: 16px;
        font-family: "Open Sans", sans-serif;
        width: 778px;
        margin: 0;
        margin-right: 0;
    }

`

export const InfoBackstory = ({backstory}: InfoBackstoryProps) => {
    return (
        <InfoBackstoryWrapper>
            <div className="hr" />
            <label>Backstory:</label>
            <p>{backstory}</p>
        </InfoBackstoryWrapper>
    )
}