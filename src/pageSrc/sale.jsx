import React from 'react';
import TopUI from './publicSrc/topUI';
import Contents from './publicSrc/contents';
import Footer from './publicSrc/footer';

function Sale(){
    return(
        <>
            <TopUI />
            <Contents curPage="sale"/>
            <Footer />
        </>
    )
}

export default Sale;