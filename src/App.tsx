import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Template } from './layout/Template';
import { FormDS } from './screens/FormDS';
import { InfoDS } from './screens/InfoDS';
import { ListDS } from './screens/ListDS';
import { GlobalStyle } from './style';



function App() {

  const location = useLocation();

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className='container'>
        <Routes location={location}>
          <Route path="/" element={<Template />}>
            <Route index element={<ListDS />} />
            <Route path="/:id/details" element={<InfoDS />} />
            <Route path="/new" element={<FormDS />} />
            <Route path="/:id/edit" element={<FormDS />} />
            <Route path="*" element={<ListDS />} />
          </Route>
        </Routes>
      </div>

    </React.Fragment>
  )
}

export default App
