import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Beef from './pageSrc/beef';
import Else from './pageSrc/else';
import Pork from './pageSrc/pork';
import Sale from './pageSrc/sale';
import Main from './pageSrc/main';

const Routes = () =>{
    return(
        <Router>
            <Route path="/" component={Main} />
            <Route path="/beef" component={Beef} />
            <Route path="/pork" component={Pork} />
            <Route path="/sale" component={Sale} />
            <Route path="/else" component={Else} />
        </Router>
    )
}

export default Routes;