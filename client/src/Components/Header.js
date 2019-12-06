import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="appHeader">
        <h1>Women's World Cup Player Rank</h1>
        <div className="darkMode">
          <p>Dark Mode:</p>
          <div className="slidingBtn">
            <div className="btnSpot"></div>
          </div>
        </div>
      </div>
    );
  }
}
