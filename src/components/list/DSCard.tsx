import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { CardProps } from '../../types/Card';

const DSCardWrapper = styled(Link)`
    height: 180px;
    box-sizing: border-box;
    padding: 0 24px;
    text-decoration: none;
    display: flex;
    font-size: 36px;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    box-shadow: 0 4px 4px 2px var(--black-30);    

    img{
        width:108px;
        height:108px;
        max-width:100%;
        max-height:100%;
        border: 2px solid var(--black);
        border-radius: 50%;
    }
    :hover,:focus{
        transform: scale(1.01);
        transition: transform 0.1s linear;        
    }
    :focus{
        outline: none;
    }


    &.stone{
        background: var(--stone) linear-gradient(transparent, var(--black-50));
        color: var(--white);
    }
    &.wind{
        background: var(--wind) linear-gradient(transparent, var(--black-50));
        color: var(--black);
    }
    &.serpent{
        background: var(--serpent) linear-gradient(transparent, var(--black-50));
        color: var(--white);
    }
    &.love{
        background: var(--love) linear-gradient(transparent, var(--black-50));
        color: var(--black);
    }
    &.fire{
        background: var(--fire) linear-gradient(transparent, var(--black-50));
        color: var(--white);
    }
    &.mist{
        background: var(--mist) linear-gradient(transparent, var(--black-50));
        color: var(--white);
    }
    &.insect{
        background: var(--insect) linear-gradient(transparent, var(--black-50));
        color: var(--white);
    }
    &.sound{
        background: var(--sound) linear-gradient(transparent, var(--black-50));
        color: var(--black);
    }
    &.water{
        background: var(--water) linear-gradient(transparent, var(--black-50));
        color: var(--white);
    }
    &.sun{
        background: var(--sun) linear-gradient(transparent, var(--black-50));
        color: var(--black);
    }
    &.lighting{
        background: var(--lighting) linear-gradient(transparent, var(--black-50));
        color: var(--black);
    }
    &.beast{
        background: var(--beast) linear-gradient(transparent, var(--black-50));
        color: var(--black);
    }
    &.moon{
        background: var(--moon) linear-gradient(transparent, var(--black-50));
        color: var(--black);
    }
`


export const DSCard = ({id,name,theme,photo,emoji} : CardProps) => {
  return (
    <DSCardWrapper className={theme} to={`/${id}/details`}>
        <img className='cardPicture' src={photo} alt={name} />
        {name} {emoji}
    </DSCardWrapper>
  )
}