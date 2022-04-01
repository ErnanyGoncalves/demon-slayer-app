import styled from "styled-components"

interface Props {
    name: string;
    age: number;
    power: string;
    emoji: string;
    photo: string;
    gender: string;
}

const InfoShortWrapper = styled.div`
    display: flex;
    gap: 20px;

    img{
        width:240px;
        height:240px;
        max-width:100%;
        max-height:100%;
        border: 4px solid var(--black);
        border-radius: 50%;
    }
    h1{
        color: var(--red);
        margin: 0 0 24px 0;
    }
    label{
        font-size: 24px;
        font-family: "Open Sans", sans-serif;
        margin: 0 0 16px 0;
        display:inline-block;
        span{
            font-size: 16px;
        }
    }
    
`

export const InfoShort = ({name,age,power,emoji,photo,gender}: Props) => {

    return (
        <InfoShortWrapper>
            <img src={photo} alt={name} />
            <div>
                <h1>{name}</h1>
                <div>
                    <label>Age: <span>{age} year{age > 1 && 's'}</span></label>

                </div>
                <div>
                    <label>Gender: <span>{gender}</span></label>

                </div>
                <div>
                    <label>Power: <span>{power} {emoji}</span></label>
                </div>
            </div>
        </InfoShortWrapper>
    )
}