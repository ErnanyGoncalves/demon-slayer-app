import React from 'react'
import styled from 'styled-components'
import { Input } from './Input';

const FormFieldWrapper = styled.div`
    display: inline-block;
    label{
       display: block;
       font-family: 24px;
       font-family: "Open Sans", sans-serif;
       margin-bottom: 8px;
    }

`;

export const FormField = () => {
  return (
    <FormFieldWrapper>
        <label htmlFor="name">Name*</label>
        <Input width='335px' name="name" id="name" />
    </FormFieldWrapper>
  )
}