import React, { useEffect, useState } from 'react';
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

export const EmojiPicker = ({emoji}:any) => {
  const [chosenEmoji, setChosenEmoji] = useState('');
  const [isOnFocus, setIsOnFocus] = useState(false);

  useEffect(()=>{
    setChosenEmoji(emoji);
  },[]);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const onFocus = () => setIsOnFocus(true);
  const onBlur = () => setIsOnFocus(false);
  const onKeyDown = (ev: React.KeyboardEvent) => ev.key == '8' && setChosenEmoji('');

  return (
    <EmojiPickerComponentWrapper>
      <Input onKeyDown={onKeyDown} value={chosenEmoji} />
      {isOnFocus && <EmojiPickerWrapper>

        <Picker onEmojiClick={onEmojiClick} />
      </EmojiPickerWrapper>}
    </EmojiPickerComponentWrapper>
  );
};