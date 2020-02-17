import React, { Component } from 'react';
import styled, {keyframes,css} from 'styled-components';


class topUI extends Component {
    state = {
        loginStatus : false,
        dump : '',
    };

    componentDidMount(){
        this.callApi()
        .then(res=>{this.setState({
            loginStatus : false,
            dump : res
        })})
        .catch(error=>{console.log(error)})
    }

    callApi = async () =>{
        const response = await fetch('/api/hello');
        const data = response.json();
        if(response.status !== 200) throw Error(data.message)

        return data;
    }

    render (){
        const responseData = this.state;
        console.log(responseData.dump.express)
        return (
            <>
                <WebTopUI data = {responseData}/>
            </>
        )
    }
}

const WebTopUI = (props) => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light ml-5 d-flex justify-content-between">
            <div className="container pr-4">
                <a className="navbar-brand" href="#"><img src="./scriptImage/logo.png" Style="width:130px; margin-left:-2em"></img></a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarsExample07XL">
                <ul className="navbar-nav mr-auto pr-4 text-center">
                    <li className="nav-item active">
                        <a className="nav-link font-weight-bold ml-2 mr-2" Style="font-size:22px"href="#">돼지고기</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link font-weight-bold ml-2 mr-2" Style="font-size:22px"href="#">소고기</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link font-weight-bold ml-2 mr-2" Style="font-size:22px"id="Sale" href="#">SALE</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link font-weight-bold ml-2 mr-2" Style="font-size:22px"href="#">기타</a>
                    </li>
                </ul>
                <form className="form-inline row">
                    <input className="form-control col-9" type="text" placeholder={props.data.dump.express} aria-label="Search"></input>
                    <button className="btn btn-info col-3" type="submit"> 검색 </button>
                </form>
                </div>
            </div>
        </nav>
    </>
    )
}

const MobileTopUI = () =>{
    return(
            <a className="py-2 d-sm-none d-inline-flex font-weight-bold text-dark float-right" Style="text-decoration:none; margin-top:-50px" href="#"><span className="navbar-toggler-icon"></span></a>
    )
}

export default topUI;