import React from "react";
import useDarkMode from "../Helpers/useDarkMode";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidUpdate() {
    document.addEventListener("click", this.toggle);
    useDarkMode(this.state.darkMode);
  }

  toggle(e) {
    this.setState(prevState => ({ darkMode: !prevState.darkMode }));
    console.log(this.state);
  }

  render() {
    return (
      <div className="appHeader">
        <h1>Women's World Cup Player Rank</h1>
        <div className="darkModeBtn">
          <p>Dark Mode:</p>
          <div className="slidingBtn">
            <span>OFF</span>
            <span>ON</span>
            <div className="btnSpot" onClick={this.toggle}></div>
          </div>
        </div>
      </div>
    );
  }
}
