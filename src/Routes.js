import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Beef from "./pageSrc/beef";
import Else from "./pageSrc/else";
import Pork from "./pageSrc/pork";
import Sale from "./pageSrc/sale";
import Main from "./pageSrc/main";
import Search from "./pageSrc/search";
import Season from "./pageSrc/season";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/beef" component={Beef} />
      <Route path="/pork" component={Pork} />
      <Route path="/season" component={Season} />
      <Route path="/sale" component={Sale} />
      <Route path="/else" component={Else} />
      <Route path="/search" component={Search} />
    </Router>
  );
};

export default Routes;
