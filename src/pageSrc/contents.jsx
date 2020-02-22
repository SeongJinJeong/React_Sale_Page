import React, { Component } from 'react';
import {StateConsumer} from '../Store';

const itemList = ['돼지고기','소고기','닭&오리','Sale','연락처']

class Contents extends Component {

    render(){
        return(
            <>
                <StateConsumer>
                    {
                        (data)=>{
                            const e = data.state.curPage;
                            console.log(e);
                            return <RenderByItemList curPage = {e}/>
                        }
                    }
                </StateConsumer>
            </>
        )
    }
}

// Jumbo Card Image

const Jumbo = (e) =>{
    return (
        <section className="jumbotron jumbotron-fluid text-center " style={jumboImg} >
            <div className="container">
                <h1 className = "font-weight-normal" style={jumboColor}>어서오세요!</h1>
                <p className="lead font-weight-light" style={jumboColor}>돼랑이 우랑이는 고객의 입맛에 맞는 고품질의 한우, 한돈을 판매합니다.</p>
                <p>
                    <a href="#" className="btn btn-danger my-2 mx-3">한우 구매하기</a>
                    <a href="#" className="btn btn-warning my-2">한돈 구매하기</a>
                </p>
            </div>
        </section>
    );
}

// Product List

const ItemBox = (props) => {
    return (
        <>
            <div className={props.lastItemBox ? "border-dark mr-5 ml-5 text-center":"border-dark mr-5 ml-5 text-center"} style={itemBoxStyle} >
                <div>
                    <h2 className="text-center font-weight-bold pt-5" style={itemBoxTitle}>{props.item}</h2>
                </div>
                <div className="rounded text-center d-inline container ml-4"><div className="row justify-content-center text-center"><ItemCard /></div></div>
            </div>
            <br />
            <br />
        </>
    )
}

// Render each product

const ItemCard = () => {

    let a = [0,1,2,3,4,5];
    return(
        a.map((a,index)=>{
            return(
                <div className="card col-md-4 m-3" style={itemCardWidth} key={index}>
                    <img src="./scriptImage/pork.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            )
        })
    )
}

// Different Render by Current Page

const RenderByItemList = (props) =>{
    const e = props.curPage;
    switch(e){
        case "main": {
            return(
                <>
                    <Jumbo />
                    <ItemBox item={itemList[0]} />
                    <ItemBox item={itemList[1]} lastItemBox /> 
                </>
            )
        }
        case "pork" : {
            return(
                <>
                    <ItemBox item={itemList[0]} />
                    {/* <ItemBox item={itemList[1]} lastItemBox /> */}
                </>
            )
        }
        case "beef" : {
            return(
                <>
                    {/* <ItemBox item={itemList[0]} /> */}
                    <ItemBox item={itemList[1]} lastItemBox />
                </>
            )
        }
        case "sale" : {
            return(
                <>
                    {/* <ItemBox item={itemList[0]} /> */}
                    <ItemBox item={itemList[1]} lastItemBox />
                </>
            )
        }
        case "else" : {
            return(
                <>
                    <ItemBox item={itemList[0]} />
                    <ItemBox item={itemList[1]} lastItemBox />
                </>
            )
        }
        default:{
            return(
                <>
                    <Jumbo />
                    <ItemBox item={itemList[0]} />
                    <ItemBox item={itemList[1]} lastItemBox /> 
                </>
            )
        }
    }
}



// Styles Apply By Object

const jumboImg = {
    "height" : "300px",
    "backgroundImage":"url('./scriptImage/JumboImage.jpg')",
    "backgroundPosition":"center center"
}

const jumboColor = {
    "color" : "white"
}

const itemCardWidth = {
    "maxWidth":"300px"
}

const itemBoxStyle = {
    "background-color" : "#fff",
    "margin-top,margin-bottom" : "0px"
}

const itemBoxTitle = {
    "color" : "#2b2b28"
}

export default Contents;