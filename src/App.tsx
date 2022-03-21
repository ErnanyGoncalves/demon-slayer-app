import React from 'react';
import { DSCard } from './components/DSCard';
import { Intro } from './screens/Intro';
import {GlobalStyle} from './style';

function App() {

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className='container'>
        <Intro />
        <div className='core'>
          <DSCard />
        </div>
      </div>
      
    </React.Fragment>
  )
}

export default App
