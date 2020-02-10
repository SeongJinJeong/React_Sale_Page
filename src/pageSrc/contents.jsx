import React, { Component } from 'react';

const itemList = ['돼지고기','소고기','닭&오리','Sale','연락처']


class Contents extends Component {

    state={
        
    }

    render(){
        return(
            <>
                <Jumbo />
                <ItemBox item={itemList[0]} />
            </>
        )
    }
}

const Jumbo = () =>{
    return (
        <section className="jumbotron jumbotron-fluid text-center" Style="height : 300px;">
            <div className="container">
            <h1 className = "font-weight-normal">어서오세요!</h1>
            <p className="lead text-muted font-weight-light">돼랑이 우랑이는 고객의 입맛에 맞는 고품질의 한우, 한돈을 판매합니다.</p>
            <p>
                <a href="#" className="btn btn-danger my-2" Style="margin : 10px;">한우 구매하기</a>
                <a href="#" className="btn btn-warning my-2">한돈 구매하기</a>
            </p>
            </div>
        </section>
    );
}

const ItemBox = (props) => {
    return (
        <div className="border border-dark mr-5 ml-5 text-center">
            <h2 className="text-center mt-4 mb-4 font-weight-bold">{props.item}</h2>
            <div className="rounded text-center d-inline container" Style="margin-left:20px"><div className="row" Style="text-align:center"><ItemCard /></div></div>
        </div>
    )
}

const ItemCard = () => {

    let a = [0,1,2,3,4,5,6,7,8,9];
    return(
        a.map(a=>{
            return(
                <div className="card col-md-4 m-3" Style="max-width: 500px;">
                    <img src="..." className="card-img-top" alt="..." />
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

export default Contents;