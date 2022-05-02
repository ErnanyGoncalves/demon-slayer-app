import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { PaginationProps } from '../../types/Pagination';

const PaginationWrapper = styled.div`
    height: 40px;
    width: 392px;
    border: 2px solid var(--black);
    background-color: var(--white);
    display: flex;
    gap: 35px;
    padding: 10px 14px;
    justify-content: space-between;
    align-items: center;

    a,span {
        font-family: "Open Sans", serif;
        font-size: 24px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span{
        width:93px;
        height: 40px;
        cursor: default;
    }

    a{
        text-decoration: none;
        width:40px;
        height: 40px;
        color: var(--black);

        &.link-disabled, &.link-disabled:hover, &.link-disabled:focus{
            cursor: not-allowed;
            pointer-events: none;
            color: var(--black-30);
        }
        
        :hover,:focus{
            color: var(--red);
            transform: scale(1.1);
            transition: transform 0.1s linear;
        }
        :focus{
            outline: none;
        }
    }
`

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {

    useEffect(()=>{
        localStorage.setItem("page",currentPage.toString());
        localStorage.setItem("timestamp",new Date().getTime().toString());
    },[currentPage]);

    return (
        <PaginationWrapper>
            <Link className={currentPage === 1 ? 'link-disabled' : ''} to="/?page=1">{'<<'}</Link>
            <Link className={currentPage === 1 ? 'link-disabled' : ''} to={`/?page=${currentPage - 1 < 1 ? 1 : currentPage - 1}`}>{'<'}</Link>
            <span>{currentPage >= 10 ? currentPage : `0${currentPage}`} / {totalPages >= 10 ? totalPages : `0${totalPages}`}</span>
            <Link className={currentPage === totalPages ? 'link-disabled' : ''} to={`/?page=${currentPage + 1 > totalPages ? totalPages : currentPage + 1}`}>{'>'}</Link>
            <Link className={currentPage === totalPages ? 'link-disabled' : ''} to={`/?page=${totalPages}`}>{'>>'}</Link>
        </PaginationWrapper>
    )
}