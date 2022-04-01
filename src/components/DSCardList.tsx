import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DSCard } from './DSCard';


const CardListWrapper = styled.div`    
    display: grid;
    height: 580px;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3,1fr);
    gap: 20px;
`;

export const DSCardList = () => {

    const [dsList, setDSList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/demon-slayers?_limit=6")
            .then(({ data }: any) => setDSList(data))
            .catch((err: any) => console.log(err));
    }, []);


    return (
        dsList && <CardListWrapper>
            {dsList.map(({ id, name, theme, photo, emoji }) => <DSCard key={id} id={id} name={name} theme={theme} photo={photo} emoji={emoji} />)}
        </CardListWrapper>
    )
}