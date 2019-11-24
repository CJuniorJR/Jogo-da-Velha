import React, { Component } from 'react';
import Square from './square';

class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        };

        
    }

    handleClick(i) {
        let squares = this.state.squares.slice();
        squares[i] ? console.log("") : squares[i] = this.state.xIsNext ? 'X' : 'O';

        if(squares[i] === this.state.squares[i]) {
            return null
        } else {
            this.setState({
                squares: squares,
                xIsNext: !this.state.xIsNext
            });
        }
    }
    
    renderSquare(i) {
        return (
            <Square 
                value={this.state.squares[i]} 
                handleClick={() => this.handleClick(i)}
            />

        )
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
    
            [0, 4, 8],
            [2, 4, 6]
        ]

        let winner;
    
        lines.map((line) => {
            let [a, b, c] = line;
    
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                winner = squares[a];
            }

            return null;
        });

        return winner;
    }
    
    render() {
        let winner = this.calculateWinner(this.state.squares);
        
        console.log(winner);
        return (
            <div>
                <div className={winner ? null : "status"} >
                    {winner ? `Vencedor: ${winner}` : `Próximo: ${this.state.xIsNext ? 'X' : 'O'}`}
                </div>

                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>

                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default Board;