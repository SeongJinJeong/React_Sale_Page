import React, { Component } from 'react';
import styled, {keyframes,css} from 'styled-components';


class topUI extends Component {
    state = {
        loginStatus : false,
    }

    render (){
        return (
            <nav className="site-header py-1 border-bottom"> 
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
                </div>
            </nav>
        )
    }
}

export default topUI;