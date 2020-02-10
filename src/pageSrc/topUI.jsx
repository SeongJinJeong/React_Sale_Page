import React, { Component } from 'react';
import { IoIosLogIn } from 'react-icons/io';

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
                    <a className="py-2 d-none d-md-inline-block" href="#">소고기</a>
                    <a className="py-2 d-none d-md-inline-block" href="#">돼지고기</a>
                    <a className="py-2 d-none d-md-inline-block" href="#">닭&오리</a>
                    <a className="py-2 d-none d-md-inline-block" Style="color:red" href="#">SALE</a>
                    <a className="py-2 d-none d-md-inline-block" href="#">연락처</a>
                </div>
            </nav>
        )
    }
}

export default topUI;