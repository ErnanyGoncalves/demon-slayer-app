import React from 'react';
import { Core } from './screens/Core';
import { Intro } from './screens/Intro';
import {GlobalStyle} from './style';

function App() {

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className='container'>
        <Intro />
        <Core />
      </div>
      
    </React.Fragment>
  )
}

export default App
