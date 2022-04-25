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
  let [searchParams, setSearchParams] = useSearchParams();

  const { dsList, loading, error, totalPages } = useFetchCharacters(currentPage);

  useEffect(() => {
    setCurrentPage(Number(searchParams.get("page")) ? Number(searchParams.get("page")) : 1);
  }, [searchParams]);


  return (
    <>
      {!loading && dsList && <ListDSWrapper>
        <Input placeholder="Search: character; theme; power; emoji" />
        <DSCardList dsList={dsList} />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </ListDSWrapper>}
      {loading && <Loading>Loading...</Loading>}
    </>
  )
}