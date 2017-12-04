import React, { Component } from 'react';
import './App.css';
import Board from './Board.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardToCreate: '',
      boards: JSON.parse(localStorage.getItem('boards')) || []
    }

    this.handleBoardNameChange = this.handleBoardNameChange.bind(this);
    this.createBoard = this.createBoard.bind(this);
  }

  handleBoardNameChange(event) {
    this.setState({ boardToCreate: event.target.value })
  }

  createBoard() {
    const boardName = this.state.boardToCreate;

    if (!boardName) { return false }

    // Get list of boards, if there isn't one create an empty array
    let boards = JSON.parse(localStorage.getItem('boards')) || []
    boards.push({ 'boardName': boardName, boardId: boards.length });
    this.setState({ boards: boards, boardToCreate: ''});

    localStorage.setItem('boards', JSON.stringify(boards));
  }

  render() {
    const boardsToRender = this.state.boards.map((board) => <Board key={board.boardId} name={board.boardName}/>);
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="create-board">
          <h2>Create a new board</h2>
          <input type="text" name="board-name"
            value={this.state.boardToCreate}
            onChange={this.handleBoardNameChange} />
          <input type="submit" onClick={this.createBoard} />
        </div>
        <div className="boards">
          {boardsToRender}
        </div>
      </div>
    );
  }
}

export default App;
