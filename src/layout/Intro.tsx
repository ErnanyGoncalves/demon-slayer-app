import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Icon } from "../components/common";

const IntroWrapper = styled.div`
    padding: 0 20px;
    display:  flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    height:100%;
    width: 384px;
    background-color: var(--white-50);
    
    .logo{
      max-width:100%;
      max-height:100%;
    }

    p{
        text-align: center;
        max-width: 246px;
        font-family: "Open Sans", sans-serif;
        margin: 2rem 0 4rem 0;
    }

    .blank{
      height: 68px;
      width: 68px;
    }
`

export const Intro = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToForm = () => navigate("/new");

  return (
    <IntroWrapper>
      <img className="logo" src="src/assets/images/logo.png" alt="Logo" />
      <p>This application was made for you to create and manage your own demon slayers.</p>
      {location.pathname === "/" && <Button onClick={navigateToForm}>
        <Icon />
        Create
      </Button>}
      {location.pathname !== "/" && <div className="blank"></div>}


    </IntroWrapper>)
}