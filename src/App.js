import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './Components/Board';
import Score from './Components/Score';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playerOnePoints: 0,
      playerTwoPoints: 0,
    }
  }

  playerWon(player) {
    if (player === 'one') {
      const newPoints = this.state.playerOnePoints;
      this.setState({playerOnePoints: newPoints + 1})
    } else {
      const newPoints = this.state.playerTwoPoints;
      this.setState({playerTwoPoints: newPoints + 1})
    }
  }

  render() {
    return (
      <div >
        <h1 className="display-1 text-center">Tic-Tac-Toe</h1>
        <div className="app">
          <Board 
            playerOneWon={() => this.playerWon('one')}
            playerTwoWon={() => this.playerWon('two')}/>
          <br />
          <Score 
            playerOnePoints={this.state.playerOnePoints}
            playerTwoPoints={this.state.playerTwoPoints}/>
        </div>
      </div>
    );
  }
}

export default App;
