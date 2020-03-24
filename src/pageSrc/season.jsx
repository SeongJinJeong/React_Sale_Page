import React from "react";
import TopUI from "./publicSrc/topUI";
import Contents from "./publicSrc/contents";
import Footer from "./publicSrc/footer";

function Else() {
  return (
    <>
      <TopUI />
      <Contents curPage="season" />
      <Footer />
    </>
  );
}

export default Else;
