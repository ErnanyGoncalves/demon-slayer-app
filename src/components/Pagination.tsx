import styled from 'styled-components'

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

export const Pagination = () => {
    return (
        <PaginationWrapper>
            <a href="#">{'<<'}</a>
            <a href="#">{'<'}</a>
            <span>01 / 20</span>
            <a href="#">{'>'}</a>
            <a href="#">{'>>'}</a>
        </PaginationWrapper>
    )
}