import React, { Component } from 'react';
import {StateConsumer} from '../../Store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



class topUI extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginStatus : false,
            dump : '',
            curPage : '',
        };

        this.handleClick = this.handleClick.bind(this)
    }
    state = {
        loginStatus : false,
        dump : '',
        curPage : '',
    };

    handleClick = (menu) => {
        this.setState({
            curPage : menu
        })
    }   

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
        // console.log(responseData.dump.express)
        return (
            <>
                <WebTopUI data = {responseData} />
            </>
        )
    }
}

// Render Whole Top UI

const WebTopUI = (props) => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light pl-5 d-flex justify-content-between border-dark border-bottom" style={WebTopUIStyle}>
            <div className="container pr-4">
                <Link to="/"><img src="./scriptImage/logo.png" alt="LOGO"style={navLogo}></img></Link>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarsExample07XL">
                <ul className="navbar-nav mr-auto pr-4 text-center">
                    {MenuList("소고기")}
                    {MenuList("돼지고기")}
                    {MenuList("sale")}
                    {MenuList("기타")}
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

// Render Menu List By Map Func

const MenuList = (e,data) =>{
    let menu = '';
    switch(e){
        case "소고기" : menu= "beef"; break;
        case "돼지고기" : menu = "pork"; break;
        case "기타" : menu = "else"; break;
        case "sale" : menu = "sale"; break;
    }
    if(e==="sale"){
        return (
            <li className="nav-item active">
                <Link to={menu} className="nav-link font-weight-bold ml-2 mr-2" style={navFont} id="Sale">{e.toUpperCase()}</Link>
            </li>
        )
    }else{
        return(
            <li className="nav-item active">
                <Link to={menu} className="nav-link font-weight-bold ml-2 mr-2" style={navFont}>{e}</Link>
            </li>
        )
    }
    
}




// Styles Apply By Object

const navFont = {
    "fontSize":"22px",
    "textDecoration":"none"
};

const navLogo = {
    "width":"130px",
    "marginLeft":"-2em"
}

const WebTopUIStyle = {
    "backgroundColor" : "#fff"
}

export default topUI;