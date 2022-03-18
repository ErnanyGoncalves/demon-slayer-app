import styled from "styled-components";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";

const IntroWrapper = styled.div`
    padding: 197px 20px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    height:100%;
    width: 424px;
    background-color: var(--white);
    
    p{
        text-align: center;
    }
`

export const Intro = () => {
  return (
    <IntroWrapper>
      <img src="src/assets/images/logo.png" alt="Logo" />
      <p>This application was made for you to create and manage your own demon slayers.</p>
      <Button>
        <Icon  />
        Create
      </Button>
    </IntroWrapper>)
}