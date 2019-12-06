import React from "react";

export default class PlayerCard extends React.Component {
  render() {
    return (
      <div className="playerCard">
        <h3>{this.props.curr.name}</h3>
        <div className="playerInfo">
          <span>Country: {this.props.curr.country}</span>
          <span>Searches: {this.props.curr.searches}</span>
        </div>
      </div>
    );
  }
}
