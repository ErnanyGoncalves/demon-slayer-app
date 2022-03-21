import styled from 'styled-components'

const DSCardWrapper = styled.a`
    width: 379px;
    height: 180px;
    box-sizing: border-box;
    padding: 0 24px;
    text-decoration: none;
    display: flex;
    font-size: 36px;
    align-items: center;
    justify-content: center;
    gap: 12px;
    box-shadow: 0 4px 4px 2px var(--black-30);    

    img{
        max-width:108px;
        max-height:108px;
        border: 2px solid var(--black);
        border-radius: 50%;
    }
    :hover,:focus{
        transform: scale(1.01);
        transition: transform 0.1s linear;
    }


    &.insect{
        background: var(--insect) linear-gradient(transparent, var(--black-50));
        color: var(--white);
    }
`

export const DSCard = () => {
  return (
    <DSCardWrapper className={`insect`} href="#">
        <img className='cardPicture' src="https://i.pinimg.com/originals/67/bc/f1/67bcf160c0643d61b6d9da16e564d96b.jpg" alt="Shinobu Kocho" />
        Shinobu Kocho &#129419;
    </DSCardWrapper>
  )
}