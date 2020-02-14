import React, { Component } from 'react';
import styled, {keyframes,css} from 'styled-components';


class topUI extends Component {
    state = {
        loginStatus : false,
    }

    render (){
        return (
            <>
                <WebTopUI />
            </>
        )
    }
}

const WebTopUI = () => {
    return(
        <nav className="site-header border-bottom"> 
    { /* Top Items */}
            <div className="container d-flex flex-column flex-md-row justify-content-between" Style="font-size:25px;">
                <a className="py-2" href="#">
                    <img src="./logo.png" Style="width:100px;height:50px"></img>
                </a>
                <a className="py-2 d-none d-md-inline-block font-weight-bold text-dark" href="#">소고기</a>
                <a className="py-2 d-none d-md-inline-block font-weight-bold text-dark" href="#">돼지고기</a>
                <a className="py-2 d-none d-md-inline-block font-weight-bold text-dark" href="#">닭&오리</a>
                <a className="py-2 d-none d-md-inline-block font-weight-bold text-primary" id="Sale" href="#">SALE</a>
                <a className="py-2 d-none d-md-inline-block font-weight-bold text-dark" href="#">연락처</a>
                <MobileTopUI />
            </div>
        </nav>
    )
}

const MobileTopUI = () =>{
    return(
        <div className=" btn-group float-right d-sm-none" Style="width:20px;">
            <button type="button" className="btn btn-danger dropdown-toggle d-flex justify-content-end" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" Style="width:10%">
            Action
            </button>
            <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
            </div>
        </div>
    )
}

export default topUI;