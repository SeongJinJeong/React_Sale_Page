import React from 'react';
import TopUI from './pageSrc/topUI';
import Contents from './pageSrc/contents';
import Footer from './pageSrc/footer';
import {StateProvider} from './Store';

function App() {
  return (
    <>
      <StateProvider>
        <TopUI />
        <Contents />
        <Footer />
      </StateProvider>
    </>
  )
}

export default App;
