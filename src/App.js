import React from 'react';
import TopUI from './pageSrc/topUI';
import Contents from './pageSrc/contents';
import styled,{createGlobalStyle} from 'styled-components';
import Footer from './pageSrc/footer';
import {StateProvider} from './Store';

const GlobalStyle =  createGlobalStyle`
  background-color: #fefbd8;
`;

function App() {
  return (
    <>
      <StateProvider>
        <GlobalStyle />
        <TopUI />
        <Contents />
        <Footer />
      </StateProvider>
    </>
  )
}

export default App;
