import React, { Component } from "react";

class footer extends Component {
  render() {
    return (
      <div
        className="text-center sticky-bottom border-top border-dark"
        style={footerStyle}
      >
        <p style={footerStyle}>
          주소 :
          <a href="http://naver.me/5qOzvbD4">서울 송파구 백제고분로31길 25</a>
        </p>
        <p className="d-inline" style={footerStyle}>
          All Copyrights Deserved from Seong Jin Jeong /
        </p>
        <p className="d-inline"> Copyrights © 2020 Jeong Seong Jin</p>
      </div>
    );
  }
}

const footerStyle = {
  margin: 0
};

export default footer;
