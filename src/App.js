import React, {Component} from 'react';
import Display from './Display';

class App extends Component {
    constructor() {
        super()
        this.state = {
            player: 'X',
            gameplay: [],
            winner: '',
            arr: [],
            gametype: 'Bot',
        }
    }

    distinct = (value, index, self) => {
        return self.indexOf(value) === index;
    }

    onClick = (event) => {
        const {player, gameplay, arr, winner, gametype} = this.state;
        const i = event.currentTarget.id;
        if(!arr.includes(i) && !winner) {
            const newgp = gameplay.slice();
            newgp[i] = player;
            const newarr = arr.filter(this.distinct).slice();
            newarr.push(i);
            this.setState({gameplay: newgp, arr: newarr});
            
            if (gametype === '2P') {
                if (player === 'X')
                    this.setState({player: 'O'}, () => {this.chk_winner()});
                else
                    this.setState({player: 'X'}, () => {this.chk_winner()});
            } else {
                this.setState({player: 'O'}, () => {this.chk_winner()});
                if (winner)
                    this.setState({player:'O'})
                else if (!winner && arr.length < 7)
                    this.setState({player: 'O'}, () => {this.bot_turn()});
            }
        }
    }

    OnePlayer = (event) => {
        this.setState({player: 'X', gameplay: [], winner: '', arr: [], gametype: 'Bot'});
    }
    
    TwoPlayer = (event) => {
        this.setState({player: 'X', gameplay: [], winner: '', arr: [], gametype: '2P'});
    }

    reset_game = (event) => {
        this.setState({player: 'X', gameplay: [], winner: '', arr: []});
    }

    bot_turn = (event) => {
        const {player, gameplay, arr, winner} = this.state;
        const i = (Math.floor(Math.random() * 9)).toString();
        if (arr.includes(i)) {
            this.bot_turn();
        } else if (!arr.includes(i) && !winner) {
            const newgp = gameplay.slice();
            newgp[i] = player;
            const newarr = arr.filter(this.distinct).slice();
            newarr.push(i);
            this.setState({gameplay: newgp, arr: newarr, player: 'X'}, () => {this.chk_winner()});
        }
    }

    chk_winner = () => {
        const {gameplay, arr} = this.state;
        const winchk = gameplay.slice();
        if ((winchk[0] === 'X' && winchk[1] === 'X' && winchk[2] === 'X') || (winchk[3] === 'X' && winchk[4] === 'X' && winchk[5] === 'X') || (winchk[6] === 'X' && winchk[7] === 'X' && winchk[8] === 'X') || (winchk[0] === 'X' && winchk[3] === 'X' && winchk[6] === 'X') || (winchk[2] === 'X' && winchk[5] === 'X' && winchk[8] === 'X') || (winchk[0] === 'X' && winchk[4] === 'X' && winchk[8] === 'X') || (winchk[2] === 'X' && winchk[4] === 'X' && winchk[6] === 'X') || (winchk[1] === 'X' && winchk[4] === 'X' && winchk[7] === 'X')) {
                this.setState({winner: 'WINNER IS PLAYER X'});
                document.querySelector("#player").innerHTML = '';
            }
            else if ((winchk[0] === 'O' && winchk[1] === 'O' && winchk[2] === 'O') || (winchk[3] === 'O' && winchk[4] === 'O' && winchk[5] === 'O') || (winchk[6] === 'O' && winchk[7] === 'O' && winchk[8] === 'O') || (winchk[0] === 'O' && winchk[3] === 'O' && winchk[6] === 'O') || (winchk[2] === 'O' && winchk[5] === 'O' && winchk[8] === 'O') || (winchk[0] === 'O' && winchk[4] === 'O' && winchk[8] === 'O') || (winchk[2] === 'O' && winchk[4] === 'O' && winchk[6] === 'O') || (winchk[1] === 'O' && winchk[4] === 'O' && winchk[7] === 'O')) {
                this.setState({winner: 'WINNER IS PLAYER O'});
                document.querySelector("#player").innerHTML = '';
            }
            else if (arr.length === 9) {
                this.setState({winner: 'DRAW'});
                document.querySelector("#player").innerHTML = '';
            }
    }

    render() {
        const {player, gameplay, text, winner} = this.state;
        return (
            <div className='tc'>
                <Display player={'PLAYER ' + player} val={gameplay} clk={this.onClick} Bot={this.OnePlayer} TwoP={this.TwoPlayer} reset={this.reset_game} disp_text={text} winner={winner}/>
            </div>
        );
    }
}

export default App;