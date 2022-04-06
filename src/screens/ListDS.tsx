import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components"
import { DSCardList } from "../components/DSCardList"
import { Input } from "../components/Input";
import { Pagination } from "../components/Pagination"

interface Card{
  dsList: CardData[];
}

interface CardData {

  id: number;
  name: string;
  photo: string;
  theme: string;
  emoji: string;
}

const ListDSWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 106px 0;
`;

export const ListDS = () => {
  const [dsList, setDSList] = useState([{
    "id": 0,
    "name": "",
    "photo": "",
    "theme": "",
    "emoji": ""
  }]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  let [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    axios.get("http://localhost:3000/demon-slayers")
      .then(({ data }: any) => {
        if(!searchParams.get("page") || Number(searchParams.get("page")) > Math.ceil(data.length) || Number(searchParams.get("page")) < 1) {
          setCurrentPage(1);
          setSearchParams({page:"1"})
        }
        else setCurrentPage(Number(searchParams.get("page")));
        setTotalPages(Math.ceil(data.length/6));
      })
      .catch((err: any) => console.log(err));
  }, [searchParams]);

  useEffect(() => {
    axios.get(`http://localhost:3000/demon-slayers?_page=${currentPage}&_limit=6`)
      .then(({ data }: any) => setDSList(data))
      .catch((err: any) => console.log(err));
  }, [currentPage]);


  return (
    <ListDSWrapper>
      <Input width="100%" />
      <DSCardList dsList={dsList} />
      <Pagination  currentPage={currentPage} totalPages={totalPages} />
    </ListDSWrapper>
  )
}