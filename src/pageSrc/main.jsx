import React from 'react';
import TopUI from './publicSrc/topUI';
import Contents from './publicSrc/contents';
import Footer from './publicSrc/footer';

function Main(){
    return(
        <>
            <TopUI />
            <Contents curPage="main"/>
            <Footer />
        </>
    )
}

export default Main;