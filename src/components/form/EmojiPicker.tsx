import  { useEffect, useRef, useState } from 'react';
import Picker from 'emoji-picker-react';
import styled from 'styled-components';
import { Input } from './Input';

const EmojiPickerComponentWrapper = styled.div`
  height:64px;
  width: 100%;
  position: relative;
`;

const EmojiPickerWrapper = styled.div`
  background-color: var(--white);
  border: 2px solid var(--black); 
  box-sizing:border-box;
  padding: 14px 16px;
  font-size: 36px;
  background-color: var(--white);
  margin:2px;

  position: absolute;
  top: 70px;

  outline: 2px solid var(--red);
  transition: outline 0.1s linear;

`;

export const EmojiPicker = ({emoji,setDSInfo,dsInfo}:any) => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  const emojiInputRef = useRef<HTMLInputElement>(null);

  const onEmojiClick = (event,emojiObject) => setDSInfo({ ...dsInfo, ["emoji"]: emojiObject.emoji });

  const onKeyDown = (ev: KeyboardEvent) => ev.key == ('Backspace' || ev.key == 'Delete') && setDSInfo({ ...dsInfo, ["emoji"]: "" });;

  const handleBlur=(ev)=>{
    if(emojiPickerRef.current){
      if(emojiPickerRef.current.contains(ev.target) || ev.target === emojiInputRef.current) return null;
      else setIsOnFocus(false);
    }
    
  }

  useEffect(()=>{
    document.addEventListener("click",handleBlur);
  },[]);

  return (
    <EmojiPickerComponentWrapper>
      <Input ref={emojiInputRef} onKeyDown={onKeyDown} onFocus={() => setIsOnFocus(true)} value={dsInfo.emoji} name="emoji" id="emoji" />
      {isOnFocus && <EmojiPickerWrapper ref={emojiPickerRef}>

        <Picker onEmojiClick={onEmojiClick} />
      </EmojiPickerWrapper>}
    </EmojiPickerComponentWrapper>
  );
};