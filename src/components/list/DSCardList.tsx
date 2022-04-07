import styled from 'styled-components';
import { Card } from '../../types/CardList';
import { DSCard } from './DSCard';

const CardListWrapper = styled.div`    
    display: grid;
    height: 580px;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3,1fr);
    gap: 20px;
`;

export const DSCardList = ({ dsList }: Card) => {

    return (
        dsList && <CardListWrapper>
            {dsList.map(({ id, name, theme, photo, emoji }) => <DSCard key={id} id={id} name={name} theme={theme} photo={photo} emoji={emoji} />)}
        </CardListWrapper>
    )
}