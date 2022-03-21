import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --red: #EE1C25;
        --red-30: #EE1C254D;
        --red-50: #EE1C2580;
        --black: #010000;
        --black-30: #0100004D;
        --black-50: #01000080;
        --white: #FFFFFF;
        --white-50: #FFFFFF80;
        --gray: #666B6A;
        --brown: #F2A359;
        --brown-30: #F2A3594D;
        --brown-50: #F2A35980;

        
        --stone: #634943;
        --wind: #F1F1F1;
        --serpent: #292A47;
        --love: #E68FA5;
        --fire: #EE2F3D;
        --mist: #608C98;
        --insect: #4E4281;
        --sound: #B1AAB6;
        --water: #0287EB;
        --sun: #EEA173;
        --moon: #C9DEE6;
        --lighting: #FADC76;
        --beast: #CB9470;
    
    }
    
    

    body{
        background-color: var(--gray);
        padding: 1.25rem;
        font-family: 'Alegreya SC', serif;
        font-weight: 400;
        display: flex;
        justify-content:center;
        align-items: center;
        margin: 0;

        .container{
            display: flex;
            justify-content:center;
            align-items: center;
            gap: 20px;
            width:100%;
            height: 984px;
            max-width:1440px;

            .core{
                height:100%;
                width: 956px;
                background-color: blue;
            }
        }
    }
`;