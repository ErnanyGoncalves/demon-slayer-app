import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components"
import { DSCardList } from "../components/list/DSCardList"
import { Input } from "../components/form/Input";
import { Pagination } from "../components/list/Pagination"
import { useFetchCharacters } from "../hooks";
import { Loading } from "../components/common";


const ListDSWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 106px 0;
`;

export const ListDS = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  let [searchParams, setSearchParams] = useSearchParams();

  const { dsList, loading, error, request } = useFetchCharacters(currentPage);
  useEffect(() => request(), [currentPage]);

  useEffect(() => {
    axios.get("http://localhost:3000/demon-slayers")
      .then(({ data }: any) => {
        if (!searchParams.get("page") || Number(searchParams.get("page")) > Math.ceil(data.length) || Number(searchParams.get("page")) < 1) {
          setCurrentPage(1);
          setSearchParams({ page: "1" })
        }
        else setCurrentPage(Number(searchParams.get("page")));
        setTotalPages(Math.ceil(data.length / 6));
      })
      .catch((err: any) => console.log(err));
  }, [searchParams]);


  return (
    <>
      {!loading && dsList && <ListDSWrapper>
        <Input width="100%" />
        <DSCardList dsList={dsList} />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </ListDSWrapper>}
      {loading && <Loading>Loading...</Loading>}
    </>
  )
}