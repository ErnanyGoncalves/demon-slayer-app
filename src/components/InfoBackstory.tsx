import styled from "styled-components"

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
    }

`

export const InfoBackstory = () => {
    return (
        <InfoBackstoryWrapper>
            <div className="hr" />
            <label>Backstory:</label>
            <p>Kyojuro was the eldest son of Shinjuro Rengoku. His father was known as the Flame Hashira of the Demon Slayer Corps until his unexpected retirement. Kyojuro also had a younger brother who trained alongside him until their father ceased to teach them.</p>
        </InfoBackstoryWrapper>
    )
}