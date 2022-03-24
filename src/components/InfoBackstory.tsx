import styled from "styled-components"

interface Props {
    backstory?: string;
}

const InfoBackstoryWrapper = styled.div`
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

export const InfoBackstory = ({backstory}: Props) => {
    return (
        <InfoBackstoryWrapper>
            <div className="hr" />
            <label>Backstory:</label>
            <p>{backstory}</p>
        </InfoBackstoryWrapper>
    )
}