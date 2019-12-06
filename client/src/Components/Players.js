import React from "react";
import PlayerCard from "./PlayerCard";
import axios from "axios";

export default class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      error: ""
    };
  }

  componentDidMount() {
    console.log(`component did mount`);
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        const players = response.data;
        this.setState({ players: response.data });
        return players;
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }

  componentDidUpdate() {
    console.log(`component has updated`);
  }

  render() {
    console.log(`working`);
    console.log(this.state);
    return (
      <div>
        {this.state.players.map((curr, index) => {
          return (
            <div key={index}>
              <PlayerCard curr={curr} />
            </div>
          );
        })}
      </div>
    );
  }
}
