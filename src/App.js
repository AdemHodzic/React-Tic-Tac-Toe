import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './Components/Board';

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
      <div className="container">
        <Board 
          playerOneWon={() => this.playerWon('one')}
          playerTwoWon={() => this.playerWon('two')}/>
      </div>
    );
  }
}

export default App;
