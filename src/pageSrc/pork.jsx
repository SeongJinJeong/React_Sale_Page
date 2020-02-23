import React from 'react';
import TopUI from './publicSrc/topUI';
import Contents from './publicSrc/contents';
import Footer from './publicSrc/footer';

function Pork(){
    return(
        <>
            <TopUI />
            <Contents curPage="pork"/>
            <Footer />
        </>
    )
}

export default Pork;