import React from 'react';
import Routes from './Routes';
import {StateProvider} from './Store';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <StateProvider>
          <Routes />
        </StateProvider>
      </Router>
    </>
  )
}

export default App;
