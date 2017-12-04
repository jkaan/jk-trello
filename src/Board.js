import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
  render() {
    return (
      <div className="board">
        {this.props.name}
      </div>
    );
  }
}

export default Board;
