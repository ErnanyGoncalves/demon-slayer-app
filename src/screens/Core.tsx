import styled from 'styled-components'
import { DSCardList } from '../components/DSCardList'
import { EmojiPicker } from '../components/EmojiPicker'
import { FormField } from '../components/FormField'
import { Icon } from '../components/Icon'
import { Input } from '../components/Input'
import { List } from '../components/List'
import ModalCard from '../components/ModalCard'
import {PageHeader} from '../components/PageHeader'
import { Pagination } from '../components/Pagination'
import { Textarea } from '../components/Textarea'
import { Info } from './Info'

const CoreWrapper = styled.div`
    padding: 0 89px;
    height:100%;
    width: 778px;
    background-color: var(--white-50);
    display:flex;
    /* justify-content: center; */

`
// Temporário!!!
const options = ["stone", "wind", "serpent", "love", "fire", "mist", "insect", "sound", "water", "sun", "lighting", "beast", "moon"];

export const Core = () => {
  return (
    <CoreWrapper>
      {/* <DSCardList /> */}
      {/* <Pagination /> */}
      {/* <Info /> */}
      {/* <PageHeader highlight="New" title="Demon Slayer" /> */}
      {/* <Textarea /> */}
      <ModalCard messageType="danger" title="Something is wrong" text="alalla" />
      <div>
        {/* <Input width='335px' placeholder="Teste" /> */}
        {/* <List options={options} width='246px' /> */}
        {/* <FormField />         */}
      </div>
    </CoreWrapper>
  )
}