import React from 'react';
import TopUI from './pageSrc/topUI';
import Contents from './pageSrc/contents';
import styled,{createGlobalStyle} from 'styled-components';
import Footer from './pageSrc/footer';

const GlobalStyle =  createGlobalStyle`
  background-color: #fefbd8;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TopUI />
      <Contents />
      <Footer />
    </>
  )
}

export default App;
