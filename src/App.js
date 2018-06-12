import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './Components/Board';
import Score from './Components/Score';
import Options from './Components/Options';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      playerOnePoints: 0,
      playerTwoPoints: 0,
    }

    this.reset = this.reset.bind(this);

    this.board = React.createRef();
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

  reset() {
    this.setState({playerOnePoints: 0, playerTwoPoints: 0});
    this.board.current.reset();
  }

  render() {
    return (
      <div >
        <h1 className="display-1 text-center">Tic-Tac-Toe</h1>
        <div className="app">
          <Board 
            playerOneWon={() => this.playerWon('one')}
            playerTwoWon={() => this.playerWon('two')}
            ref = {this.board}/>
          <br />
          <Score 
            playerOnePoints={this.state.playerOnePoints}
            playerTwoPoints={this.state.playerTwoPoints}/>
          <Options reset={this.reset} />
        </div>
      </div>
    );
  }
}

export default App;
