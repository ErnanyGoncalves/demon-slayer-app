import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DSCard } from './DSCard';


const CardListWrapper = styled.div`    
    display: flex;
    align-items: flex-start;
    height: 580px;
    gap: 20px;
    /* flex-grow: 1; */
    flex-wrap:wrap;
`;

export const DSCardList = () => {

    const [dsList, setDSList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/demon-slayers?_limit=3&_page=2")
            .then(({ data }: any) => setDSList(data))
            .catch((err: any) => console.log(err));
    }, []);


    return (
        dsList && <CardListWrapper>
            {dsList.map(({ id, name, theme, photo, emoji }) => <DSCard key={id} id={id} name={name} theme={theme} photo={photo} emoji={emoji} />)}
        </CardListWrapper>
    )
}