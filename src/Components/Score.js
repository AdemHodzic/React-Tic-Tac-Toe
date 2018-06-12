import React, { Component } from 'react';

class Score extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const playerOnePoints = <h4>{this.props.playerOnePoints}</h4>;
    const playerTwoPoints = <h4>{this.props.playerTwoPoints}</h4>;

    return (
      <div className="score">
        <table className="table">
          <tbody>
            <tr>
              <td>Player 1</td>
              <td>Player 2</td>
            </tr>
            <tr>
              <td>{playerOnePoints}</td>
              <td>{playerTwoPoints}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Score;