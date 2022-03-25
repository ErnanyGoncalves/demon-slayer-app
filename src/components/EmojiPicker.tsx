import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import styled from 'styled-components';
import { Input } from './Input';

const EmojiPickerWrapper = styled.div`
  background-color: var(--white);
  border: 2px solid var(--black); 
  box-sizing:border-box;
  padding: 14px 16px;
  font-size: 36px;
  background-color: var(--white);
  margin:2px;
  
  :focus{
      outline: 2px solid var(--red);
      transition: outline 0.1s linear;
  }  
`;

export const EmojiPicker = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    console.log(emojiObject.emoji,emojiObject.emoji.length);
  };

  return (
    <>
    <Input width="157px" value={chosenEmoji && chosenEmoji.emoji} />
    <EmojiPickerWrapper>
      
      <Picker onEmojiClick={onEmojiClick} />
    </EmojiPickerWrapper>
    </>
  );
};