import React from "react";
import TopUI from "./publicSrc/topUI";
import Contents from "./publicSrc/contents";
import Footer from "./publicSrc/footer";

function Search() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let foo = params.get("word");
  return (
    <>
      <TopUI />
      <Contents curPage="search" word={foo} />
      <Footer />
    </>
  );
}

export default Search;
