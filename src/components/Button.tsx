import styled from "styled-components";

const StyledButton = styled.div`
        display:inline-flex;
        justify-content:space-between;
        align-items:center;
        border: 2px solid #010000; 
        box-sizing:border-box;
        gap: 1rem;
        padding: 1rem;
        font-size: 1.5rem;
        background-color: #FFFFFF;
        cursor: pointer;    
        
        :hover{
            outline: 2px solid #EE1C25;
        }

        div{
            height: 2rem;
            width: 2rem;
            background: url("src/resources/icons/add.svg");
            background-repeat:no-repeat;
            background-size: 100% 100%;
        }
        p{
            font-family: 'Alegreya SC', serif;
            font-weight: 500;
            margin: 0;
        }
`

const Button = () => {
  return (
    <div>
        <StyledButton>
            <div></div>
            <p>Teste</p>
        </StyledButton>
    </div>
  )
}

export default Button