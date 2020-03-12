import React, { Component } from "react";

class Contents extends Component {
  state = {
    productData: [],
    error: null
  };

  componentDidMount() {
    this._callAPI()
      .then(res => {
        if (
          this.props.curPage === "main" ||
          this.props.curPage === "sale" ||
          this.props.curPage === "search"
        ) {
          this.setState({
            productData: res
          });
        } else {
          this.setState({
            productData: res[0].data // here we set state the data array
          });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({
          ...this.state,
          error // here we set state occurred error
        });
      });
  }

  _callAPI = async () => {
    if (this.props.curPage !== "search") {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/http://15.165.86.96:5000/api/${this.props.curPage}`
      );
      const data = response.json();
      if (response.status !== 200) throw Error(data.message);

      return data;
    } else {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/http://15.165.86.96:5000/api/${this.props.curPage}?word=${this.props.word}`
      );
      const data = response.json();
      if (response.status !== 200) throw Error(data.message);

      return data;
    }
  };

  render() {
    const { productData, error } = this.state;
    // console.log(
    //   "In the Render : [state] =",
    //   productData,
    //   "[props] = ",
    //   this.props.curPage,
    //   " Query : ",
    //   this.props.word
    // );

    if (productData && productData.length) {
      return (
        <RenderByItemList curPage={this.props.curPage} data={productData} />
      );
    } else {
      return !!error || <div style={loadingStyle}>LOADING</div>;
    }
  }
}

// Jumbo Card Image

const Jumbo = () => {
  return (
    <section
      className="jumbotron jumbotron-fluid text-center "
      style={jumboImg}
    >
      <div className="container">
        <h1 className="font-weight-normal" style={jumboColor}>
          어서오세요!
        </h1>
        <p className="lead font-weight-light" style={jumboColor}>
          돼랑이 우랑이는 고객의 입맛에 맞는 고품질의 한우, 한돈을 판매합니다.
        </p>
        <p>
          <a href="/beef" className="btn btn-danger my-2 mx-3">
            한우 구매하기
          </a>
          <a href="/pork" className="btn btn-warning my-2">
            한돈 구매하기
          </a>
        </p>
      </div>
    </section>
  );
};

// Product List

