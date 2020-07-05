import React, {Component} from 'react';
import Display from './Display';

class App extends Component {
    constructor() {
        super()
        this.state = {
            player: 'X',
            gameplay: [['','',''],['','',''],['','','']],
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
        let i = event.currentTarget.id;
        if(!arr.includes(i) && !winner) {
            const newarr = arr.filter(this.distinct).slice();
            const newgp = gameplay.slice();
            newarr.push(i);
            let w = -1;
            if (i >= 0 && i <= 2)
                w = 0;
            else if (i >= 3 && i <= 5) {
                w = 1;
                i = i - 3;
            }
            else if (i >= 6 && i <= 8) {
                w = 2;
                i = i - 6;
            }
            newgp[w][i] = player;
            this.setState({gameplay: newgp, arr: newarr});
            
            if (gametype === '2P') {
                if (player === 'X')
                    this.setState({player: 'O'}, () => {this.chk_winner()});
                else
                    this.setState({player: 'X'}, () => {this.chk_winner()});
            } else if (gametype === 'Bot') {
                this.setState({player: 'O'}, () => {this.chk_winner()});
                if (winner)
                    this.setState({player:'O'})
                else if (!winner && arr.length < 7)
                    this.setState({player: 'O'}, () => {this.bot_turn()});
            } else if (gametype === 'BotHard') {
                this.setState({player: 'O'}, () => {this.chk_winner()});
                if (winner)
                    this.setState({player:'O'})
                else if (!winner && arr.length < 7)
                    this.setState({player: 'O'}, () => {this.bot_hard_turn()});
            }
        }
    }

    OnePlayer = (event) => {
        this.setState({player: 'X', gameplay: [['','',''],['','',''],['','','']], winner: '', arr: [], gametype: 'Bot'});
    }
    
    TwoPlayer = (event) => {
        this.setState({player: 'X', gameplay: [['','',''],['','',''],['','','']], winner: '', arr: [], gametype: '2P'});
    }

    BotHard = (event) => {
        this.setState({player: 'X', gameplay: [['','',''],['','',''],['','','']], winner: '', arr: [], gametype: 'BotHard'});
    }

    reset_game = (event) => {
        this.setState({player: 'X', gameplay: [['','',''],['','',''],['','','']], winner: '', arr: []});
        document.querySelector("#player").innerHTML = 'PLAYER X';
    }

    bot_turn = (event) => {
        const {player, gameplay, arr, winner} = this.state;
        let i = (Math.floor(Math.random() * 9)).toString();
        if (arr.includes(i)) {
            this.bot_turn();
        } else if (!arr.includes(i) && !winner) {
            const newarr = arr.filter(this.distinct).slice();
            const newgp = gameplay.slice();
            newarr.push(i);
            let w = -1;
            if (i >= 0 && i <= 2)
                w = 0;
            else if (i >= 3 && i <= 5) {
                w = 1;
                i = i - 3;
            }
            else if (i >= 6 && i <= 8) {
                w = 2;
                i = i - 6;
            }
            newgp[w][i] = player;
            this.setState({gameplay: newgp, arr: newarr, player: 'X'}, () => {this.chk_winner()});
        }
    }

    bot_hard_turn = (event) => {
        const {player, gameplay, arr} = this.state;
        const newgp = gameplay.slice();
        const newarr = arr.filter(this.distinct).slice();
        let i = -1;
        if (newarr.length === 1) {
            if (newgp[1][1] === 'X')
                i = 0;
            else if (newgp[0][0] === 'X' || newgp[0][2] === 'X' || newgp[2][0] === 'X' || newgp[2][2] === 'X')
                i = 4;
            else if (newgp[0][1] === 'X')
                i = 0;
            else if (newgp[1][0] === 'X')
                i = 0;
            else if (newgp[1][2] === 'X')
                i = 8;
            else if (newgp[2][1] === 'X')
                i = 8;
        } else {
            i = this.chkO();
            if (i === -1)
                i = this.chkX();
            if (i === -1)
                i = this.randO();
        }
        newarr.push(i);
        let w = -1;
        if (i >= 0 && i <= 2)
            w = 0;
        else if (i >= 3 && i <= 5) {
            w = 1;
            i = i - 3;
        }
        else if (i >= 6 && i <= 8) {
            w = 2;
            i = i - 6;
        }
        newgp[w][i] = player;
        this.setState({gameplay: newgp, arr: newarr, player: 'X'}, () => {this.chk_winner()});
    }

    chkO = (element) => {
        const {gameplay} = this.state;
        const newgp = gameplay.slice();
        let i = -1;
        if (!newgp[0][0] && newgp[0][1] === 'O' && newgp[0][2] === 'O')
            i = 0;
        else if (newgp[0][0] === 'O' && !newgp[0][1] && newgp[0][2] === 'O')
            i = 1;
        else if (newgp[0][0] === 'O' && newgp[0][1] === 'O' && !newgp[0][2])
            i = 2;
        else if (!newgp[1][0] && newgp[1][1] === 'O' && newgp[1][2] === 'O')
            i = 3;
        else if (newgp[1][0] === 'O' && !newgp[1][1] && newgp[1][2] === 'O' )
            i = 4;
        else if (newgp[1][0] === 'O' && newgp[1][1] === 'O' && !newgp[1][2])
            i = 5;
        else if (!newgp[2][0] && newgp[2][1] === 'O' && newgp[2][2] === 'O')
            i = 6;
        else if (newgp[2][0] === 'O' && !newgp[2][1] && newgp[2][2] === 'O' )
            i = 7;
        else if (newgp[2][0] === 'O' && newgp[2][1] === 'O' && !newgp[2][2])
            i = 8;
        else if (!newgp[0][0] && newgp[1][0] === 'O' && newgp[2][0] === 'O')
            i = 0;
        else if (newgp[0][0] === 'O' && !newgp[1][0] && newgp[2][0] === 'O' )
            i = 3;
        else if (newgp[0][0] === 'O' && newgp[1][0] === 'O' && !newgp[2][0])
            i = 6;
        else if (!newgp[0][1] && newgp[1][1] === 'O' && newgp[2][1] === 'O')
            i = 1;
        else if (newgp[0][1] === 'O' && !newgp[1][1] && newgp[2][1] === 'O' )
            i = 4;
        else if (newgp[0][1] === 'O' && newgp[1][1] === 'O' && !newgp[2][1])
            i = 7;
        else if (!newgp[0][2] && newgp[1][2] === 'O' && newgp[2][2] === 'O')
            i = 2;
        else if (newgp[0][2] === 'O' && !newgp[1][2] && newgp[2][2] === 'O' )
            i = 5;
        else if (newgp[0][2] === 'O' && newgp[1][2] === 'O' && !newgp[2][2])
            i = 8;
        else if (!newgp[0][0] && newgp[1][1] ==='O' && newgp[2][2] === 'O' )
            i = 0;
        else if (newgp[0][0] === 'O' && !newgp[1][1] && newgp[2][2] === 'O' )
            i = 4;
        else if (newgp[0][0] === 'O' && newgp[1][1] === 'O' && !newgp[2][2])
            i = 8;
        else if (!newgp[0][2] && newgp[1][1] ==='O' && newgp[2][0] === 'O' )
            i = 2;
        else if (newgp[0][2] === 'O' && !newgp[1][1] && newgp[2][0] === 'O' )
            i = 4;
        else if (newgp[0][2] === 'O' && newgp[1][1] === 'O' && !newgp[2][0])
            i = 6;
        return i;
    }

    chkX = (element) => {
        const {gameplay} = this.state;
        const newgp = gameplay.slice();
        let i = -1;
        if (!newgp[0][0] && newgp[0][1] === 'X' && newgp[0][2] === 'X')
            i = 0;
        else if (newgp[0][0] === 'X' && !newgp[0][1] && newgp[0][2] === 'X')
            i = 1;
        else if (newgp[0][0] === 'X' && newgp[0][1] === 'X' && !newgp[0][2])
            i = 2;
        else if (!newgp[1][0] && newgp[1][1] === 'X' && newgp[1][2] === 'X')
            i = 3;
        else if (newgp[1][0] === 'X' && !newgp[1][1] && newgp[1][2] === 'X' )
            i = 4;
        else if (newgp[1][0] === 'X' && newgp[1][1] === 'X' && !newgp[1][2])
            i = 5;
        else if (!newgp[2][0] && newgp[2][1] === 'X' && newgp[2][2] === 'X')
            i = 6;
        else if (newgp[2][0] === 'X' && !newgp[2][1] && newgp[2][2] === 'X' )
            i = 7;
        else if (newgp[2][0] === 'X' && newgp[2][1] === 'X' && !newgp[2][2])
            i = 8;
        else if (!newgp[0][0] && newgp[1][0] === 'X' && newgp[2][0] === 'X')
            i = 0;
        else if (newgp[0][0] === 'X' && !newgp[1][0] && newgp[2][0] === 'X' )
            i = 3;
        else if (newgp[0][0] === 'X' && newgp[1][0] === 'X' && !newgp[2][0])
            i = 6;
        else if (!newgp[0][1] && newgp[1][1] === 'X' && newgp[2][1] === 'X')
            i = 1;
        else if (newgp[0][1] === 'X' && !newgp[1][1] && newgp[2][1] === 'X' )
            i = 4;
        else if (newgp[0][1] === 'X' && newgp[1][1] === 'X' && !newgp[2][1])
            i = 7;
        else if (!newgp[0][2] && newgp[1][2] === 'X' && newgp[2][2] === 'X')
            i = 2;
        else if (newgp[0][2] === 'X' && !newgp[1][2] && newgp[2][2] === 'X' )
            i = 5;
        else if (newgp[0][2] === 'X' && newgp[1][2] === 'X' && !newgp[2][2])
            i = 8;
        else if (!newgp[0][0] && newgp[1][1] ==='X' && newgp[2][2] === 'X' )
            i = 0;
        else if (newgp[0][0] === 'X' && !newgp[1][1] && newgp[2][2] === 'X' )
            i = 4;
        else if (newgp[0][0] === 'X' && newgp[1][1] === 'X' && !newgp[2][2])
            i = 8;
        else if (!newgp[0][2] && newgp[1][1] ==='X' && newgp[2][0] === 'X' )
            i = 2;
        else if (newgp[0][2] === 'X' && !newgp[1][1] && newgp[2][0] === 'X' )
            i = 4;
        else if (newgp[0][2] === 'X' && newgp[1][1] === 'X' && !newgp[2][0])
            i = 6;
        return i;
    }

    randO = (element) => {
        const {gameplay, arr} = this.state;
        const newgp = gameplay.slice();
        let i = -1;
        if (arr.length === 3 && newgp[1][1] === 'X' && newgp[0][0] === 'O' && newgp[2][2] === 'X')
                i = 2;
        else if (arr.length === 3 && newgp[1][1] === 'O') {
            if (newgp[0][0] === 'X' && newgp[2][1] === 'X')
                i = 6;
            else if (newgp[0][0] === 'X' && newgp[1][2] === 'X')
                i = 2;
            else if (newgp[0][0] === 'X' && newgp[2][2] === 'X')
                i = 5;
            else if (newgp[0][2] === 'X' && newgp[2][0] === 'X')
                i = 3;
            else if (newgp[0][2] === 'X' && newgp[2][1] === 'X')
                i = 8;
            else if (newgp[0][2] === 'X' && newgp[1][0] === 'X')
                i = 0;
            else if (newgp[2][0] === 'X' && newgp[0][1] === 'X')
                i = 0;
            else if (newgp[2][0] === 'X' && newgp[1][2] === 'X')
                i = 8;
            else if (newgp[2][2] === 'X' && newgp[0][1] === 'X')
                i = 2;
            else if (newgp[2][2] === 'X' && newgp[1][0] === 'X')
                i = 6;
        }
        else if (arr.length === 3 && newgp[1][1] !== 'X' && newgp[1][1] !== 'O')
            i = 4;
        else {
            if (!newgp[0][0])
                i = 0;
            else if (!newgp[0][2])
                i = 2;
            else if (!newgp[2][0])
                i = 6;
            else if (!newgp[2][2])
                i = 8;
            else if (!newgp[0][1])
                i = 1;
            else if (!newgp[1][0])
                i = 3;
            else if (!newgp[1][2])
                i = 5;
            else if (!newgp[2][1])
                i = 7;
        }
        return i;
    }

    chk_winner = () => {
        const {gameplay, arr} = this.state;
        const winchk = gameplay.slice();
        if ((winchk[0][0] === 'X' && winchk[0][1] === 'X' && winchk[0][2] === 'X') || (winchk[1][0] === 'X' && winchk[1][1] === 'X' && winchk[1][2] === 'X') || (winchk[2][0] === 'X' && winchk[2][1] === 'X' && winchk[2][2] === 'X') || (winchk[0][0] === 'X' && winchk[1][0] === 'X' && winchk[2][0] === 'X') || (winchk[0][1] === 'X' && winchk[1][1] === 'X' && winchk[2][1] === 'X') || (winchk[0][2] === 'X' && winchk[1][2] === 'X' && winchk[2][2] === 'X') || (winchk[0][0] === 'X' && winchk[1][1] === 'X' && winchk[2][2] === 'X') || (winchk[0][2] === 'X' && winchk[1][1] === 'X' && winchk[2][0] === 'X')) {
                this.setState({winner: 'WINNER IS PLAYER X'});
                document.querySelector("#player").innerHTML = '';
            }
            else if ((winchk[0][0] === 'O' && winchk[0][1] === 'O' && winchk[0][2] === 'O') || (winchk[1][0] === 'O' && winchk[1][1] === 'O' && winchk[1][2] === 'O') || (winchk[2][0] === 'O' && winchk[2][1] === 'O' && winchk[2][2] === 'O') || (winchk[0][0] === 'O' && winchk[1][0] === 'O' && winchk[2][0] === 'O') || (winchk[0][1] === 'O' && winchk[1][1] === 'O' && winchk[2][1] === 'O') || (winchk[0][2] === 'O' && winchk[1][2] === 'O' && winchk[2][2] === 'O') || (winchk[0][0] === 'O' && winchk[1][1] === 'O' && winchk[2][2] === 'O') || (winchk[0][2] === 'O' && winchk[1][1] === 'O' && winchk[2][0] === 'O')) {
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
                <Display player={'PLAYER ' + player} val={gameplay} clk={this.onClick} Bot={this.OnePlayer} BotHard={this.BotHard} TwoP={this.TwoPlayer} reset={this.reset_game} disp_text={text} winner={winner}/>
            </div>
        );
    }
}

export default App;
