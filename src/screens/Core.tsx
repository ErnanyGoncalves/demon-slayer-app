import styled from 'styled-components'
import { DSCardList } from '../components/DSCardList'

const CoreWrapper = styled.div`
    margin: 197px 0;
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
        <DSCardList />
    </CoreWrapper>
  )
}