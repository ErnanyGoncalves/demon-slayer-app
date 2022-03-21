import styled from "styled-components";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";

const IntroWrapper = styled.div`
    margin: 197px 0;
    padding: 0 20px;
    display:  flex;
    flex-direction:column;
    flex: 1;
    align-items: center;
    justify-content: center;
    height:100%;
    width: 424px;
    background-color: var(--white-50);
    
    .logo{
      max-width:100%;
      max-height:100%;
    }

    p{
        text-align: center;
        max-width: 246px;
        margin: 2rem 0 4rem 0;
    }
`

export const Intro = () => {
  return (
    <IntroWrapper>
      <img className="logo" src="src/assets/images/logo.png" alt="Logo" />
      <p>This application was made for you to create and manage your own demon slayers.</p>
      <Button>
        <Icon  />
        Create
      </Button>
    </IntroWrapper>)
}