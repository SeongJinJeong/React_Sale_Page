import React from 'react';
import TopUI from './publicSrc/topUI';
import Contents from './publicSrc/contents';
import Footer from './publicSrc/footer';

function Beef(){
    return(
        <>
            <TopUI />
            <Contents curPage = "beef"/>
            <Footer />
        </>
    )
}

export default Beef;