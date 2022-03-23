import styled from "styled-components"

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
        font-size: 54px;
        font-weight: 400;
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

export const InfoShort = () => {

    return (
        <InfoShortWrapper>
            <img src="https://nerdhits.com.br/wp-content/uploads/2021/10/Kyojuro-Rengoku-Hashira-Demon-Slayer.jpg" alt="Kyōjurō Rengoku" />
            <div>
                <h1>Kyōjurō Rengoku</h1>
                <div>
                    <label>Age: <span>20 years</span></label>

                </div>
                <div>
                    <label>Gender: <span>Male</span></label>

                </div>
                <div>
                    <label>Power: <span>Fire 🔥</span></label>
                </div>
            </div>
        </InfoShortWrapper>
    )
}