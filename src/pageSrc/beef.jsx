import React from "react";
import TopUI from "./publicSrc/topUI";
import Contents from "./publicSrc/contents";
import Footer from "./publicSrc/footer";

class Beef extends React.Component {

  render() {
    return (
      <>
        <TopUI />
        <Contents curPage="beef" />
        <Footer />
      </>
    );
  }
}

export default Beef;
