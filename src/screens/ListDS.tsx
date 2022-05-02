import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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
  width:100%;
`;

export const ListDS = () => {
  const [currentPage, setCurrentPage] = useState(new Date().getTime() - Number(localStorage.getItem("timestamp")) < 900000 ? Number(localStorage.getItem("page")) : 1);
  let [searchParams, setSearchParams] = useSearchParams();
  const [queryInfo, setQueryInfo] = useState("");
  const { dsList, loading, error, totalPages } = useFetchCharacters(currentPage, queryInfo);

  useEffect(() => {
    setCurrentPage(Number(searchParams.get("page")) ? Number(searchParams.get("page")) : currentPage);
  }, [searchParams]);

  const handleFilter = ({ target }: any) => {
    clearTimeout();
    setTimeout(() => {
      const { value } = target;
      const splittedData = value.split(";");
      let queryString = "";
      for (let i = 0; i < splittedData.length; i++) {
        if(i===3) break;
        if(i===0) queryString+=`&name_like=${splittedData[i].trim()}`;
        if(i===1) queryString+=`&theme_like=${splittedData[i].trim()}`;
        if(i===2) queryString+=`&emoji=${splittedData[i].trim()}`;        
      }
      setQueryInfo(queryString);
    }, 1000);
  }

  return (
    <>
      <ListDSWrapper>
        <Input type="text" onChange={handleFilter} name="filter" id="filter" placeholder="Search: character name; theme; emoji" />
        {!loading && dsList && <>
          <DSCardList dsList={dsList} />
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>}
        {loading && <Loading>Loading...</Loading>}
      </ListDSWrapper>
    </>
  )
}