const ItemBox = props => {
  const titleName = name => {
    switch (name) {
      case "beef":
        return "소고기";
      case "pork":
        return "돼지고기";
      case "sale":
        return <p id="Sale">SALE</p>;
      case "else":
        return "기타";
      case "search":
        return "검색 결과";
      default:
        break;
    }
  };
  return (
    <>
      <div
        className={
          props.lastItemBox
            ? "border-dark mr-5 ml-5 text-center"
            : "border-dark mr-5 ml-5 text-center"
        }
        style={itemBoxStyle}
      >
        <div>
          <h2
            className="text-center font-weight-bold pt-5"
            style={itemBoxTitle}
          >
            {titleName(props.curPage)}
          </h2>
        </div>
        <div className="rounded text-center d-inline container ml-4">
          <div className="row justify-content-center text-center">
            <ItemCard data={props.data} curPage={props.curPage} />
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};
// Render each product
const ItemCard = props => {
  let a = props.data;
  if (props.curPage == "main") {
    return a.map((a, index) => {
      // console.log("Sort Each Category's Array : ", a);
      return a.map((a, index) => {
        return (
          <div className="card col-md-4 m-3" style={itemCardStyle} key={index}>
            {/* {a.sale? <img src="./scriptImage/sale.png" />: null } */}
            {a.sale ? (
              <p id="Sale" style={itemCardSale}>
                Sale
              </p>
            ) : null}
            <img
              src={a.img ? a.img : "./scriptImage/pork.png"}
              className="card-img-top"
              alt="..."
              style={a.sale ? itemCardImg : itemcardImg2}
            />
            <div className="card-body">
              <h5 className="card-title">
                <b>{a.productName}</b>
              </h5>
              <p className="card-text">
                가격 :
                <p style={a.sale ? priceLineThrough : priceMargin}>
                  ₩ {numberWithCommas(a.price)}{" "}
                  <p style={unitStyle}>{a.unit ? ` / ${a.unit}` : null}</p>
                </p>
                {a.sale ? (
                  <p style={priceMargin}>₩ {numberWithCommas(a.salePrice)} </p>
                ) : null}
                <br />
                {a.grade ? `등급 : ${a.grade}` : null}
              </p>
            </div>
          </div>
        );
      });
    });
  } else if (props.curPage == "sale") {
    return a.map((a, index) => {
      // console.log("Sort Each Category's Array : ", a);
      return a.map((a, index) => {
        if (a.sale == true) {
          return (
            <div
              className="card col-md-4 m-3"
              style={itemCardStyle}
              key={index}
            >
              {/* {a.sale? <img src="./scriptImage/sale.png" />: null } */}
              {/* <p id="Sale" style={itemCardSale}>
                Sale
              </p> */}
              <img
                src={a.img ? a.img : "./scriptImage/pork.png"}
                className="card-img-top"
                alt="..."
                style={itemCardImg}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>{a.productName}</b>
                </h5>
                <p className="card-text">
                  가격 :{" "}
                  <p style={a.sale ? priceLineThrough : priceMargin}>
                    ₩ {numberWithCommas(a.price)}{" "}
                    <p style={unitStyle}>{a.unit ? ` / ${a.unit}` : null}</p>
                  </p>
                  {a.sale ? (
                    <p style={priceMargin}>
                      ₩ {numberWithCommas(a.salePrice)}{" "}
                    </p>
                  ) : null}
                  <br />
                  {a.grade ? `등급 : ${a.grade}` : null}
                </p>
              </div>
            </div>
          );
        }
      });
    });
  } else {
    return a.map((a, index) => {
      return (
        <div className="card col-md-4 m-3" style={itemCardStyle} key={index}>
          {/* {a.sale? <img src="./scriptImage/sale.png" />: null } */}
          {a.sale ? (
            <p id="Sale" style={itemCardSale}>
              Sale
            </p>
          ) : null}
          <img
            src={a.img ? a.img : "./scriptImage/pork.png"}
            className="card-img-top"
            alt="..."
            style={a.sale ? itemCardImg : itemcardImg2}
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>{a.productName}</b>
            </h5>
            <p className="card-text">
              가격 :{" "}
              <p style={a.sale ? priceLineThrough : priceMargin}>
                ₩ {numberWithCommas(a.price)}{" "}
                <p style={unitStyle}>{a.unit ? ` / ${a.unit}` : null}</p>
              </p>
              {a.sale ? (
                <p style={priceMargin}>₩ {numberWithCommas(a.salePrice)} </p>
              ) : null}
              <br />
              {a.grade ? `등급 : ${a.grade}` : null}
            </p>
          </div>
        </div>
      );
    });
  }
};
// Different Render by Current Page
const RenderByItemList = props => {
  //   console.log("In the renderbyitemList : ", props.data, props.curPage);
  switch (props.curPage) {
    case "main": {
      return (
        <>
          <Jumbo />
          <ItemBox data={props.data} curPage={props.curPage} lastItemBox />
        </>
      );
    }
    case "pork": {
      return (
        <>
          <ItemBox data={props.data} curPage={props.curPage} lastItemBox />
        </>
      );
    }
    case "beef": {
      return (
        <>
          <ItemBox data={props.data} curPage={props.curPage} lastItemBox />
        </>
      );
    }
    case "sale": {
      return (
        <>
          <ItemBox data={props.data} curPage={props.curPage} lastItemBox />
        </>
      );
    }
    case "else": {
      return (
        <>
          <ItemBox data={props.data} curPage={props.curPage} lastItemBox />
        </>
      );
    }
    case "search": {
      return (
        <>
          <ItemBox data={props.data} curPage={props.curPage} lastItemBox />
        </>
      );
    }
    default: {
      return (
        <>
          <Jumbo />
          <p>Can't find resoure.. Error Occured!</p>
        </>
      );
    }
  }
};
// Give comma to numbers
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// Styles Apply By Object
const loadingStyle = {
  textAlign: "center",
  fontWeight: "bold"
};
const jumboImg = {
  height: "320px",
  backgroundImage: "url('./scriptImage/JumboImage.jpg')",
  backgroundSize: "120%",
  backgroundPosition: "10% 30%"
};
const jumboColor = {
  color: "white"
};
const itemCardStyle = {
  maxWidth: "300px",
  height: "auto"
};
const itemCardImg = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "20px",
  borderRadius: "30%",
  maxWidth: "200px",
  maxHeight: "150px"
};
const itemcardImg2 = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "50px",
  borderRadius: "30%",
  maxWidth: "200px",
  maxHeight: "150px"
};
const itemCardSale = {
  fontSize: "30px",
  fontWeight: "bold",
  marginBottom: "-20px"
};
const priceLineThrough = {
  textDecoration: "line-through",
  margin: 0
};
const priceMargin = {
  margin: 0,
  fontWeight: "bold"
};

const unitStyle = {
  color: "green",
  fontWeight: "normal",
  display: "inline"
};
const itemBoxStyle = {
  backgroundColor: "#fff",
  "marginTop,marginBottom": "0px"
};
const itemBoxTitle = {
  color: "#2b2b28"
};
export default Contents;
