import styled from 'styled-components'
import { DSCardList } from '../components/DSCardList'
import { Pagination } from '../components/Pagination'
import { Info } from './Info'

const CoreWrapper = styled.div`
    padding: 0 89px;
    height:100%;
    width: 956px;
    background-color: var(--white-50);
    display:flex;
    justify-content: center;
`


export const Core = () => {
  return (
    <CoreWrapper>
        {/* <DSCardList /> */}
        {/* <Pagination /> */}
        <Info />
    </CoreWrapper>
  )
}