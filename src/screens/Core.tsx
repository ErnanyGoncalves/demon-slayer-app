import styled from 'styled-components'
import { DSCardList } from '../components/DSCardList'
import { EmojiPicker } from '../components/EmojiPicker'
import { Icon } from '../components/Icon'
import { Input } from '../components/Input'
import { List } from '../components/List'
import { Pagination } from '../components/Pagination'
import { Info } from './Info'

const CoreWrapper = styled.div`
    padding: 0 89px;
    height:100%;
    width: 778px;
    background-color: var(--white-50);
    display:flex;
    justify-content: center;

`
// Temporário!!!
const options = ["stone", "wind", "serpent", "love", "fire", "mist", "insect", "sound", "water", "sun", "lighting", "beast", "moon"];

export const Core = () => {
  return (
    <CoreWrapper>
      {/* <DSCardList /> */}
      {/* <Pagination /> */}
      {/* <Info /> */}
      <div>
        {/* <Input width='335px' placeholder="Teste" /> */}
        {/* <List options={options} width='246px' /> */}
        <EmojiPicker />
      </div>
    </CoreWrapper>
  )
}