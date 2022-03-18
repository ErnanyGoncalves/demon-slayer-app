import React from 'react';
import { Intro } from './screens/Intro';
import {GlobalStyle} from './style';

function App() {

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className='container'>
        <Intro />
        <div className='core'></div>
      </div>
      
    </React.Fragment>
  )
}

export default App
