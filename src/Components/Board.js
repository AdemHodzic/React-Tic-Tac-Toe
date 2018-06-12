import React, { Component } from 'react';

class Board extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      player: '1',
      board: [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
      ],
      winCombo: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ],
    }

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkForWinners = this.checkForWinners.bind(this);
    this.reset = this.reset.bind(this);
  }


  toggle() {
    if (this.state.player === '1') {
      this.setState({player: '0'});
    } else {
      this.setState({player: '1'});
    }
  }

  handleClick(e, row, col) {
    if (this.state.board[row][col] === ' ') {
      let newBoard = this.state.board.slice();
      newBoard[row][col] = this.state.player;
      if (this.checkForWinners()) {
        if (this.state.player === '1') {
          this.props.playerOneWon();
        } else {
          this.props.playerTwoWon();
        }
        this.reset();
      }
      this.toggle();
    }
  }

  checkForWinners() {
    const combinedBoard = this.state.board.join(',').split(',');
    console.log('Board', combinedBoard)
    let winner = true;

    for (const combo of this.state.winCombo) {
      winner = true;
      for (const index of combo) {
        if (combinedBoard[index] !== this.state.player) {
          console.log(combinedBoard[index])
          winner = false;
        }
      }
      if (winner) {
        break;
      }
    }
    return winner;
  }

  reset() {
    const initialBoard =  [
      [' ',' ',' '],
      [' ',' ',' '],
      [' ',' ',' ']
    ];
    this.setState({board: initialBoard.slice()});
  }

  render() {
    return (
      <div>
        <div className="row">
          <div onClick={(e) => this.handleClick(e,0, 0)}>{this.state.board[0][0]}</div>
          <div onClick={(e) => this.handleClick(e,0, 1)}>{this.state.board[0][1]}</div>
          <div onClick={(e) => this.handleClick(e,0, 2)}>{this.state.board[0][2]}</div>
        </div>
        <div className="row">
          <div onClick={(e) => this.handleClick(e, 1, 0)}>{this.state.board[1][0]}</div>
          <div onClick={(e) => this.handleClick(e, 1, 1)}>{this.state.board[1][1]}</div>
          <div onClick={(e) => this.handleClick(e, 1, 2)}>{this.state.board[1][2]}</div>
        </div>
        <div className="row">
          <div onClick={(e) => this.handleClick(e, 2, 0)}>{this.state.board[2][0]}</div>
          <div onClick={(e) => this.handleClick(e, 2, 1)}>{this.state.board[2][1]}</div>
          <div onClick={(e) => this.handleClick(e, 2, 2)}>{this.state.board[2][2]}</div>
        </div>
      </div>);
  }

}

export default Board;