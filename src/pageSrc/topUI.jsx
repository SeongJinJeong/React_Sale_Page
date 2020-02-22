import React, { Component } from 'react';


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
                <a className="navbar-brand" href="#"><img src="./scriptImage/logo.png" alt="LOGO"style={navLogo}></img></a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarsExample07XL">
                <ul className="navbar-nav mr-auto pr-4 text-center">
                    {MenuList("돼지고기")}
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

const MenuList = (e) =>{
    if(e==="sale"){
        return (
            <li className="nav-item active">
                <a className="nav-link font-weight-bold ml-2 mr-2" style={navFont} id="Sale" href="#">SALE</a>
            </li>
        )
    }else{
        return(
            <li className="nav-item active">
                <a className="nav-link font-weight-bold ml-2 mr-2" style={navFont} href="#">{e}</a>
            </li>
        )
    }
    
}

// Styles Apply By Object

const navFont = {
    "fontSize":"22px"
};

const navLogo = {
    "width":"130px",
    "marginLeft":"-2em"
}

const WebTopUIStyle = {
    "background-color" : "#fff"
}

export default topUI;